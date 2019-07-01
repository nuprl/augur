// If assignment expressions do not properly throw away their values, this test
// will fail. `1` will be left on the stack and be used in place of `a` in the
// call to `first`.

// The taint source.
var a = 0;

// A function that assigns an untainted value to a variable.
function inc(x) {
    x = 1;
    return 1;
}

function first(g, h) {
    return g;
}

// If the untainted value of the assignment expression in `inc` is not
// discarded, it will leak into the stack, and take the place of the
// tainted value `a`.
//
// Then, when it is returned by `first`, `z` will be untainted, which it
// shouldn't be.
var z = first(a, inc(1));
