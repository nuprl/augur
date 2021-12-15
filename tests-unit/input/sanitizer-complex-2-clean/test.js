// Complex test for sanitizers that passes values through a recursive function

const a = "tainted";

const input = ["hello", "world", a, "!"]

function sanitize(string) {
    return JSON.stringify(string);
}

// String[] -> String
// Flattens an array of Strings to a single String by concatenating and sanitizing them.
// Example: ["a", "b", "c"] => "abc"
function strArrayFlatten(strArray) {
    if (strArray.length() === 0) {
        return "";
    } else {
        return sanitize(strArray[0]) + " " + strArrayFlatten(strArray.shift())
    }
}

// Untainted because that recursive function sanitizes its strings
const z = strArrayFlatten(input);
