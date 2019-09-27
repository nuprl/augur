/**
 * File: arraymath.js
 */

function add(arr) {
    return arr.reduce((x,y) => x+y, 0);
};
function multiply(arr) {
    return arr.reduce((x,y) => x*y, 1);
};

export { add, multiply };
