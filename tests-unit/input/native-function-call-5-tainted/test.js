const a = 2;

function setZ() {
    let garbage = null;
    const z = arguments[0];
}

function callSetZ() {
    setZ.call({}, arguments[0]);
}

// `a` travels through 2 functions before reaching z.
// both of them use the arguments variable, and one of them is invoked using
// Function.call.
callSetZ(a);
