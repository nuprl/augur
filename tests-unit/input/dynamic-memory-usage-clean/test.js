const a = 2;
let z = 3;

function buildContainer(value) {
    return {value: value};
}

// the analysis may only give unique ids to code locations that allocate
// memory. if this is true, the second buildContainer call will allocate a
// new object with the same id, but its value will be tainted. when the
// value inside the container is assigned to z, it will be tainted.

// if the analysis properly handles dynamic memory allocation, and gives
// each executed allocation its own unique id, the two objects created by
// buildContainer will have distinct ids, and z will contain 0 and be untainted.

let x = buildContainer(0);
buildContainer(a);
z = x.value;
