const a = 3;

async function identity(x) {
    throw x;
}

identity(a).catch((v) => {
    const z = v;
})