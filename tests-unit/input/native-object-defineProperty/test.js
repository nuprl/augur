let a = 5;

let obj = {};

Object.defineProperty(obj, "prop", {value: a});

let z = obj.prop;
