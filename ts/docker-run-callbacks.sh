#!/usr/bin/env sh

# Used to run the analysis on a JavaScript file, just to receive information about the callbacks.
# Usage: ./docker-run-callbacks.sh <path to file>

CUR=$(pwd)
export CUR

docker run --rm \
       -v $CUR:/root/ts \
       -v $CUR/$1:/root/program.js \
       -e SOURCES="$2" \
       -e SINKS="$3" \
       jsanalysis:latest \
       /root/mx/mx -p /root/workspace-nodeprof/nodeprof.js/ jalangi --analysis /root/ts/dist/src/emptyAnalysis.js /root/program.js
