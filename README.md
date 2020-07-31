<img src="./augur.png" align="left" height="100">

**Auger** is a dynamic taint analysis for Node.js implemented in TypeScript
using
[NodeProf](https://github.com/Haiyang-Sun/nodeprof.js). Auger is a clean room
implementation of the taint analysis described in the 
[IEEE TSE paper: Platform-Independent Dynamic Taint Analysis for JavaScript](https://www.franktip.org/pubs/tse2018.pdf).
 
---

## What is taint analysis?

**Taint analysis** is a dynamic analysis technique used to track 
*data flows* through programs. It's useful in many domains, but the most
common application of taint analysis is for detecting injection vulnerabilities.
Read 
[this paper](https://www.franktip.org/pubs/tse2018.pdf) for more background
on taint analysis.

## Getting started

Let's walk through how to install Auger and use it to analyze a Node.js project.

First, clone this project onto your machine:
```
$ git clone --recurse-submodules https://github.com/franktip/TaintAnalysis
$ cd TaintAnalysis/ts
```

Next, build NodeProf and Auger:
```
$ ./docker-nodeprof/docker-build.sh # Build NodeProf
$ npm install                       # Install Auger deps
$ npm run build                     # Build Auger
```

Try running a basic test to make sure your installation succeeded:
```
$ jest -t basic-assignment-tainted
Flows found into the following sinks: [
    {
        "type": "variable",
        "name": "z",
        "location": {
            "fileName": "test.js"
        }
    }
]
```

Your Auger installation is now set up!

#### Instrumenting an application

Using Auger to analyze your own applications simply requires placing a 
file, `spec.json`, at the **root** of your Node.js project:
```
{
    "main": "test.js",
    "sources": [
        {
            "type": "functionReturn",
            "name": "readFileSync"
        }
    ],
    "sinks": [
        {
            "type": "functionInvocation",
            "name": "exec"
        }
    ]
}
```
This file tells Auger the *sources* and *sinks* of the flows you want to
track. The spec above tells Auger to alert you if any value returned from
`readFileSync` flows into the function `exec`. It also tells Auger how to run
 your project: by executing the file `test.js`.

Let's say we analyze the following program, `test.js`:
```javascript
const fs = require('fs');
const child_process = require('child_process');

// read in user's message from a file
let input = fs.readFileSync("message.txt");

// echo the user's message
child_process.exec("echo 'User\'s message: " + input + "'");
```

This exact flow is a classic example of an *injection vulnerability*: `exec` is
a very powerful function, giving the command full control over your machine; and
`readFileAsync` returns arbitrary *user* input, meaning the user may have full
control of your machine. This can cause massive security issues, as well as
bugs with disastrous consequences.

Let's go ahead and use Auger to verify that there is indeed a taint flow
between user input and `exec`.

Our project is structured like this:
```
project/
|
+-- test.js
|
+-- message.txt
|
+-- spec.json
```
[This example is also a real test case in Auger.](https://github.com/franktip/TaintAnalysis/tree/master/tests-unit/input/simple-readFileSync-exec-tainted)

To analyze this project with Auger, we run:
```
$ cd TaintAnalysis/ts
$ node ./runner/cli.js ~/project project .
           #           ^^^^^^^^^ ^^^^^^^ ^
           #     path to project    |    |
           #                        |    |
           #             project name    |
           #                             |
           # directory to store temp files
```

Auger will alert us that the application does in fact have the flow we're
expecting:
```
Flows found into the following sinks: [
    {
        "type": "functionInvocation",
        "name": "exec"
    }
]
```

You've now analyzed your first application using Auger!

## Native function models
Modern JavaScript relies on a wide variety of native functions to improve
its usability and performance. Common operations on data structures and
utilities are now natively implemented in the VM, including array reduce,
promises, and regular expressions.

Because native functions are so pervasive, accurately tracking taint in modern
JavaScript requires an understanding of these functions. Our taint analysis only
analyzes JavaScript code, so we can't instrument the actual implementations of
these native functions. Our taint analysis supports two ways of tracking taint
through these native functions:

1. implementing *native models*. A native model is an implementation of a
native function that *only* tracks taint. It doesn't have to perform any
logical calculations, it just has to inform the
[abstract machine](https://github.com/franktip/TaintAnalysis/blob/master/ts/src/README.md)
where taint should flow as a result of the function call. These models are often
much easier to implement than the functions themselves because data flows are
often more simple than the logic in a function. For examples of native models,
look at
[`src/native/native.ts`](https://github.com/franktip/TaintAnalysis/blob/master/ts/src/native/native.ts).
2. using *polyfills*. Polyfills are implementations of native functions written
in JavaScript itself. While polyfills are traditionally used for providing
missing functionality to older web browsers, they can also help the taint
analysis understand data-flow. If you want to track data-flow through a native
function that you can write a polyfill for, use it normally in
[`src/native/polyfill.ts`](https://github.com/franktip/TaintAnalysis/blob/master/ts/src/native/polyfill.ts).

