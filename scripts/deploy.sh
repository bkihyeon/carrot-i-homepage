#!/usr/bin/env bash
set -euo pipefail

IMAGE="registry.gitlab.com/carrot-i/carrot-i-homepage"
NAME="carrot-homepage"
STATE_DIR="/opt/carrot-homepage"
ENV_FILE="${STATE_DIR}/.env.production"
HISTORY_FILE="${STATE_DIR}/deploy-history.log"

TAG="${1:?usage: deploy.sh <tag>}"

PREV_IMG_ID="$(docker inspect -f '{{.Image}}' "${NAME}" 2>/dev/null || true)"

run_container() {
  local img="$1"
  docker rm -f "${NAME}" 2>/dev/null || true
  docker run -d --name "${NAME}" --restart unless-stopped \
    --env-file "${ENV_FILE}" -p 127.0.0.1:3000:3000 \
    --log-driver json-file --log-opt max-size=10m --log-opt max-file=5 \
    "${img}"
}

wait_healthy() {
  for i in {1..30}; do
    curl -fsS http://127.0.0.1:3000/api/health >/dev/null 2>&1 && return 0
    sleep 2
  done
  return 1
}

docker pull "${IMAGE}:${TAG}"
run_container "${IMAGE}:${TAG}"

if wait_healthy; then
  printf '%s %s\n' "$(date -Iseconds)" "${TAG}" >> "${HISTORY_FILE}"
  exit 0
fi

if [[ -n "${PREV_IMG_ID}" ]]; then
  run_container "${PREV_IMG_ID}"
  if wait_healthy; then
    printf '%s ROLLBACK-FROM=%s TO_PREV_IMAGE=%s\n' \
      "$(date -Iseconds)" "${TAG}" "${PREV_IMG_ID}" >> "${HISTORY_FILE}"
    exit 2
  fi
fi

exit 1
