let a = 5;

let obj = {prop: 123};

// overwriting prop on obj
Object.defineProperty(obj, "prop", {value: a});

let z = obj.prop;
