const a = 10;
var z = 0;
var x = 5;

async function id(x) {
    return x;
}

async function assignToZ(x) {
    z = await id(x);
}

async function assignToX() {
    await assignToZ(a);
    x = z;
}

assignToX(a);
console.log("hello, world")
