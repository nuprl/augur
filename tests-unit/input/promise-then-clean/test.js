const a = 3;

function identity(x) {
    return new Promise((resolve) => resolve(x));
}

identity(1).then((v) => {
    const z = v;
})
