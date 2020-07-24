<img src="./augur.png" align="left" height="100">

This is a dynamic taint analysis implemented in TypeScript using
[NodeProf](https://github.com/Haiyang-Sun/nodeprof.js). Auger is a clean room
 implementation of the taint analysis described in the [IEEE TSE paper: Platform
 -Independent Dynamic Taint Analysis for JavaScript](https://ieeexplore.ieee.org/document/8511058).
 
---

## Installation

You will need **Node.js** installed. We recommend >=v10.

You will need **NodeProf** installed. You can either [use the provided Docker
container](#docker-installation), or [install it manually](#manual-installation).

## Getting started

If you wish to use an IDE, this project provides [full integration with WebStorm](#webstorm-integration).

If you wish to use the CLI:

Run `make` to build the project.

To run the tests:
- using Docker, run `jest`.
- using a local NodeProf installation, run `jest` with the environment variables set as described [here](#manual-installation)
  - ex. `NODEPROF_HOME=/home/mwaldrich/workspace-nodeprof/nodeprof.js/ MX_HOME=/home/mwaldrich/mx JAVA_HOME=/home/mwaldrich/openjdk1.8.0_172-jvmci-0.46 jest`

If you're looking to dive into the code, the structure and implementation of the analysis is documented with `README`s in
folders inside [`src`](./src).

### Docker installation

A Docker container has been created to automate the setup and execution of NodeProf.

Instead of installing NodeProf, Graal, GraalJS, and the modified JVM all on your local machine, Docker automates this process by creating an extremely lightweight virtual machine with a predictable build environment. Then, instead of executing NodeProf directly by setting lots of environment variables in your shell, the files are simply mounted in the Docker container and executed inside.

#### Using Docker

To use the Docker container:

1. Install Docker. On Linux, install it with your package manager. On Mac, download it [here](https://download.docker.com/mac/stable/Docker.dmg).
2. Make sure Docker is in your path by running `docker run hello-world` in a shell.
3. Build the Docker container by running `./docker-build.sh` in a shell. I'd recommend getting some other work done during this step; this took me 12 minutes from a clean start on an Intel quad-core i7.
4. Run `make` to build our TypeScript analysis (requires Node.js >=v10).
5. Simply use the `docker-run.sh` and `docker-run-callbacks.sh` scripts, instead of `run.sh` and `run-callbacks.sh`, respectively. There is no need to set environment variables pointing to Java installations or NodeProf installations.

### Manual installation

Follow the [advanced installation instructions](https://github.com/Haiyang-Sun/nodeprof.js/tree/master/docs/panathon18#advanced-installation---building-nodeprof-and-graalvm-from-source-linux-and-macos).

When using the manual installation, you will have to set environment variables:
- `NODEPROF_HOME`: pointing to your NodeProf advanced installation
- `JAVA_HOME`: pointing to your JVM CI directory (not the `bin` subdirectory)
- `MX_HOME`: pointing to your `mx` installation

Example:
- `NODEPROF_HOME=/home/mwaldrich/workspace-nodeprof/nodeprof.js/`
- `MX_HOME=/home/mwaldrich/mx`
- `JAVA_HOME=/home/mwaldrich/openjdk1.8.0_172-jvmci-0.46`

## WebStorm integration

This project will integrate well in Jetbrain's WebStorm IDE. To get the project
fully up and running, simply:
1. clone this repo
2. run the `ts/docker-build.sh` script
3. open the `TaintAnalysis` folder in WebStorm
4. execute the Run Configuration named `unit tests`

If you do not wish to use Docker, you must follow the [follow the advanced installation instructions](https://github.com/Haiyang-Sun/nodeprof.js/tree/master/docs/panathon18#advanced-installation---building-nodeprof-and-graalvm-from-source-linux-and-macos), create a copy of the run configuration, and set your environment variables as described [here](#manual-installation).

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
| Async/await                    | x       |             |      | see #29 |
| Function returns               |         |             | x    | see #30 |

## 
