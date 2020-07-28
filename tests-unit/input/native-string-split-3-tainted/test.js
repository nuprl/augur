// Modified version of m-log-eval benchmark, used as a minimal test case for
// a bug.

/*
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

console.log("Hello");
sleep(2000);
console.log("World!");
*/

/* for the eval benchmarks, the idea is to inject an assignment to a property of "console", and
   later check whether the property was set */
var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';

function dummySource(val){
    payload += val;
}

dummySource(' ');

let colorTheme = {c1: ["\"]};" + payload + "//"]};
var aryVal = (colorTheme.c1).toString().split(',');
eval("//" + aryVal[0]);
