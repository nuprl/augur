const a = 2;

// writable: false => reassigning shouldn't work
let obj = {};

Object.defineProperty(obj, "prop", {
    writable: false,
    value: a
});

// SHOULD FAIL
obj.prop = 123;

const z = 3;
