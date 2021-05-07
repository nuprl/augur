let src = "tainted";
let z = "currently untainted";

async function main(arg) {
    let not_sink = await id(arg);
    let sink = await id(z);
}

async function id(x) {
    console.log(x);
    return x;
}

async function foo() {
    main(z);
    z = src
}

foo();







