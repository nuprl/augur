const a = 3;

async function identity(x) {
    throw x;
}

identity(a).then((v) => {
    const z = v;
})