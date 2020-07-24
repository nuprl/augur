let a = 5;

let obj = {prop: a};

// overwriting prop on obj
Object.defineProperty(obj, "prop", {value: 123});

let z = obj.prop;
