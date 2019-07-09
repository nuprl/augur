// The assignment expression, `z = this`, generates instructions to pop the
// stack and write this to `z`. Prior to this expression, `height` was pushed
// onto the stack. If no instruction is generated for `this`, `height` is
// used instead, resulting in a tainted variable taking the place of `this`.

let a = 2;
let z = 3;

function Square(width, height) {
    let doIExist = height === (z = this);
}

let s = new Square(10, a);
