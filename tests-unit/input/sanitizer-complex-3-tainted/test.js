// Complex test for sanitizers that passes values through Promises and async/await.

const a = 2;

async function sanitize(x) {
    return JSON.stringify(x);
}

async function identity(x) {
    return x;
}

identity(a).then(Number.parseInt).then((int) => {
    // Tainted, because the `int` has not been sanitized
    const z = int;
})
