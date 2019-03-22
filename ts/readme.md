# Javascript Taint Analysis (implemented in typescript)

## Installation

You will need `node.js` installed. We recommend >=v10.

You will also need `nodeprof` installed. [Follow the advanced installation instructions.](https://github.com/Haiyang-Sun/nodeprof.js/tree/master/docs/panathon18#advanced-installation---building-nodeprof-and-graalvm-from-source-linux-and-macos)

Once you have both installed, run

```bash
make
```

## Running

```bash
export NODEPROF_PATH="path to nodeprof advanced installation"

./run.sh [path to js file relative to project directory]
```