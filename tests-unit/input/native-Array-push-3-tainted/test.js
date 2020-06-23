const a = 2;

let arr = [1, 2, 3];
// pushing mixed clean/tainted values
arr.push(4, 5, a, 7);

const z = arr[5];
