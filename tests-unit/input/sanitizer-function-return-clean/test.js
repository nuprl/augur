const a = 2;

function identity(x) {
    return x;
}

// Untainted, because `a` passes through a function return
const z = identity(a);
