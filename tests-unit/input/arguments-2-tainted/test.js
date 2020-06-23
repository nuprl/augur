const a = 2;

// unused named argument
// accessing tainted argument and returning it
function f(x) {
    let firstArg = arguments[0];

    return firstArg;
}

const z = f(a);
