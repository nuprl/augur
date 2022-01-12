// Complex test for sanitizers that passes values through Promises and async/await.

const a = 2;

async function sanitize(x) {
    return JSON.stringify(x);
}

sanitize(a).then(Number.parseInt).then((int) => {
    // not tainted, because the `int` has been sanitized
    const z = int;
})
