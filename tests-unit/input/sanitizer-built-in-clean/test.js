const url = require("url");

const input = "https://github.com/";

// not tainted, since it passes through the `url.parse` builtin
const parsed = url.parse(input)

