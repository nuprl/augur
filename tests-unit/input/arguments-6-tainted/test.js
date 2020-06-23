const a = 2;

// giving less arguments than named parameters
// accessing tainted argument and returning it
function f(a, b, c, d, e, f) {

    let fourthArg = arguments[3];
    let thirdArg = arguments[2];

    return thirdArg;
}

const z = f(1, 2, a, 4);
