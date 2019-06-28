// If assignment expressions do not properly throw away their values, this test
// will fail. `a` will be left on the stack and be used in place of `1` in the
// call to `first`.

var a = 0;

function inc(x) {
    x = a;
    return 1;
}

function first(g, h) {
    return g;
}

var z = first(1, inc(1));
