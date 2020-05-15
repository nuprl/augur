import JSMachine from "../abstractMachine/JSMachine";
import {
    DynamicDescription,
    StaticDescription,
    VariableDescription
} from "../types";
import Analysis from "../analysis/analysis";

type NativeModelRecorder<R> =
    (analysis: Analysis,
     name: DynamicDescription,
     args: any[],
     description: StaticDescription) => R;

type NativeModelImplementation<R> =
    <V, F>(machine: JSMachine<V, F>,
           name: DynamicDescription,
           actualArgs: number,
           extraRecords: R,
           description: StaticDescription) => void

type NativeModel<R> = {
    // record step @ instrumentation time
    recorder: NativeModelRecorder<R>;
    // actual model @ abstract machine time
    implementation: NativeModelImplementation<R>;
};

type NativeModelMap<S> = {
    [K in keyof S]: S[K];
}

let asNativeModel = <T>(x: NativeModel<T>) => x;
let asNativeModelMap = <S>(x: NativeModelMap<S>): NativeModelMap<S> => x;

class NativeModelError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NativeModelError";
    }
}

// prepares the stack for an upcoming functionEnter by pushing the arguments
// in reverse order.
let prepareFunctionCall = <V, F>(machine: JSMachine<V, F>,
                                 functionTaintValue: V,
                                 argTaintValues: V[],
                                 builtinDescription: StaticDescription): void => {
    // prepare the stack for an upcoming functionEnter
    machine.push([functionTaintValue, builtinDescription]);

    // push the arguments in reverse order
    for (let i = argTaintValues.length - 1; i >= 0; i--) {
        machine.push([argTaintValues[i], builtinDescription]);
    }

    // inform the stack machine how many args are coming in
    machine.argsLeftToProcess = argTaintValues.length;
};

// Pops the values associated with this builtin call from the stack.
// Returns them in the form [builtin taint value, args' taint values []]
let popArgs = <V, F>(machine: JSMachine<V, F>,
                     name: DynamicDescription,
                     actualArgs: number,
                     description: StaticDescription): [V, V[]] => {
    let args: V[] = [];

    // pop taint value of args
    for (let i = 0; i < actualArgs; i++) {
        args[actualArgs - i - 1] = (machine.taintStack.pop());
    }

    // pop value of builtin
    let builtinTaint = machine.taintStack.pop();

    return [builtinTaint, args];
};

let popArgsAndReportFlowsIntoBuiltin =
    <V, F>(machine: JSMachine<V, F>,
           name: DynamicDescription,
           actualArgs: number,
           description: StaticDescription): [V, V[]] => {

        let [builtinTaint, argsTaint] =
            popArgs(machine, name, actualArgs, description);

        argsTaint.forEach((v: V) =>
            machine.reportPossibleFlow(description, v));

        return [builtinTaint, argsTaint];
    };

let returnTaints = <V, F>(machine: JSMachine<V, F>,
                          taint: V) => {
    machine.taintStack.push(taint);
};

let joinTaints = <V, F>(machine: JSMachine<V, F>, taints: V[]): V => {
    return taints.reduce((a, b) => machine.join(a, b), machine.getUntaintedValue());
};

let joinAndReturnTaints = <V, F>(machine: JSMachine<V, F>,
                                 taints: V[]) => {
    // join args' taint values, and use that as the return value
    returnTaints(machine, joinTaints(machine, taints));
};

let defaultRecorder: NativeModelRecorder<void> = () => {};
let defaultImplementation: NativeModelImplementation<void> =
    (machine, name, actualArgs, extraRecords, description): void => {
        let [_, argsTaint] =
            popArgsAndReportFlowsIntoBuiltin(machine,
                name,
                actualArgs,
                description);

        joinAndReturnTaints(machine, argsTaint);
};
let defaultModel: NativeModel<void> = {
    recorder: defaultRecorder,
    implementation: defaultImplementation
};

let models = asNativeModelMap({
    // TODO: correctly implement variables in this native model. currently
    //  there is no access to the shadow memory in here, so we cannot call
    //  shadowMemory.getFullVariableName("__accum__"), for example. Perhaps
    //  these variables should be modeled as local variables inside this
    //  function.
    "map": asNativeModel({recorder: () => {},
        implementation: function <V, F>(machine: JSMachine<V, F>,
               name: DynamicDescription,
               actualArgs: number,
               extraRecords: void,
               description: StaticDescription): void {
        }
    }),
    "call": asNativeModel({
        recorder: (analysis: Analysis,
                   name: DynamicDescription,
                   args: any[],
                   description: StaticDescription) => {
            return name;
        },
        implementation: function <V, F>(machine: JSMachine<V, F>,
                               name: DynamicDescription,
                               actualArgs: number,
                               builtinName: DynamicDescription,
                               description: StaticDescription): void {
            let [builtinTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    actualArgs,
                    description);

            // create an entry on the callstack for this builtin
            machine.callstackPush(description);

            // TODO: currently we're passing in the description of the builtin.
            //       this is not really correct. but it appears that
            //       functionEnter isn't even using this value. so really
            //       both of these issues need to be fixed.
            prepareFunctionCall(machine, builtinTaint, argsTaint.slice(1), description);

            machine.installAdvice(machine.functionExitAdvice,
                () => {
                    // machine.callstackPop();
                    returnTaints(machine, machine.returnValue);
                    machine.callstackPop();
                    machine.callstackPop();
                });

        }
    }),
    "max": asNativeModel({recorder:
            (analysis: Analysis,
             name: DynamicDescription,
             args: any[],
             description: StaticDescription) => {
                // our goal in this recorder is to determine *which*
                // argument is the maximum. we can use this information at
                // abstract machine time to correctly determine which taint
                // value should be returned from this builtin.

                // we will return a number n (>0) to represent that the
                // argument at args[n] was the maximum.
                // we will return -1 to represent that Math.max returned
                // NaN, and thus, none of the arguments are related to the
                // return value.

                // TODO: we shouldn't make a duplicate call to Math.max here.

                // first, get the actual maximum of the arguments
                let max = Math.max(...args);

                // there are two cases for the return value of Math.max:

                // 1. NaN, when one or more of the arguments could not be
                //    converted to a number.
                // (to deal with this case, we check if the return value of
                // Math.max is NaN. if it is, we return the untainted value.)
                if (isNaN(max)) {
                    // record that none of the arguments are related to this
                    // function's output
                    return -1;
                }

                // 2. a number >0, representing the maximum of the given
                // arguments.
                // (to deal with this case, we figure out *which* argument ended
                // up being the result of the function.)
                for (let i = 0; i < args.length; i++) {
                    if (args[i] == max) {
                        return i;
                    }
                }

                // if we execute this, this means that Math.max returned a value
                // that wasn't any of our arguments or NaN. this should
                // never happen.
                throw new NativeModelError("Math.max didn't return a value" +
                    " equal to any of its arguments");
        },
        implementation: function <V, F>(machine: JSMachine<V, F>,
                                        name: DynamicDescription,
                                        actualArgs: number,
                                        extraRecords: number,
                                        description: StaticDescription): void {
            let [builtinTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    actualArgs,
                    description);

            // the return value of this native function should be equal to
            // the taint value of whichever argument was the maximum
            returnTaints(machine, argsTaint[extraRecords]);
        }
    }),
});

// TODO: don't use string here; create a type for builtin names
export function getNativeModel<V, F>(name: string): NativeModel<any> {
    // @ts-ignore
    let model = models[name] as NativeModel<any>;

    if (model) {
        return model;
    } else {
        return defaultModel;
    }
}

export function useNativeRecorder<R>(analysis: Analysis,
                                     name: DynamicDescription,
                                     args: any[],
                                     description: StaticDescription): R {
    return getNativeModel(description.name).recorder(analysis, name, args, description);
}

export function useNativeImplementation<V, F, R>(machine: JSMachine<V, F>,
                                     name: DynamicDescription,
                                     actualArgs: number,
                                     extraRecords: R,
                                     description: StaticDescription): void {
    getNativeModel(description.name)
        .implementation(machine,
            name,
            actualArgs,
            extraRecords,
            description);
}
