#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

IMAGE="registry.gitlab.com/carrot-i/carrot-i-homepage"
SSH_HOST="carrot-i"
REMOTE_DIR="/opt/carrot-homepage"

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
ssh -o BatchMode=yes "${SSH_HOST}" \
  "cd ${REMOTE_DIR} && ./deploy.sh ${TAG}"

# 배포(헬스체크 포함)가 성공한 경우에만 stable 갱신
echo "[release] updating :stable"
docker tag  "${IMAGE}:${TAG}" "${IMAGE}:stable"
docker push "${IMAGE}:stable"

echo "[release] deployed: ${TAG}"
