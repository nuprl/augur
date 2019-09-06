# JavaScript Taint Analysis (implemented in TypeScript)

## WebStorm project

This project will integrate well in Jetbrain's WebStorm IDE. Simply clone this repo, run the `ts/docker-build.sh` script, open it in WebStorm, and run the unit tests.

If you do not wish to use Docker, you must follow the [follow the advanced installation instructions](https://github.com/Haiyang-Sun/nodeprof.js/tree/master/docs/panathon18#advanced-installation---building-nodeprof-and-graalvm-from-source-linux-and-macos), create a copy of the run configuration, and modify it to set the following environment variables:
- `NODEPROF_HOME`: pointing to your NodeProf advanced installation
- `JAVA_HOME`: pointing to your JVM CI directory (not the `bin` subdirectory)
- `MX_HOME`: pointing to your `mx` installation

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

## Docker

A Docker container has been created to automate the setup and execution of NodeProf. Currently, only the public version of NodeProf is supported; the private versions of NodeProf and GraalJS will be supported soon.

Instead of installing NodeProf, Graal, GraalJS, and the modified JVM all on your local machine, Docker automates this process by creating an extremely lightweight virtual machine with a predictable build environment. Then, instead of executing NodeProf directly by setting lots of environment variables in your shell, the files are simply mounted in the Docker container and executed inside.

### Using Docker

To use the Docker container:

1. Install Docker. On Linux, install it with your package manager. On Mac, download it [here](https://download.docker.com/mac/stable/Docker.dmg).
2. Make sure Docker is in your path by running `docker run hello-world` in a shell.
3. Build the Docker container by running `./docker-build.sh` in a shell. I'd recommend getting some other work done during this step; this took me 12 minutes from a clean start on an Intel quad-core i7.
4. Run `make` to build our TypeScript analysis (requires Node.js >=v10).
5. Simply use the `docker-run.sh` and `docker-run-callbacks.sh` scripts, instead of `run.sh` and `run-callbacks.sh`, respectively. There is no need to set environment variables pointing to Java installations or NodeProf installations.

#### Private version of NodeProf

We also support using the internal development version of NodeProf, which may implement features not yet available to the public. Both the `docker-build.sh` and `docker-run.sh` scripts support an optional argument, `--private`, which will either build or use a separate Docker container for the private version of NodeProf.

As the internal development version of NodeProf is a private Github repo, authentication is required when using `--private` with `docker-build.sh`.

## JavaScript Feature Support
|                                | None | In Progress | Done | Notes   |
|--------------------------------|------|-------------|------|---------|
| Literal expression             |      | x           |      | see #18 |
| Variable read                  |      |             | x    |         |
| Variable write                 |      |             | x    |         |
| Property read                  |      |             | x    |         |
| Property write                 |      |             | x    |         |
| Unary expression               |      |             | x    |         |
| Binary expression              |      |             | x    |         |
| Implicit declaration of `this` | x    |             |      | see #19 |
| Function declaration           |      |             | x    |         |
| Function arguments             |      |             | x    |         |
| Variable assignment            |      | x           |      | see #20 |
| Function call                  |      | x           |      | see #21 |
| Native functions               | x    |             |      | see #22 |
| Async/await                    | x    |             |      | see #29 |
| Function returns               | x    |             |      | see #30 |
