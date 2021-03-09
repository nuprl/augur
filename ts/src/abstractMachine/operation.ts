// TODO: maybe don't make this a separate class. a.k.a. try to merge
//  this into `Operation`. it's pretty slow to be constructing a new
//  array each operation to flow into the advice class...

// A type of advice
import {AbstractMachine} from "../types";
import JSMachine from "./JSMachine";

class Advice<I, O> {
    private stack: Array<(I: I) => O> = [];

    public install(advice: (I: I) => O): void {
        this.stack.push(advice);
    }

    public uninstall(): void {
        this.stack.pop();
    }

    public activate(input: I): O {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1](input);
        }

        return null;
    }
}

// export default abstract class Operation<I, O> {
//     protected abstract implementation(I: I): O;
//
//     public before: Advice<I, void> = new Advice();
//
//     public after: Advice<[I, O], void> = new Advice();
//
//     public around: Advice<[I, (input: I) => O], O> = new Advice();
//
//     public execute(input: I): O {
//
//         // try to execute the before advice
//         this.before.activate(input);
//
//         // try to execute the around advice
//         let output = this.around.activate([input, this.implementation]);
//
//         // if it fails, just use the regular implementation
//         if (!output) {
//             output = this.implementation(input);
//         }
//
//         // try to execute the after advice
//         this.after.activate([input, output]);
//
//         return output;
//     }
//
//     public wrapper: (I: I) => O = (I: I) => {
//         return this.execute(I);
//     }
// }

export default abstract class Operation<I, O> {
    protected abstract implementation(I: I): O;

    // private stack: Array<(I: I) => O> = [];

    public before:  Array<(I: I) => void> = []// Advice<I, void> = new Advice();

    public after: Array<(I: I, O: O) => void> = []//Advice<[I, O], void> = new Advice();

    public around: Array<(I: I, O:(input: I) => O) => O >//Advice<[I, (input: I) => O], O> = new Advice();

    public execute(input: I): O {

        // try to execute the before advice
        this.activate(this.before, input);

        // try to execute the around advice
        let output = this.activate(this.around,[ input, this.implementation]);

        // if it fails, just use the regular implementation
        if (!output) {
            output = this.implementation(input);
        }

        // try to execute the after advice
        this.activate(this.after,[input, output]);

        return output;
    }

    public wrapper: (I: I) => O = (I: I) => {
        return this.execute(I);
    }

    public install(stack: any, advice: (I: I) => O): void {
        stack.push(advice);
    }

    public uninstall(stack: any): void {
        stack.pop();
    }

    public activate(stack: any, input: any): O {
        if (stack.length > 0) {
            return stack[stack.length - 1](input);
        }

        return null;
    }
}