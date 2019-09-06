This directory houses unit tests for dynamic taint analysis implementations.

It is separated into three directories, `input`, `output-expected`, and 
`output-actual`.

# Testing process

The testing process works as follows:
1. Tests from the `input` directory are executed and instrumented. Their analysis
   generates executable abstract machine instructions from them, and stores them
   in `output-actual/<test name>_out.js`.
2. The correctness of the instructions is checked by comparing
   `output-actual/<test name>_out.js` to
   `output-expected/<test name>_out.js`.
3. The abstract machine instructions are executed to compute actual flows
   between sources and sinks.
4. The actual computed flows are compared to the expected flows as described in
   the test specification file.
   
# Test format specification

## `input`
This directory houses the unit tests themselves. Each unit test is a directory
inside `input`.

### Unit test

Each unit test must provide a test specification in a file named `spec.json`.

#### `spec.json`

The test specification file must be of the form:

```typescript
{
    // The script to execute
    main: string;
    // The sources of taint
    sources: Array<TaintDescription>;
    // The sinks for taint
    sinks: Array<TaintDescription>;
    // The sinks you expect taint to flow into
    expectedFlows: Array<TaintDescription>;
}
```

where `TaintDescription` is of the form:

```typescript
// Describing a location in code
// All fields are optional
{
    // The type of JavaScript feature
    type?: TaintType;
    // The name of the feature
    name?: string;
    // The filename where the feature occurs
    fileName: string;
}
```

and `TaintType` is of the form:

```typescript
"function" | "variable" | "builtin" | "expr" | "functionInvocation" 
| "functionReturn" | "literal" | "declaration";
```

## `output-expected`

For each unit test in `tests-unit/input` named `test`, there should be a
corresponding file named `tests-unit/output-expected/test_out.js`, that contains
the expected executable stack machine instructions.

## `output-actual`
