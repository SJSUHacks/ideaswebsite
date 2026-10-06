#!/usr/bin/env bash
# Stop the background Vite dev server started by start.sh
set -euo pipefail

PID_FILE="/tmp/ideaswebsite-dev.pid"
PORT="${PORT:-5173}"

if [ -f "$PID_FILE" ]; then
  PID="$(cat "$PID_FILE")"
  if kill -0 "$PID" 2>/dev/null; then
    kill "$PID"
    echo "Stopped dev server (PID $PID)."
  fi
  rm -f "$PID_FILE"
fi

if lsof -ti ":$PORT" >/dev/null 2>&1; then
  lsof -ti ":$PORT" | xargs kill -9 2>/dev/null || true
  echo "Freed port $PORT."
fi
