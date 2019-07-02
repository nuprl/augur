const a = 3;

function MyPromise(executor) {
    executor((val) => val, () => 0);

    // Write this without async
    this.then = (onfulfilled) =>  {

    };
}

function identity(x) {
    return new MyPromise((resolve, reject) => resolve(x))
    // return new Promise((resolve) => resolve(x));
}

identity(a).then((v) => {
    const z = v;
});

