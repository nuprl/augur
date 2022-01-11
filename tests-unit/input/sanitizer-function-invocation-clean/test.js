const userInput = "console.log('you\'ve been hacked!!');";

function sanitize(x) {
    return JSON.stringify(x);
}

// Will not be tainted because the input was sanitized
eval(sanitize(userInput))
