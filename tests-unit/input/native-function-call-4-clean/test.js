const a = 2;

let z = 3;

function id(a, b, c, d) {
    return c;
}

z = id.call({}, 1, a, 3, 4);
