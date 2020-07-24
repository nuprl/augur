const a = 2;

// writable: false => reassigning shouldn't work
let obj = {};

Object.defineProperty(obj, "prop", {
    writable: false,
    value: 123
});

// SHOULD FAIL
obj.prop = a;

const z = 3;
