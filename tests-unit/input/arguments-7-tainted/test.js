const a = 2;

// giving more arguments than named parameters
// accessing tainted argument and returning it
function f(a, b, c) {

    let clean = arguments[6];
    let tainted = arguments[5];

    return tainted;
}

const z = f(1, 2, 3, 4, 5, a, 6, 7);
