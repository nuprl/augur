const src = "tainted";

async function id(x) {
    return x;
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
let promise3;

async function foo() {
    promise3 = id(src);

    z = (await Promise.all([promise1, promise2, promise3]))[2];
}

foo();