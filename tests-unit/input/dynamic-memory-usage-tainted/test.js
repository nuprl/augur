const a = 2;
let z = 3;

function buildContainer(value) {
    return {value: value};
}

// see the comment in dynamic-memory-usage-clean. this test does the opposite.

let x = buildContainer(a);
buildContainer(0);
z = x.value;
