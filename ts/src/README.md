This directory provides the TypeScript implementation of dynamic taint analysis.

# Analysis implementation overview

The dynamic taint analysis is implemented through the composition of a few 
pieces:

- Graal, the multi-language VM
- NodeProf, which runs on top of Graal
- `analysis/nodeprofAnalysis.ts`, which acts as a driver that initializes our
  analysis with NodeProf
- `analysis/analysis.ts`, which receives the NodeProf callbacks and translates
  them into instructions for an `AbstractMachine`
- `AbstractMachine`, which accepts abstract machine instructions and processes
  them. See [here](./abstractMachine/) for more information, and
  [here](types.ts) for its type definition.
