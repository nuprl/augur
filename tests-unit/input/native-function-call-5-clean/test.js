const a = 2;

function setZ() {
    let garbage;
    const z = garbage;
}

function callSetZ() {
    setZ.call({}, arguments[0]);
}

// `a` travels through 2 functions before reaching z.
// both of them use the arguments variable, and one of them is invoked using
// Function.call.
// `a` *shouldn't* actually reach `z`, but if the stack machine isn't
// correctly informed about how many arguments the function is expecting,
// `garbage` will be initialized with the value of `a`.

// this is a regression test.
callSetZ(a);
