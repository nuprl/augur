const a = 3;

async function identity(x) {
    return x;
}

identity(a).then((v) => {
    const z = a;
})