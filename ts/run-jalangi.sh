#!/usr/bin/env sh

if [ "$#" -lt 1 ] || [ "$#" -gt 3 ]; then
    echo "Usage: ./run-jalangi.sh <JS file to instrument> [optional comma-separated sources list] [optional comma-separated sinks list]"
    exit 1
fi

CUR=$(pwd)
export CUR
export SOURCES=$2
export SINKS=$3
(cd "$JALANGI_PATH" && node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis  "$CUR/dist/src/emptyAnalysis.js" "$CUR/$1")
