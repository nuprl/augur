// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

import {Accessor, ExceptionVal} from "../nodeprof";
import {
    Instruction,
    AbstractMachine,
    StaticDescription,
    DynamicDescription
} from "../types";
import MyLogger from "../analysis/mylogger";

// For live analysis.
import BooleanMachine from "./BooleanMachine";

import * as fs from 'fs';

// An implementation of an abstract machine that produces JavaScript code.
// The JavaScript code produced will not actually execute the instructions,
// but will reproduce the original callbacks to a machine that *will*, such
// as the JS implementation of this machine: "src/abstractMachine/JSMachine.ts".
//
// This implementation provides an easy way to *delay* the execution of
// instructions, for the purposes of examining the generated callbacks and
// later execution.
//
// The generated JS code will export a function, `drive`, that, given an
// abstract machine, will drive it with the original callbacks.
//
// The type parameter, T, should be serializable to JSON.
export default class JSWriter implements AbstractMachine {

    // Is this a live analysis? If so, we execute instructions alongside the program.
    // If not, we write the instructions to a file.
    // @ts-ignore
    private LIVE : boolean = J$.initParams.live === "true";

    // JS code that should appear before and after the callbacks, respectively.
    private preamble: string =  "exports.drive = (m) => {\n";
    private postamble: string = "};\n";

    // The logger connected to the intended output file.
    // @ts-ignore
    private logger : MyLogger = new MyLogger(J$.initParams.outputFile);
    
    // The spec file, in case of live analysis.
    // @ts-ignore
    private spec = JSON.parse(fs.readFileSync(J$.initParams.specPath).toString());

    // A ready and waiting abstract machine, in case of live analysis.
    private abstractMachine : AbstractMachine;

    // the outputStr represents a StringBuilder for the output file so an I/O operation doesn't occur whenever a callback is referenced.
    private outputStr : string[] = [];

    constructor() {
        if (this.LIVE) {
            // If live, initialize an abstract machine that will execute instructions.
            // this.spec = JSON.parse(fs.readFileSync(J$.initParams.specPath).toString());
            // @ts-ignore
            this.abstractMachine = new BooleanMachine(this.spec, this.LIVE, J$.initParams.outputFile);
        } else {
            // If not live, record preamble for output file.
            this.outputStr.push(this.preamble);
        }

        if (this.LIVE) {
            console.log('Analysis is live.');
        } else {
            console.log('Analysis is offline.');
        }
    }

    public literal([description]: [StaticDescription]) {
        this.writeInstruction({ command: "literal", args: [description] });
    }

    public pop([description]: [StaticDescription]) {
        this.writeInstruction({ command: "pop", args: [description] });
    }

    public readVar([s, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "readVar", args: [s, description] });
    }

    public writeVar([s, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "writeVar", args: [s, description] });
    }

    public readProperty([o, s, isMethod, isComputed, description]: [DynamicDescription, Accessor, boolean, boolean, StaticDescription]) {
        this.writeInstruction({ command: "readProperty",
            args: [o, s, isMethod, isComputed, description] });
    }

    public writeProperty([o, s, description]: [DynamicDescription, Accessor, StaticDescription]) {
        this.writeInstruction({ command: "writeProperty",
            args: [o, s, description] });
    }

    public binary([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "binary", args: [description]});
    }

    public unary([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "unary", args: [description]});
    }

    public initVar([s, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "initVar", args: [s, description]});
    }

    public functionEnter([name, actualArgs, description]: [string, number, StaticDescription]) {
        this.writeInstruction({
            command: "functionEnter",
            args: [name, actualArgs, description]
        });
    }

    public functionExit ([name, actualArgs, description]: [string, number, StaticDescription]) {
        this.writeInstruction({
            command: "functionExit",
            args: [name, actualArgs, description]
        });
    }

    public functionInvokeEnd([name, shadowIDs, description]: [string, DynamicDescription[], StaticDescription]) {
        this.writeInstruction({
            command: "functionInvokeEnd",
            args: [name, shadowIDs, description]
        });
    }

    public functionInvokeStart([name, expectedArgs, actualArgs, argShadowIDs, description]:
                                   [string, number, number, DynamicDescription[], StaticDescription]) {
        this.writeInstruction({
            command: "functionInvokeStart",
            args: [name, expectedArgs, actualArgs, argShadowIDs, description]
        });
    }

    public functionReturn([name, description]: [string, StaticDescription]) {
        this.writeInstruction({ command: "functionReturn", args: [name, description]});
    }

    public builtin([name, receiver, actualArgs, extraRecords, isMethod, description]:
                       [string, string, number, any, boolean, StaticDescription]) {
        this.writeInstruction({ command: "builtin",
            args: [name, receiver, actualArgs, extraRecords, isMethod, description]});
    }

    public builtinExit([name, returnValueName, description]: [DynamicDescription, DynamicDescription, StaticDescription]): void {
        this.writeInstruction({ command: "builtinExit",
            args: [name, returnValueName, description]})
    }

    public conditional([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "conditional",
            args: [description]});
    }

    public conditionalEnd([description]: [StaticDescription]): void {
        this.writeInstruction({ command: "conditionalEnd",
            args: [description]});
    };

    public endExecution([]) {
        this.writeInstruction({ command: "endExecution", args: [] });
        // Once the analysis finishes then we write the output file string to the file location.
        if (!this.LIVE) {
            this.outputStr.push(this.postamble);
            this.logger.log(this.outputStr.join("\n"));
        }
    }

    public initializeArgumentsObject([argumentsObject, description]: [DynamicDescription, StaticDescription]) {
        this.writeInstruction({ command: "initializeArgumentsObject",
            args: [argumentsObject, description]});
    }

    public asyncFunctionEnter([description]: [StaticDescription]) {
        this.writeInstruction({command: "asyncFunctionEnter", args: [description]});
    }

    public asyncFunctionExit([iid, promiseId, result, exceptionVal, description]: [number, DynamicDescription, any, ExceptionVal, StaticDescription]) {
        this.writeInstruction({command: "asyncFunctionExit", args: [result, promiseId, exceptionVal, description]});
    }

    public awaitPre([id, promiseId, promiseOrAwaitedVal, description]: [number, DynamicDescription, any, StaticDescription]) {
        this.writeInstruction({command: "awaitPre", args: [id, promiseId, promiseOrAwaitedVal, description]});
    }

    public awaitPost([id, promiseId, promiseOrAwaitedVal, valResolveOrRejected, description]: [number, DynamicDescription, any, any, StaticDescription]) {
        this.writeInstruction({command: "awaitPost", args: [id, promiseId, promiseOrAwaitedVal, valResolveOrRejected, description]});
    }

    public promiseReaction([id, promiseValue, promiseId, description]: [number, any, DynamicDescription, StaticDescription]) {
        this.writeInstruction({command: "promiseReaction", args: [id, promiseValue, promiseId, description]});
    }

    public promiseResolve([id, promiseValue, promiseId, description]: [number, any, DynamicDescription, StaticDescription]) {
        this.writeInstruction({command: "promiseResolve", args: [id, promiseValue, promiseId, description]});
    }

    public promiseReject([id, promiseValue, promiseId, description]: [number, any, DynamicDescription, StaticDescription]) {
        this.writeInstruction({command: "promiseReject", args: [id, promiseValue, promiseId, description]});
    }

    // Prepares an argument to a callback to appear in JS code.
    private prepareArg(arg: any): string[] | string {
        // Wrap strings in quotes, properly escape strings, etc.
        try {
            return JSON.stringify(arg);
        }
        catch {
            return arg;
        }
    }

    // Actually write the instruction to the output file.
    private writeInstruction(instr: Instruction) {
        const delim = ", ";
        if (this.LIVE) {
            // In this case, we want to execute the instruction.
            // TODO: Should do this with a case, but gonna eval right now for expedience.
            eval(`this.abstractMachine.${instr.command}([${instr.args.map(this.prepareArg).join(delim)}]);`);
        } else {
            // In this case, we want to write the instruction to a file.
            this.outputStr.push(`    m.${instr.command}([${instr.args.map(this.prepareArg).join(delim)}]);\n`);
        }
    }

}
