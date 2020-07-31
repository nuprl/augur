const fs = require('fs');
const child_process = require('child_process');

// read in user's message from a file
let input = fs.readFileSync("message.txt");

// echo the user's message
child_process.exec("echo 'User\'s message: " + input + "'");