const a = 2;

let z = 3;

function id(val) {
    return val;
}

z = id.call(undefined, 7);
