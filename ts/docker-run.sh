#!/usr/bin/env sh

# Used to run the analysis on a JavaScript file.

if [ "$#" -lt 1 ] || [ "$#" -gt 3 ]; then
    echo "Usage: ./docker-run.sh <JS file to instrument> <optional comma-separated sources list> <optional comma-separated sinks list>"
    exit 1
fi

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
