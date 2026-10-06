#!/usr/bin/env bash
# Start (or restart) the Vite dev server in the background.
# Usage: ./start.sh
set -euo pipefail

cd "$(dirname "$0")/frontend"

PORT="${PORT:-5173}"
LOG_FILE="/tmp/ideaswebsite-dev.log"
PID_FILE="/tmp/ideaswebsite-dev.pid"

# Kill any previously started instance tracked by this script.
if [ -f "$PID_FILE" ]; then
  OLD_PID="$(cat "$PID_FILE")"
  if kill -0 "$OLD_PID" 2>/dev/null; then
    kill "$OLD_PID" 2>/dev/null || true
    sleep 0.5
  fi
  rm -f "$PID_FILE"
fi

# Also free the port in case something else is squatting on it.
if lsof -ti ":$PORT" >/dev/null 2>&1; then
  lsof -ti ":$PORT" | xargs kill -9 2>/dev/null || true
fi

echo "Starting Vite dev server on port $PORT..."
nohup npm run dev -- --port "$PORT" > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"

# Wait briefly for it to come up, then report the URL.
for i in $(seq 1 20); do
  if grep -q "Local:" "$LOG_FILE" 2>/dev/null; then
    break
  fi
  sleep 0.3
done

grep "Local:" "$LOG_FILE" 2>/dev/null || echo "Still starting — check $LOG_FILE"
echo "Logs: $LOG_FILE"
echo "PID:  $(cat "$PID_FILE")"
