// Modified version of m-log-eval benchmark, used as a minimal test case for
// a bug.

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


let logger = new(function() {
    'use strict';
    this.setColorTheme = function(colorTheme) {
        for(var i in colorTheme){
            // console.log('i', i);
            var theme = "";
            if(typeof colorTheme[i] === 'string'){
                theme = '"'+colorTheme[i] + '"';
                eval('colors.setTheme({' + i + ':' + theme + '});');
            }else{
                var v = "";
                var aryVal = (colorTheme[i]).toString().split(',');
                for (var x=0; x < aryVal.length; x++){
                    if(x > 0) v += ',';
                    v += '"' + aryVal[x] + '"';
                }
                eval('theme = {' + i + ':['+ v +']}');
            }
        }
    }
})();

/* for the eval benchmarks, the idea is to inject an assignment to a property of "console", and
   later check whether the property was set */
var payload = 'console[\"my-awesome-prop-23-42\"] = 23;';

function dummySource(val){
    payload += val;
}

dummySource(' ');

logger.setColorTheme({c1: ["\"]};" + payload + "//"]});

if (console["my-awesome-prop-23-42"]){
    console.log("payload was delivered");
} else {
    console.log("payload NOT delivered");
}
