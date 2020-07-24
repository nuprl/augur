const a = 2;

let z = 0;

let arr = [1, 2, 3, 4, 5];

// equivalent to
// z = arr[3]
arr.forEach((value, index, array) => {
    if (index === 3) {
        z = value;
    }
});
