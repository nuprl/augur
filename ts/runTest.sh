#!/usr/bin/env sh

if [ "$#" -lt 1 ] || [ "$#" -gt 3 ]; then
    echo "Usage: ./runTest.sh <instructions to instrument> <optional comma-separated sources list> <optional comma-separated sinks list>"
    exit 1
fi

export SOURCES="$2"
export SINKS="$3"

npm run run:instrs < "$1"
