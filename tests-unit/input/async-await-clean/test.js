const a = 10;
var z = 0;

async function id(x) {
    return x;
}

async function assignToZ(x) {
    z = await id(x);
}

assignToZ(5);
