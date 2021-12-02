// taint spec:
// sources: "src" variable
// sinks: "sink" variable

async function id(x) {
    return x;
}

function id_foo(x) {
    return x;
}

let src = "tainted";
let untainted_src = "untainted";

async function main() {
    let test = id_foo("bar");
    let not_sink = await id(untainted_src);
    let sink = await id(src);
    console.log("sink = " + sink);
}

main();
console.log("Hello World")


// Promise version of code above:
// function id(x) {
//     let p = new Promise((resolve, reject) => {
//         resolve(x);
//     })
//     return p;
// }
//
// let src = "tainted";
// let untainted_src = "untainted";
//
// let main = new Promise((resolve, reject) => {
//         id(untainted_src).then(v => {
//             id(src).then(v2 => {
//                 console.log("sink = " + v2);
//             })
//         });
//     });
//
// main.then(val => {
//     console.log("Hello World");
// });
