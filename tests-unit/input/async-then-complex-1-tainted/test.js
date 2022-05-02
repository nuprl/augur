// TODO: comment

const a = 2;

async function identity(x) {
    return x;
}

identity(a).then(v => {
    const z = v;
});

identity(2);
