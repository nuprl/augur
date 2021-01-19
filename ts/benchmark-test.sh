#!/bin/bash

echo "hello World"

BENCHMARK=""
while [[ $# -gt 0 ]]
do
    key="$1"

    case $key in
        chook)
            BENCHMARK="benchmark-chook-growl-reporter-exec"
            shift
            shift
            ;;
        cocos)
            BENCHMARK="benchmark-cocos-utils"
            shift
            shift
            ;;
        fish)
            BENCHMARK="benchmark-fish-exec"
            shift
            shift
            ;;
        git2json)
            BENCHMARK="benchmark-git2json-exec"
            shift
            shift
            ;;
        gm)
            BENCHMARK="benchmark-gm-attack"
            shift
            shift
            ;;
        growl)
          BENCHMARK="benchmark-growl-exec"
            shift
            shift
            ;;
        libnotify)
            BENCHMARK="benchmark-libnotify-exec"
            shift
            shift
            ;;
        m-log)
            BENCHMARK="benchmark-m-log-eval"
            shift
            shift
            ;;
        mixin-pro)
            BENCHMARK="benchmark-mixin-pro-eval"
            shift
            shift
            ;;
        modulify)
            BENCHMARK="benchmark-modulify-eval"
            shift
            shift
            ;;
        mongo-parse)
            BENCHMARK="benchmark-mongo-parse-eval"
            shift
            shift
            ;;
        mongoosemask)
            BENCHMARK="benchmark-mongoosemask-eval"
            shift
            shift
            ;;
        mongoosify)
            BENCHMARK="benchmark-mongoosify-eval"
            shift
            shift
            ;;
        node-os)
            BENCHMARK="benchmark-node-os-utils"
            shift
            shift
            ;;
        node-wos)
            BENCHMARK="benchmark-node-wos"
            shift
            shift
            ;;
        office)
            BENCHMARK="benchmark-office-converter"
            shift
            shift
            ;;
        os-uptime)
            BENCHMARK="benchmark-chook-growl-reporter-exec"
            shift
            shift
            ;;
        osenv)
            BENCHMARK="benchmark-osenv"
            shift
            shift
            ;;
        pidusage)
            BENCHMARK="benchmark-pidusage-exec"
            shift
            shift
            ;;
        pomelo)
            BENCHMARK="benchmark-pomelo-monitor"
            shift
            shift
            ;;
        system-locale)
            BENCHMARK="benchmark-system-locale"
            shift
            shift
            ;;
        systeminformation)
            BENCHMARK="benchmark-systeminformation"
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

times=("")

node ./runner/cli.js ../test-unit/input/$benchmark b .
  output=$(command)
    while read -r line; do
      process "$line"
    done <<< "$output"

#for number in {1..10}
#do
#  node ./runner/cli.js ../test-unit/input/$benchmark b .
#  output=$(command)
#    while read -r line; do
#      process "$line"
#    done <<< "$output"
#done

