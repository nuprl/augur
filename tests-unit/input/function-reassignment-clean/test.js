const a = 2;
let z = 3;

function returnUntainted() {
    return 0;
}

function returnTainted() {
    // the next invocation of returnTainted will be untainted
    returnTainted = returnUntainted;
    return z;
}

returnTainted();
z = returnTainted();
