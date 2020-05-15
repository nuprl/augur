const a = 2;

// configurable: false => prop can't be deleted && attributes other than
// value and writable can't be modified
let obj = {};

// obj.prop = a (not enumerable OR configurable)
Object.defineProperty(obj, "prop", {
    configurable: false,
    enumerable: true,
    value: a
});

// try to make it enumerable
// THIS WILL FAIL BECAUSE THE PROP IS NOT CONFIGURABLE
try {
    Object.defineProperty(obj, "prop", {
        enumerable: false
    });
} catch (exception) {
    // this is expected...
}

let z = 123;

// try to enumerate prop and set z to it (this will work)
// (WILL ONLY WORK IF FOR IN LOOPS ARE CORRECTLY IMPLEMENTED)
for (property in obj) {
    z = obj[property];
}
