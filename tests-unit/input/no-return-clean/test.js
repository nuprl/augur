const a = 2;

function id(x) {
    return x;
}

function f(x) {}

id(a);

// Imprecise analyses may assign z to the last value returned by a function.
// Since `id` is the last value to return, z could be assigned to a
// incorrectly.
const z = f(a);
