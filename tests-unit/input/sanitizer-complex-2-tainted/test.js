// Complex test for sanitizers that passes values through a recursive function

const a = "tainted";

const input = ["hello", "world", a, "!"]

function sanitize(string) {
    return JSON.stringify(string);
}

// String[] -> String
// Flattens an array of Strings to a single String by concatenating and NOT sanitizing them.
// Example: ["a", "b", "c"] => "abc"
function strArrayFlatten(strArray) {
    if (strArray.length === 0) {
        return "";
    } else {
        return strArray[0] + " " + strArrayFlatten(strArray.slice(1));
    }
}

// Tainted because that recursive function does not sanitize its strings
const z = strArrayFlatten(input);
