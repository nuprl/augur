const a = 2;

let arr = [1, 2, 3];
// pushing tainted values doesn't modify existing clean values
arr.push(4, 5, a, a);

const z = arr[1];
