const a = 2;

let z = 3;

function setZ() {
    z = this.val;
}

setZ.call({val: a});
