const a = 2;

// giving less arguments than named parameters
// accessing tainted argument but returning clean value
function f(a, b, c, d, e, f) {

    let fourthArg = arguments[3];
    let thirdArg = arguments[2];

    return fourthArg;
}

const z = f(1, 2, a, 4);
