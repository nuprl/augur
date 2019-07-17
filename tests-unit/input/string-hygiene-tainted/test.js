const a = 2;

let obj = {};

// If strings are not sanitized when writing instructions to a file, this
// property read may prevent the analysis from instrumenting the tainted value
// assignment below.
obj["\"); /* "];

const z = a;

obj[" */ // "]