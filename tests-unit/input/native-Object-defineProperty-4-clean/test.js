const a = 2;

// configurable: false => prop can't be deleted && attributes other than
// value and writable can't be modified
let obj = {};

// obj.prop = a (not enumerable OR configurable)
Object.defineProperty(obj, "prop", {
    configurable: false,
    enumerable: false,
    value: a
});

// try to make it enumerable
// THIS WILL FAIL BECAUSE THE PROP IS NOT CONFIGURABLE
try {
    Object.defineProperty(obj, "prop", {
        enumerable: true
    });
} catch (exception) {
    // this is expected...
}

let z = 123;

// try to enumerate prop and set z to it (won't work)
for (property in obj) {
    z = obj[property];
}
