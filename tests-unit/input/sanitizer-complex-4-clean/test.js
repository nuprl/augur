// Complex test for sanitizers that passes values through Promises and async/await.
// Same test as sanitizer-complex-3, but it doesn't pass through a builtin.

const a = 2;

async function sanitize(x) {
    return JSON.stringify(x);
}

sanitize(a).then(identity).then((int) => {
    // not tainted, because the `int` has been sanitized
    const z = int;
})
