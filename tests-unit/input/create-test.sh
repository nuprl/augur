#!/bin/sh
# USAGE: ./create-test.sh "test name"
# does the following:
# 1. creates two tests:
#     1. "test name"-clean
#     2. "test name"-tainted
# 2. adds these tests to the runner script

for f in clean tainted; do
    cp -r "template-$f" "$1-$f";
    echo "test('$1-$f', (done) => runTest('$1-$f', done));" >> ../../ts/tests/runner.test.js;
done
