// If assignment expressions do not properly throw away their values, this test
// will fail. `a` will be left on the stack and be used in place of `1` in the
// call to `first`.

// The taint source.
var a = 0;

// A function that assigns a tainted value to a variable.
function inc(x) {
    x = a;
    return 1;
}

function first(g, h) {
    return g;
}

// If the tainted value of the assignment expression in `inc` is not
// discarded, it will leak into the stack, and take the place of the
// untainted value `1`.
//
// Then, when it is returned by `first`, `z` will be tainted, which it
// shouldn't be.
var z = first(1, inc(1));
