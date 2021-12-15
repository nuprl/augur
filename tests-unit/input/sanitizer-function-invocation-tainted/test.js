const userInput = "console.log('you\'ve been hacked!!');";

function sanitize(x) {
    return JSON.stringify(x);
}

// Will be tainted because the input was not sanitized
eval(userInput)
