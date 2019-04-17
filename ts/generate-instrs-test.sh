#!/usr/bin/env sh

CUR=$(pwd)
export CUR
(cd "$NODEPROF_PATH" && mx jalangi --analysis "$CUR/dist/src/analysis/index.js" "$1")