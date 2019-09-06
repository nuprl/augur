This directory stores implementations of [`AbstractMachine`](../types.ts)s.
There are two main implementations of `AbstractMachine`:

1. [`JSMachine`](JSMachine.ts), which implements the actual logic of an abstract
   machine.
2. [`JSWriter`](JSWriter.ts), which generates JavaScript code. This JavaScript
   code doesn't *actually* execute the instructions, but will reproduce the
   original callbacks to a machine that *will*, such as `JSMachine`. See
   [here](JSWriter.ts) for more information.
   
`JSMachine`, however, is generalized over the abstract value used in the taint
analysis, and is thus an abstract class. `JSMachine` has two concrete
instantiations:

1. [`BooleanMachine`](BooleanMachine.ts), which tracks flows from any sink to
   any source, and simply reports which sinks were involved in real flows.
2. [`ExpressionMachine`](ExpressionMachine.ts), which tracks all flows between
   all language constructs. It reports all flows between language constructs,
   resulting in a *program dependence graph*.
