const a = 3;

function identity(x) {
    return new Promise((resolve) => resolve(x));
}

const z = await identity(1);