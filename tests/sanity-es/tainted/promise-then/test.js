const a = 3;

function identity(x) {
    return new Promise((resolve) => resolve(x));
}

identity(a).then((v) => {
    const z = a;
})