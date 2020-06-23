const a = 3;

function identity(x) {
    return new Promise(function foo(resolve, reject) { resolve(x) });
}

identity(a).then(function bar(v) {
    const z = v;
})