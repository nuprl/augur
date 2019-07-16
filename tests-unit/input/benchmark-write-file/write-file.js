done = function done(){
    console.log("Done!");
};


var content = 'Hello  World!';

fs = require('fs');

function dummySource(val){
    content += val;
}

dummySource(' ');

fs.writeFile('helloworld.txt', content, function (err) {
    if (err) return console.log(err);
    console.log( content + ' > helloworld.txt');
    done();
});





