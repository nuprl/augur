#!/usr/bin/env sh

export SOURCES="$2"
export SINKS="$3"

npm run run:instrs < "$1"