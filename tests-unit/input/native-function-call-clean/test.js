const a = 2;

let z = 3;

function setZ(val) {
    z = val;
}

setZ.call(undefined, 5);
