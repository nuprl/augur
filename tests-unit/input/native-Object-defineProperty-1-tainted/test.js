let a = 5;

let obj = {};

// adding prop to obj
Object.defineProperty(obj, "prop", {value: a});

let z = obj.prop;
