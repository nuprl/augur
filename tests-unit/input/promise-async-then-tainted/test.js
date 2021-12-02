const a = 3;

async function foo() {
    return a;
}

foo().then(v => { const z = v; });
