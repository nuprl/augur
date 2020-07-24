const a = 2;

// named arguments but unused
// accessing tainted argument but returning clean value
function f(a, b, c, d, e, f) {
    let sixthArg = arguments[5];
    let thirdArg = arguments[2];

    return sixthArg;
}

const z = f(1, 2, a, 4, 5, 6);
