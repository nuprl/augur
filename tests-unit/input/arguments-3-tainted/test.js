const a = 2;

// no named arguments
// multiple arguments given
// accessing tainted argument and returning it
function f() {
    let sixthArg = arguments[5];
    let thirdArg = arguments[2];

    return thirdArg;
}

const z = f(1, 2, a, 4, 5, 6);
