const url = require("url");

const input = "https://github.com/";

// tainted, since it doesn't pass through the `url.parse` builtin
const parsed = input;

