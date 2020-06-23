const a = 2;

// no named arguments
// accessing tainted argument and returning it
function f() {
    let firstArg = arguments[0];

    return firstArg;
}

const z = f(a);
