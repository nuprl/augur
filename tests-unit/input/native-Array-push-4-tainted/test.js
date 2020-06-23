const a = 2;

let arr = [1, a, 3];
// pushing clean values doesn't modify existing tainted values
arr.push(4, 5, 6, 7);

const z = arr[1];
