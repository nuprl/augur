const a = 2;

let arr = [1, 2, 3];
// pushing multiple tainted values
arr.push(a, a, a, a);

const z = arr[5];
