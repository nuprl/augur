const a = 2;
let z = 3;

function f() {
    var x = a;

    {
        // because this is defined using var, its scope will be hoisted to
        // the function level, shadowing the previously defined x
        var x = 0;
    }

    z = x;
}

f();
