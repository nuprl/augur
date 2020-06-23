const a = 2;

// unused named argument
// accessing tainted argument but returning clean value
function f(x) {
    let firstArg = arguments[0];

    return 0;
}

const z = f(a);
