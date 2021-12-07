async function id(x) {
    return x;
}

let src = "tainted";
let untainted_src = "untainted";

async function main() {
    let not_sink = await id(untainted_src);
    let sink1 = await id("foo");
}

async function main2(arg) {
    let sink = await id(arg);
    console.log("sink = " + sink);
}

async function foo() {
    main("bar");

    console.log("Hello World")
    await main2(src);
}

foo();