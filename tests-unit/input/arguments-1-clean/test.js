const a = 2;

// no named arguments
// accessing tainted argument but returning clean value
function f() {
    let firstArg = arguments[0];

    return 0;
}

const z = f(a);
