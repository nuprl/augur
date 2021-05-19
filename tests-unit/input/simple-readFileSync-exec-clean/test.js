const fs = require('fs');
const child_process = require('child_process');
const path = require('path');

// read in user's message from a file
let input = fs.readFileSync(path.resolve(__dirname, "message.txt"));

// echo the user's message
child_process.exec("echo 'User\'s message:'");
console.log(input);