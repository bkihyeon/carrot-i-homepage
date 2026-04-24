#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

IMAGE="registry.gitlab.com/carrot-i/carrot-i-homepage"
SSH_HOST="carrot-i"
REMOTE_DIR="/opt/carrot-homepage"

# 사전 점검 — 빌드 전에 확실히 실패시켜 중간상태 방지
docker info >/dev/null 2>&1 \
  || { echo "ERROR: docker daemon not running." >&2; exit 1; }
ssh -o BatchMode=yes -o ConnectTimeout=5 "${SSH_HOST}" "true" \
  || { echo "ERROR: ssh ${SSH_HOST} failed (agent/key/host config)." >&2; exit 1; }

# dirty tree 방지
if [[ -n "$(git status --porcelain)" ]]; then
  echo "ERROR: working tree is dirty. commit or stash first." >&2
  exit 1
fi

TS="$(date +%Y%m%d-%H%M)"
SHA="$(git rev-parse --short HEAD)"
TAG="${TS}-${SHA}"

echo "[release] building ${IMAGE}:${TAG}"
docker build --platform=linux/amd64 -t "${IMAGE}:${TAG}" .

echo "[release] pushing ${IMAGE}:${TAG}"
docker push "${IMAGE}:${TAG}"

echo "[release] triggering deploy on ${SSH_HOST}"
set +e
ssh -o BatchMode=yes "${SSH_HOST}" \
  "cd ${REMOTE_DIR} && ./deploy.sh ${TAG}"
RC=$?
set -e

case "${RC}" in
  0)
    # 배포 성공 → :stable 갱신
    echo "[release] updating :stable"
    docker tag  "${IMAGE}:${TAG}" "${IMAGE}:stable"
    docker push "${IMAGE}:stable"
    echo "[release] deployed: ${TAG}"
    ;;
  2)
    # 신버전 실패, 이전 이미지로 자동 복구됨 → :stable 건드리지 않음
    echo "[release] WARN: ${TAG} failed health check on remote; rolled back to previous image."
    echo "[release] :stable was NOT updated. Investigate ${TAG} before retrying."
    exit 2
    ;;
  *)
    echo "[release] ERROR: remote deploy.sh returned ${RC} (manual intervention likely required)." >&2
    exit "${RC}"
    ;;
esac
