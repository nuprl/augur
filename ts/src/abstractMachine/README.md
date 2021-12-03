This directory stores implementations of [`AbstractMachine`](../types.ts)s,
which are responsible for actually computing taint flow in a program.
There are two main implementations of `AbstractMachine`:

1. [`JSMachine`](JSMachine.ts), which implements the actual logic of an abstract
   machine.
2. [`JSWriter`](JSWriter.ts), which generates JavaScript code. This JavaScript
   code doesn't *actually* execute the instructions, but will reproduce the
   original callbacks to a machine that *will*, such as `JSMachine`. See
   [here](JSWriter.ts) for more information.
   
`JSMachine`, however, is generalized over the abstract value used in the taint
analysis, and is thus an abstract class. `JSMachine` has three concrete
instantiations:

1. [`BooleanMachine`](BooleanMachine.ts), which tracks flows from any source to
   any sink, and simply reports which sinks were involved in real flows.
2. [`SourcedBooleanMachine`](SourcedBooleanMachine.ts), which acts like a 
   `BooleanMachine` but can tell you where each flow came from. It reports flows
   in the form of "Source A flowed into Sink B", whereas a `BooleanMachine` reports
   "a tainted value flowed into Sink B".
3. [`ExpressionMachine`](ExpressionMachine.ts), which tracks all flows between
   all language constructs. It reports all flows between all expressions and lines 
   in the program, resulting in a *program dependence graph*. This is very costly,
   so it is recommended to only use this on small programs (<1,000 LoC) for which
   you need extremely detailed information.
