#!/usr/bin/env sh

# Used to run the analysis on a JavaScript file.
# Usage: ./docker-run.sh <path to file>

CUR=$(pwd)
export CUR
export SOURCES=$2
export SINKS=$3

docker run --rm \
       -v $CUR:/root/ts \
       -v $CUR/$1:/root/program.js \
       -e SOURCES=$2 \
       -e SINKS=$3 \
       jsanalysis:latest
