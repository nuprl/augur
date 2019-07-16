'use strict'


var child = require('child_process')


try {
    var stdout = child.execFileSync('cmd')
    console.log(stdout.toString().trim());
} catch (e) {
    throw new Error('Cannot read locale.' +e)
}
