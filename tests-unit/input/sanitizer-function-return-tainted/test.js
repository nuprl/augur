const a = 2;

function identity(x) {
    return x;
}

const b = identity(a);

// Tainted, because `a` doesn't pass through a function return
const z = a;
