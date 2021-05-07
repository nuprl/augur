const src = "tainted";

function id(x) {
    return x;
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
let promise3;

async function foo() {
    promise3 = await id(src);

    Promise.all([promise1, promise2, promise3]).then((values) => {
        values.forEach((val, index, array) => {
            if (index === 2) {
                z = val;
            }
        });
    });
}

foo();