// TODO: comment

const a = 2;

async function identity(x) {
    return x;
}

// a function that is just a sink
async function sink(x) {
    const z = x;
    return z;
}

// If .then isn't implemented correctly, it might advise the next function
// call to have tainted arguments.
// First bug trigger:
identity(a).then(v => {
    console.log("Identity: " + v)
});

sink(2);
