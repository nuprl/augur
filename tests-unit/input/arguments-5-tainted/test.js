const a = 2;

// named arguments used while also accessing arguments array
// accessing tainted argument and returning it
function f(a, b, c, d, e, f) {

    let clean = f;
    let tainted = c;

    let sixthArg = arguments[5];
    let thirdArg = arguments[2];

    return tainted;
}

const z = f(1, 2, a, 4, 5, 6);
