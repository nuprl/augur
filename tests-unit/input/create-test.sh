for f in clean tainted; do cp -r "template-$f" "$1-$f"; echo "test('$1-$f', (done) => runTest('$1-$f', done));" >> ../../ts/tests/runner.test.js; done
