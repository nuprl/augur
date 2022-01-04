// Complex test for sanitizers, that uses multiple async/await calls

const a = 2;

// sanitize user input using JSON.stringify
async function sanitize(val) {
    return JSON.stringify(val);
}

// process user input by surrounding it with 2 JSON objects
async function processUserInput(input) {
    let preprocessed = "{" + input + "}";

    let sanitized = await sanitize(preprocessed);

    let postprocessed = "{" + sanitized + "}";

    return postprocessed;
}

// Not tainted, because it passes through the `sanitize` function at some point
async function run() {
    const z = await processUserInput(a);
}

run();
