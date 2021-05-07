let src = "tainted";
let z = "currently untainted";

async function main(arg) {
    let sink = await id(arg);
}

async function id(x) {
    let z = "hello, world"
    return x;
}

async function foo() {
    main(z);
    z = src
}

foo();