const a = 2;
let z = 3;

function f() {
    var x = a;

    {
        // because this is declared using a let, it will be contained in
        // this scope
        let x = 0;
    }

    z = x;
}

f();
