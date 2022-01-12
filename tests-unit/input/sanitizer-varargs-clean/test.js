const a = 2;

/**
 * This function sanitizes any arguments it's called with,
 * and returns them as an array.
 */
function sanitize() {
    let sanitized = []

    for (let i = 0; i < arguments.length; i++) {
        sanitized.push(JSON.stringify(arguments[i]))
    }

    return sanitized
}

const sanitizedValues = sanitize(1, 391.3, "hello", a, "world!")

const z = sanitizedValues[3];
