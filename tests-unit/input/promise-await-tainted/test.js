const a = 3;
let z = 0;

function id(x) {
    return new Promise((resolve) => resolve(x));
}

async function assignToZ(x) {
    z = await id(x);
}

assignToZ(a);
