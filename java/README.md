# JS Taint Analysis (NodeProf Java implementation)

## Specifications

Currently, this taint analysis only works on a very small subset of JavaScript: variable declaration and assignment.

## Installation

As this Java implementation actually *modifies* the code of NodeProf itself, the entire NodeProf repository is in this subdirectory. The directory structure is set up such that a NodeProf installation can be created in the `java` folder, if you pretend the `workspace-nodeprof` folder has already been created, and NodeProf already cloned inside it.

This directory structure is very complicated, but the actual analysis is located at `workspace-nodeprof/nodeprof.js/src/ch.usi.inf.nodeprof.test/src/ch/usi/inf/nodeprof/test/examples/TaintAnalysis.java`. The stack machine is located in that same directory, and the JUnit test class is located under the `tests` subdirectory in that directory.

## Building

Navigating to the `nodeprof.js` folder and running the usual `mx sforceimports; mx build` will build NodeProf with our custom analysis.

## Testing

The Java implementation, at the moment, only support interaction through JUnit tests. All valid tests in the `src/ch.usi.inf.nodeprof.test/js` directory will be evaluated using `mx test-all`, after rebuilding. A valid test consists of a directory containing a `spec.json` file, formatted in a similar way to the tests at the top-level of this repo.

## Further improvements

- Expand functionality of analysis to include mode JS features.
- Better efficiency, along the lines of node caching in NodeProf.
- Better usability in the form of being able to perform analyses and tests *without* JUnit, just from the command line.
- Create a container (maybe Docker) to automate the tedious NodeProf setup and allow fast, cross-platform development.
