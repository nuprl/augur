var child_process = require('child_process');
var a = ['ls '];
a[1] = process.argv[2];
var command = a.reduce(function(x,y){ return x + y }, ' ');
child_process.exec(command, function(err,stdout,stderr){
     if (!err){ console.log(stdout.toUpperCase()); }
});

