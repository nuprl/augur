#!/usr/bin/env sh

# Used to run the analysis on a JavaScript file, just to receive information about the callbacks.

if [ "$#" -lt 1 ] || [ "$#" -gt 4 ]; then
    echo "Usage: ./docker-run-callbacks.sh <JS file to instrument> [optional comma-separated sources list] [optional comma-separated sinks list] [--private]"
    exit 1
fi

CUR=$(pwd)
export CUR

if [[ $4 = "--private" ]]
then
    DOCKER_IMAGE_NAME=jsanalysis-private:latest
else
    DOCKER_IMAGE_NAME=jsanalysis:latest
fi

docker run --rm \
       -v $CUR:/root/ts \
       -v $CUR/$1:/root/program.js \
       -e SOURCES="$2" \
       -e SINKS="$3" \
       $DOCKER_IMAGE_NAME \
       /root/mx/mx -p /root/workspace-nodeprof/nodeprof.js/ jalangi --analysis /root/ts/dist/src/emptyAnalysis/nodeprofAnalysis.js /root/program.js
