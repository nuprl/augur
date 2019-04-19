var a = 2;

function identity(x, y) {
    return x;
}

var z = identity(identity(a), identity(2));