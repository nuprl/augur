#!/usr/bin/env bash

usage() {
    echo "Usage: ./docker-run.sh [-h|--help] --inputFile <file to instrument> --outputFile <path to desired analysis output> [--sources <comma-separated sources list>] [--sinks <comma-separated sinks list]"
}

CUR=""
INPUT_FILE=""
OUTPUT_FILE=""
SOURCES=""
SINKS=""
DOCKER_OPTIONS=""
MX_OPTIONS=""

# Used to run the analysis on a JavaScript file.
# Parse arguments.
while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -h|--help)
    usage
    exit 0
    ;;
    --inputFile)
    INPUT_FILE="$2"
    shift
    shift
    ;;
    --outputFile)
    OUTPUT_FILE="$2"
    shift
    shift
    ;;
    --sources)
    SOURCES="$2"
    shift
    shift
    ;;
    --sinks)
    SINKS="$2"
    shift
    shift
    ;;
    # Unknown argument
    *)
    usage
    exit 1
    ;;
esac
done

CUR=$(pwd)
export CUR
export SOURCES
export SINKS

# If the user did not specify the program to instrument, print the usage and
# terminate.
if [[ -z "$INPUT_FILE" ]] || [[ -z "$OUTPUT_FILE" ]]
then
    usage
    exit 1
fi

# Docker doesn't allow relative paths when mounting volumes, so we must ensure
# INPUT_FILE and OUTPUT_FILE are absolute. We can do this by canonicalizing
# both paths.
canonicalize() {
    readlink -f "$@"
}
INPUT_FILE=`canonicalize "$INPUT_FILE"`
OUTPUT_FILE=`canonicalize "$OUTPUT_FILE"`

# Ensure the Docker container exists before we attempt to use it.
if ! (docker images | grep -q "jsanalysis")
then
    echo "The NodeProf Docker image has not yet been built. Please run docker-build.sh in a shell and re-try this command after."
    exit 1
fi

# Ensure the output file exists before we attempt to mount it inside the
# Docker container.
touch "$OUTPUT_FILE"

docker run --rm \
       -v $CUR:/root/ts \
       -v $INPUT_FILE:/root/program.js \
       -v $OUTPUT_FILE:/root/output.js \
       -e SOURCES="$SINKS" \
       -e SINKS="$SOURCES" \
       jsanalysis:latest \
       bash -c \
       "(cd /root/ts; \
       /root/mx/mx -p /root/nodeprof/ jalangi \
         --initParam outputFile:/root/output.js \
         --analysis /root/ts/dist/src/analysis/index.js /root/program.js)"
