// async function id(x) {
//     return x;
// }
//
// let src = "tainted";
// let untainted_src = "untainted";
//
// async function main(arg) {
//     let not_sink = await id(untainted_src);
//     let sink = await id(arg);
//     console.log("sink = " + sink);
// }
//
// async function main2() {
//     let bar = await id("foo");
// }
//
// async function foo() {
//     main(src);
//
//     await main2();
// }
//
// foo();

async function id(x) {
    return x;
}

let src = "tainted";
let untainted_src = "untainted";

async function main(arg) {
    let not_sink = id(untainted_src);
    let sink = id(arg);
    console.log("sink = " + sink);
}

async function main2() {
    let bar = id("foo");
}

async function foo() {
    main(src);

    // main2();
}

foo();