const a = 3;

async function identity(x) {
    return x;
}

identity(1).then((v) => {
    const z = a;
})