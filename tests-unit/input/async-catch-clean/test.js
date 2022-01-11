const a = 3;

async function identity(x) {
    return x;
}

identity(a).catch((v) => {
    const z = v;
})