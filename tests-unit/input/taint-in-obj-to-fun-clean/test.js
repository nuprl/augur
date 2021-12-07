const a = "tainted";
let z = (x) => x;
z({field: a});
