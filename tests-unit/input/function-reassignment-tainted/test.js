const a = 2;
let z = 3;

function returnUntainted() {
    // the next invocation of returnUntainted will be tainted
    returnUntainted = returnTainted ;
    return 0;
}

function returnTainted() {
    return a;
}

returnUntainted();
z = returnUntainted();
