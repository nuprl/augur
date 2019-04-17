#!/usr/bin/env sh

CUR=$(pwd)
export CUR
export SOURCES=$2
export SINKS=$3
(cd "$JALANGI_PATH" && node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis  "$CUR/dist/src/emptyAnalysis.js" "$CUR/$1")