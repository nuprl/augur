[![Augur Build Status](https://github.com/nuprl/augur/actions/workflows/Augur.yml/badge.svg)](https://github.com/nuprl/augur/actions/workflows/Augur.yml)
<img src="./augur.png" align="left" height="100">

**Augur** is a dynamic taint analysis for Node.js implemented in TypeScript
using
[NodeProf](https://github.com/Haiyang-Sun/nodeprof.js). Augur is a clean-room
implementation of Ichnaea, the taint analysis described in the 
[IEEE TSE paper: Platform-Independent Dynamic Taint Analysis for JavaScript](https://www.franktip.org/pubs/tse2020.pdf).
 
---

## What is taint analysis?

**Taint analysis** is a dynamic program analysis technique used to track 
*data flows* through programs. It's useful in many domains, but the most
common application of taint analysis is for detecting injection vulnerabilities.
Read 
[this paper](https://www.franktip.org/pubs/tse2020.pdf) for more background
on taint analysis.

## Getting started

Let's walk through how to install Augur and use it to analyze a Node.js project.

First, install Augur's dependencies if you don't already have them: `node`, `npm`, and `docker`.

Clone this project onto your machine, then build Augur:
```
git clone --recurse-submodules https://github.com/nuprl/augur
cd augur/ts

./docker-nodeprof/docker-pull.sh  # Pull NodeProf Docker image
npm install                       # Install Augur deps
npm run build                     # Build Augur
```

Try running a basic test to make sure your installation succeeded:
```
$ ./node_modules/.bin/jest -t basic-assignment-tainted
tainted value flowed into sink {"type":"variable","name":"z","location":{"fileName":"test.js"}}!
```

Your Augur installation is now set up!

#### Instrumenting an application

Using Augur to analyze your own applications simply requires placing a 
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
This file tells Augur the *sources* and *sinks* of the flows you want to
track. The spec above tells Augur to alert you if any value returned from
`readFileSync` flows into the function `exec`. It also tells Augur how to run
 your project: by executing the file `test.js`.
[Here](./tests-unit/README.md) are all the options for `spec.json`.

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

Let's go ahead and use Augur to verify that there is indeed a taint flow
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
[This example is also a real test case in Augur.](./tests-unit/input/simple-readFileSync-exec-tainted)

To analyze this project with Augur, we run:
```
cd augur/ts
node ./runner/cli.js ~/project project .
         #           ^^^^^^^^^ ^^^^^^^ ^
         #     path to project    |    |
         #                        |    |
         #             project name    |
         #                             |
         # directory to store temp files
```

Augur will alert us that the application does in fact have the flow we're
expecting:
```
Flows found into the following sinks: [
    {
        "type": "functionInvocation",
        "name": "exec"
    }
]
```

You've now analyzed your first application using Augur!

## Augur Features
1. Support for *any* piece of JavaScript code to act as a taint source
2. Support for *any* piece of JavaScript code to act as a taint sink
3. Support for taint sanitizers
4. Support for different forms of taint tracking, from simple boolean tracking 
to full dependency information between variables
5. Support for tracking taint through native code (see below)

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
[abstract machine](./ts/src/README.md)
where taint should flow as a result of the function call. These models are often
much easier to implement than the functions themselves because data flows are
often more simple than the logic in a function. For examples of native models,
look at
[`src/native/native.ts`](./ts/src/native/native.ts).
2. using *polyfills*. Polyfills are implementations of native functions written
in JavaScript itself. While polyfills are traditionally used for providing
missing functionality to older web browsers, they can also help the taint
analysis understand data-flow. If you want to track data-flow through a native
function that you can write a polyfill for, use it normally in
[`src/native/polyfill.ts`](./ts/src/native/polyfill.ts).

## Optional: Installing NodeProf locally
Augur normally runs your Node.js project in Docker. This is because NodeProf
is difficult to install and configure locally. If you want to avoid using
Docker, you can install NodeProf locally and point Augur to the installation.

To install NodeProf locally, follow the 
[advanced installation instructions](https://github.com/Haiyang-Sun/nodeprof.js/tree/master/docs/panathon18#advanced-installation---building-nodeprof-and-graalvm-from-source-linux-and-macos).

When using a manual installation, you will have to set environment variables:
- `NODEPROF_HOME`: pointing to your NodeProf advanced installation
- `JAVA_HOME`: pointing to your JVM CI directory (not the `bin` subdirectory)
- `MX_HOME`: pointing to your `mx` installation

Example:
- `NODEPROF_HOME=/home/mwaldrich/workspace-nodeprof/nodeprof.js/`
- `MX_HOME=/home/mwaldrich/mx`
- `JAVA_HOME=/home/mwaldrich/openjdk1.8.0_172-jvmci-0.46`

Augur will automatically use a local NodeProf installation if these environment
variables are set; no flags or further configuration is needed.

## Contributing to Augur
If you're looking to dive into Augur's code, the structure and implementation of
the analysis is documented with `README`s in folders inside [`src`](./ts/src).

If you want to contribute to Augur, we recommend using JetBrain's WebStorm IDE.
To get the project fully up and running, simply:
1. follow the installation instructions in the *Getting started* section
2. open the `augur` folder in WebStorm
3. execute the Run Configuration named `unit tests`

## JavaScript Feature Support
|                                | Not Yet | In Progress | Done | Notes   |
|--------------------------------|---------|-------------|------|---------|
| Variable read                  |         |             | x    |         |
| Variable write                 |         |             | x    |         |
| Property read                  |         |             | x    |         |
| Property write                 |         |             | x    |         |
| Unary expression               |         |             | x    |         |
| Binary expression              |         |             | x    |         |
| Implicit declaration of `this` |         |             | x    | see #19 |
| Function declaration           |         |             | x    |         |
| Function arguments             |         |             | x    |         |
| Variable assignment            |         |             | x    | see #20 |
| Function call                  |         |             | x    | see #21 |
| Native functions               |         |             | x    | see #22 |
| Async/await                    |         |             | X    | see #29 |
| Function returns               |         |             | x    | see #30 |

## Support for Ichnaea Benchmarks
[Ichnaea](https://www.franktip.org/pubs/tse2020.pdf) was evaluated against a
set of 22 benchmarks. Here is a table showing how Augur performs on these
benchmarks:

|                             | Correct Output | Incorrect Output | Old/Broken Code |
|-----------------------------|----------------|------------------|-----------------|
| `chook-growl-reporter-exec` | x              |                  |                 |
| `cocos-utils`               | x              |                  |                 |
| `fish-exec`                 | x              |                  |                 |
| `git2json-exec`             | x              |                  |                 |
| `gm-attack`                 | x              |                  |                 |
| `growl-exec`                | x              |                  |                 |
| `libnotify-exec`            | x              |                  |                 |
| `m-log-eval`                |                | x                |                 |
| `mixin-pro-eval`            | x              |                  |                 |
| `modulify-eval`             | x              |                  |                 |
| `mongo-parse-eval`          | x              |                  |                 |
| `mongoosemask-eval`         | x              |                  |                 |
| `mongoosify-eval`           | x              |                  |                 |
| `node-os-utils`             | x              |                  |                 |
| `node-wos`                  | x              |                  |                 |
| `office-converter`          | x              |                  |                 |
| `os-uptime`                 | x              |                  |                 |
| `osenv`                     | x              |                  |                 |
| `pidusage-exec`             |                |                  | x               |
| `pomelo-monitor`            | x              |                  |                 |
| `system-locale`             | x              |                  |                 |
| `systeminformation`         | x              |                  |                 |

The benchmark `pidusage-exec` crashes in modern JavaScript VMs.

The benchmark `m-log-eval` is not currently compatible with the tool due to a
missing native function model.

## Acknowledgments
Augur was written by [Mark Aldrich](https://github.com/mwaldrich),
[Emily Shi](https://github.com/aralisza),
[Alexi Turcotte](https://github.com/reallyTG),
and [Frank Tip](https://github.com/franktip).

Augur sits on top of [NodeProf](https://github.com/Haiyang-Sun/nodeprof.js),
the dynamic analysis framework written by
[Haiyang Sun](https://github.com/Haiyang-Sun) and others.

Augur also relies on Oracle's [GraalVM](https://www.graalvm.org/)
and [GraalJS](https://github.com/graalvm/graaljs).

Continuous integration for Augur was designed and implemented by [Adison Trueblood](https://github.com/trueblooda).

This research was supported by the National Science Foundation under NSF grant 
CCF-1715153 and REU supplement CCF-1930604.

Copyright (c) 2019-2022 [Programming Research Lab](https://prl.ccs.neu.edu/) at 
Northeastern University. Augur is licensed under the UPL. See the `LICENSE` file
for more information.
