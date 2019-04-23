const a = 3;

async function identity(x) {
    return x;
}

const x = await identity(1);