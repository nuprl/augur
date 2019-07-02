const a = 3;

function identity(x) {
    return new Promise((resolve, reject) => resolve(x));
}

identity(a).then((v) => {
    const z = v;
})