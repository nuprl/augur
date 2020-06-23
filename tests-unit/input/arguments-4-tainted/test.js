const a = 2;

// named arguments but unused
// accessing tainted argument and returning it
function f(a, b, c, d, e, f) {
    let sixthArg = arguments[5];
    let thirdArg = arguments[2];

    return thirdArg;
}

const z = f(1, 2, a, 4, 5, 6);
