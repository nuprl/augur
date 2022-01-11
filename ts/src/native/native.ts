import JSMachine from "../abstractMachine/JSMachine";
import {
    DynamicDescription,
    StaticDescription,
} from "../types";
import Analysis from "../analysis/analysis";

// TODO: document pre and post implementations

/**
 * A mechanism for a native model to record runtime information. This
 * information can then be used when the abstract machine executes a
 * NativeModelImplementation. NativeModelRecorders are useful when a
 * NativeModelImplementation needs a *concrete* value from the program,
 * as opposed to a taint value.
 *
 * For example, let's assume you want to write a native model of
 * Object.defineProperty. You would want to translate a call like:
 *
 *     Object.defineProperty(obj, "prop", {value: true})
 *
 * to set the property "prop" on "obj" to the value "true". When your NativeModel
 *
 * Since native models are executed inside the AbstractMachine, this means
 * the program has already finished running and you only have access to
 * abstract values.
 *
 * Native models are implemented inside the
 * AbstractMachine, so the model will observe a call to Object.defineProperty
 */
type NativeModelRecorder<R> =
    (analysis: Analysis,
     name: DynamicDescription,
     receiverName: DynamicDescription,
     receiver: any,
     args: any[],
     isMethod: boolean,
     description: StaticDescription) => R;

type NativeModelImplementationPre<R, S> =
    <V, F>(machine: JSMachine<V, F>,
           name: DynamicDescription,
           receiverName: DynamicDescription,
           actualArgs: number,
           extraRecords: R,
           isMethod: boolean,
           description: StaticDescription) => S;

type NativeModelImplementationPost<S> =
    <V, F>(machine: JSMachine<V, F>,
           name: DynamicDescription,
           returnValueName: DynamicDescription | undefined,
           saved: S,
           description: StaticDescription) => void;

type NativeModel<R, S> = {
    // record step @ instrumentation time
    recorder?: NativeModelRecorder<R>;

    // actual model @ abstract machine time
    implementationPre: NativeModelImplementationPre<R, S>;

    // TODO: document
    implementationPost?: NativeModelImplementationPost<S>;
};

type NativeModelMap<S> = {
    [K in keyof S]: S[K];
}

let asNativeModel = <R, S>(x: NativeModel<R, S>) => x;
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
                     isMethod: boolean,
                     description: StaticDescription): [V, V, V[]] => {
    let args: V[] = [];

    // if this is a method call, the taint value for the base object will
    // also be on the stack. pop this if necessary
    let receiverTaint;
    if (isMethod) {
        // receiverTaint = machine.taintStack.pop();
        receiverTaint = machine.taintTree.get(machine.ROOTID).pop();
    } else {
        // if this isn't a method call, the base object is untainted
        receiverTaint = machine.getUntaintedValue();
    }

    // pop taint value of args
    for (let i = 0; i < actualArgs; i++) {
        // args[actualArgs - i - 1] = (machine.taintStack.pop());
        args[actualArgs - i - 1] = (machine.taintTree.get(machine.ROOTID).pop());
    }

    // pop value of builtin
    // let builtinTaint = machine.taintStack.pop();
    let builtinTaint = machine.taintTree.get(machine.ROOTID).pop();

    return [builtinTaint, receiverTaint, args];
};

let popArgsAndReportFlowsIntoBuiltin =
    <V, F>(machine: JSMachine<V, F>,
           name: DynamicDescription,
           receiverName: DynamicDescription,
           actualArgs: number,
           isMethod: boolean,
           description: StaticDescription): [V, V, V[]] => {

        let [builtinTaint, receiverTaint, argsTaint] =
            popArgs(machine, name, actualArgs, isMethod, description);

        argsTaint.forEach((v: V) =>
            machine.reportPossibleFlow(description, v));

        return [builtinTaint, receiverTaint, argsTaint];
    };

let returnTaints = <V, F>(machine: JSMachine<V, F>,
                          taint: V) => {
    // machine.taintStack.push(taint);
    machine.taintTree.get(machine.ROOTID).push(taint);
};

let defaultImplementationPre: NativeModelImplementationPre<void, void> =
    (machine, name, receiverName, actualArgs, extraRecords, isMethod, description): void => {
        let [_, receiverTaint, argsTaint] =
            popArgsAndReportFlowsIntoBuiltin(machine,
                name,
                receiverName,
                actualArgs,
                isMethod,
                description);

        // combine args taint with `this` object taint
        let returnTaint = machine.join(receiverTaint,
            argsTaint.reduce(machine.join, machine.getUntaintedValue()));

        // return that taint
        returnTaints(machine, returnTaint);
    };

let defaultModel: NativeModel<void, void> = {
    // no recorder required, see top of file
    implementationPre: defaultImplementationPre
    // no post implementation required, see top of file
};

let models = asNativeModelMap({
    "augur_testFunSkip": asNativeModel({
        recorder: function(analysis: Analysis,
                           name: DynamicDescription,
                           receiverName: DynamicDescription,
                           receiver: any,
                           args: any[],
                           description: StaticDescription): boolean {
            return false;     
        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                           name: DynamicDescription,
                                           receiverName: DynamicDescription,
                                           actualArgs: number,
                                           isArray: boolean,
                                           isMethod: boolean,
                                           description: StaticDescription): void {
        },
    }),
    // "findOne": asNativeModel({
    //     recorder: function(analysis: Analysis,
    //                        name: DynamicDescription,
    //                        receiverName: DynamicDescription,
    //                        receiver: any,
    //                        args: any[],
    //                        description: StaticDescription): boolean {
    //         console.log('[!!!!] in recorder...');
    //         return false;     
    //     },
    //     implementationPre: function <V, F>(machine: JSMachine<V, F>,
    //                                        name: DynamicDescription,
    //                                        receiverName: DynamicDescription,
    //                                        actualArgs: number,
    //                                        isArray: boolean,
    //                                        isMethod: boolean,
    //                                        description: StaticDescription): number {
    //         console.log('[!!!!] in implementationPre...');
    //         return 2;
    //     },
    //     implementationPost: function<V, F>(machine: JSMachine<V, F>,
    //         name: DynamicDescription,
    //         returnValueName: DynamicDescription,
    //         saved: number,
    //         description: StaticDescription): void {
    //             console.log('[!!!!] in implementationPost...');
    //             console.log('[!!!!] returnValueName:', returnValueName);
    //             // let [numSplits, stringTaint] = saved;
    //             // let returnValueShadowObject = machine.getShadowObject(returnValueName);

    //             // // propagate the taint value of the string (`saved`) to each
    //             // // string in the split array
    //             // for (let i = 0; i < numSplits; i++) {
    //             //     returnValueShadowObject[i] = stringTaint;
    //             // }
    //         } 
    // }),
    "toString": asNativeModel({
        recorder: function(analysis: Analysis,
                           name: DynamicDescription,
                           receiverName: DynamicDescription,
                           receiver: any,
                           args: any[],
                           description: StaticDescription): boolean {
            // We need to know if we're calling toString on an Array vs.
            // something else, because Array.prototype.toString is special.
            return Array.isArray(receiver);
        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                           name: DynamicDescription,
                                           receiverName: DynamicDescription,
                                           actualArgs: number,
                                           isArray: boolean,
                                           isMethod: boolean,
                                           description: StaticDescription): void {
            // before popping the arguments or doing anything else,
            // immediately dispatch on whether or not we're calling toString
            // on an array
            if (!isArray) {
                // if this isn't an array, the default native model will work
                defaultImplementationPre(machine,
                    name,
                    receiverName,
                    actualArgs,
                    null,
                    isMethod,
                    description);
            } else {
                // if this is an array, we have one extra step: join the
                // taint values of each element of the array
                let [builtinTaint, receiverTaint, argsTaint] =
                    popArgsAndReportFlowsIntoBuiltin(machine,
                        name,
                        receiverName,
                        actualArgs,
                        isMethod,
                        description);

                // eventually we're going to return this taint value.
                // we want it to reflect the combination of the array's
                // taint, AND the taint of all its elements.
                let returnTaint = receiverTaint;

                // loop through elements of the shadow array and read their
                // taint values
                let shadowArray = machine.getShadowObject(receiverName);
                for (let prop in shadowArray) {
                    // can't call hasOwnProperty directly because shadow
                    // objects don't have the Object prototype
                    if (Object.hasOwnProperty.call(shadowArray, prop)) {
                        returnTaint =
                            machine.join(returnTaint, shadowArray[prop]);
                    }
                }

                // return the combined taint value
                returnTaints(machine, returnTaint);
            }
        },
    }),
    "split": asNativeModel({
        recorder: function(analysis: Analysis,
                   name: DynamicDescription,
                   receiverName: DynamicDescription,
                   receiver: any,
                   args: any[],
                   description: StaticDescription): number {
            // record length of split string array. we need to do this
            // because the abstract machine will have no idea how many
            // splits occurred at runtime, and therefore won't know which
            // properties in the split array to propagate the taint to.
            return String.prototype.split.apply(receiver).length;
        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                           name: DynamicDescription,
                                           receiverName: DynamicDescription,
                                           actualArgs: number,
                                           numSplits: number,
                                           isMethod: boolean,
                                           description: StaticDescription): [number, V] {
            let [builtinTaint, receiverTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    receiverName,
                    actualArgs,
                    isMethod,
                    description);

            // save the taint value of the string we're splitting
            return [numSplits, receiverTaint];
        },
        implementationPost: function<V, F>(machine: JSMachine<V, F>,
                                           name: DynamicDescription,
                                           returnValueName: DynamicDescription,
                                           saved: [number, V],
                                           description: StaticDescription): void {
            let [numSplits, stringTaint] = saved;
            let returnValueShadowObject = machine.getShadowObject(returnValueName);

            // propagate the taint value of the string (`saved`) to each
            // string in the split array
            for (let i = 0; i < numSplits; i++) {
                returnValueShadowObject[i] = stringTaint;
            }
        }
    }),
    "push": asNativeModel({
        recorder: (analysis: Analysis,
                   name: DynamicDescription,
                   receiverName: DynamicDescription,
                   receiver: any,
                   args: any[],
                   description: StaticDescription) => {
            // return receiver's length if it exists, otherwise 0
            return receiver.length || 0;
        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                        name: DynamicDescription,
                                        receiverName: DynamicDescription,
                                        actualArgs: number,
                                        previousLength: number,
                                        isMethod: boolean,
                                        description: StaticDescription): void {
            let [builtinTaint, receiverTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    receiverName,
                    actualArgs,
                    isMethod,
                    description);

            // find the shadow object corresponding to this array
            let shadowArray = machine.getShadowObject(receiverName);

            // copy taint values of args into the shadow array. we start
            // copying into the array at the end, as specified by its length
            // property BEFORE we executed this function.
            for (let i = 0; i < actualArgs; i++) {
                shadowArray[previousLength + i] = argsTaint[i];
            }

            // Array.prototype.push returns the new length of the array. we
            // haven't tainted the length field, so we'll just return its
            // old taint value. if this object didn't have a length field
            // yet, we'll return the untainted value.
            returnTaints(machine, shadowArray.length || machine.getUntaintedValue());
        }
    }),
    "join": asNativeModel({
        recorder: (analysis: Analysis,
                   name: DynamicDescription,
                   receiverName: DynamicDescription,
                   receiver: any,
                   args: any[],
                   description: StaticDescription) => {

        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                        name: DynamicDescription,
                                        receiverName: DynamicDescription,
                                        actualArgs: number,
                                        recorded: null,
                                        isMethod: boolean,
                                        description: StaticDescription): void {
            let [builtinTaint, receiverTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    receiverName,
                    actualArgs,
                    isMethod,
                    description);

            // find the shadow object corresponding to this array
            let shadowArray = machine.getShadowObject(receiverName);

            // join all the taints in this array. this computes the *result*
            // of this builtin, a.k.a. whether or not the result of this
            // function should be tainted.
            let arrayValuesTaint = Object.values(shadowArray).reduce(machine.join, machine.getUntaintedValue());

            // get the taint of the separator string used to join all the
            // values of this array together. if no separator was specified,
            // use the untainted value.
            let separatorTaint;
            if (argsTaint.length > 0) {
                // user specified a separator
                separatorTaint = argsTaint[0];
            } else {
                // user didn't specify a separator, use the untainted value
                separatorTaint = machine.getUntaintedValue();
            }

            // compute the taint value that should be output by this
            // function, consisting of joining the taint values of the array
            // values and the separator string.
            let returnTaint = machine.join(arrayValuesTaint, separatorTaint);

            // return this taint value
            returnTaints(machine, returnTaint);
        }
    }),
    /**
     * TODO: actually inspect the "descriptor" object and only perform
     *  the change if it's possible/allowed by the semantics defined in
     *  the API
     */
    "defineProperty": asNativeModel({
        recorder: (analysis: Analysis,
                   name: DynamicDescription,
                   receiverName: DynamicDescription,
                   receiver: any,
                   args: any[],
                   description: StaticDescription) => {
            let [obj, prop, descriptor] = args;

            return {obj: analysis.shadowMemory.getShadowID(obj),
                prop: prop,
                descriptor: analysis.shadowMemory.getShadowID(descriptor)
            };
        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                        name: DynamicDescription,
                                        receiverName: DynamicDescription,
                                        actualArgs: number,
                                        recorded: {obj: DynamicDescription, prop: string, descriptor: DynamicDescription},
                                        isMethod: boolean,
                                        description: StaticDescription): void {
            let [builtinTaint, receiverTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    receiverName,
                    actualArgs,
                    isMethod,
                    description);

            // deconstruct recorded information
            let {obj, prop, descriptor} = recorded;

            // emulate a regular writeProperty event in the abstract machine
            let abstractPropertyValue = machine.getShadowObject(descriptor).value;
            machine.push([abstractPropertyValue, description]);
            machine.writeProperty([obj, prop, description]);

            returnTaints(machine, receiverTaint);
        }
    }),
    "call": asNativeModel({
        recorder: (analysis: Analysis,
                   name: DynamicDescription,
                   receiverName: DynamicDescription,
                   receiver: any,
                   args: any[],
                   description: StaticDescription) => {
            /*
            // Record two things:
            // 1. the shadow id of the function the user wants to call
            // 2. the number of arguments that function is expecting
            return [name, args[1].length];
            */
            return [receiver.length, description];
        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                               name: DynamicDescription,
                               receiverName: DynamicDescription,
                               actualArgs: number,
                               extraRecords: [number, StaticDescription],
                               isMethod: boolean,
                               description: StaticDescription): void {
            // let expectedArgs
            // ([name, expectedArgs, actualArgs, description])
            let [builtinTaint, receiverTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    receiverName,
                    actualArgs,
                    isMethod,
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
             receiverName: DynamicDescription,
             receiver: any,
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
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                        name: DynamicDescription,
                                        receiverName: DynamicDescription,
                                        actualArgs: number,
                                        extraRecords: number,
                                        isMethod: boolean,
                                        description: StaticDescription): void {
            let [builtinTaint, receiverTaint, argsTaint] =
                popArgsAndReportFlowsIntoBuiltin(machine,
                    name,
                    receiverName,
                    actualArgs,
                    isMethod,
                    description);

            // the return value of this native function should be equal to
            // the taint value of whichever argument was the maximum
            returnTaints(machine, argsTaint[extraRecords]);
        }
    }),
    /*
     *   Promises
     */
    "then": asNativeModel({
        recorder: (analysis: Analysis,
                   name: DynamicDescription,
                   receiverName: DynamicDescription,
                   receiver: any,
                   args: any[],
                   description: StaticDescription) => {
            // This refers to .then called on the returns of async functions.
            // Get the asyncID of the promise, and return it.
            return analysis.getAsyncPromiseId(receiver);
        },
        implementationPre: function <V, F>(machine: JSMachine<V, F>,
                                        name: DynamicDescription,
                                        receiverName: DynamicDescription,
                                        actualArgs: number,
                                        idOfReactedUponPromise: DynamicDescription,
                                        isMethod: boolean,
                                        description: StaticDescription): void {
            let [_, receiverTaint, argsTaint] =
            popArgsAndReportFlowsIntoBuiltin(machine,
                name,
                receiverName,
                actualArgs,
                isMethod,
                description);

            let promise = machine.getPromise(idOfReactedUponPromise);
            let promiseTaint = machine.getUntaintedValue();
            if (promise != undefined)
                promiseTaint = machine.getPromise(idOfReactedUponPromise).resolve;

            // install advice for initVar
            // the next initVar will be for the argument to the callback passed to .then,
            // so we should taint it according to the promise's resolve value taintedness
            machine.installAdvice(machine.initVarAdvice,
                (s : any, description : StaticDescription) => {
                    let v = machine.join(promiseTaint, machine.produceMark(description));
    
                    if (machine.argsLeftToProcess > 0) {
                        machine.taintTree.get(machine.ROOTID).pop();
                        machine.argsLeftToProcess--;
                    }
    
                    // actually set the taint value of the variable
                    machine.varTaintMap.set(s, v);
            });
        }
    }),
    // "catch": asNativeModel({
    //     recorder: (analysis: Analysis,
    //                name: DynamicDescription,
    //                receiverName: DynamicDescription,
    //                receiver: any,
    //                args: any[],
    //                description: StaticDescription) => {
    //         // This refers to .then called on the returns of async functions.
    //         // Get the asyncID of the promise, and return it.
    //         return analysis.getAsyncPromiseId(receiver);
    //     },
    //     implementationPre: function <V, F>(machine: JSMachine<V, F>,
    //                                     name: DynamicDescription,
    //                                     receiverName: DynamicDescription,
    //                                     actualArgs: number,
    //                                     idOfReactedUponPromise: DynamicDescription,
    //                                     isMethod: boolean,
    //                                     description: StaticDescription): void {
    //         let [_, receiverTaint, argsTaint] =
    //         popArgsAndReportFlowsIntoBuiltin(machine,
    //             name,
    //             receiverName,
    //             actualArgs,
    //             isMethod,
    //             description);

    //         let promise = machine.getPromise(idOfReactedUponPromise);
    //         let promiseTaint = machine.getUntaintedValue();
    //         if (promise != undefined)
    //             promiseTaint = machine.getPromise(idOfReactedUponPromise).reject;

    //         // install advice for initVar
    //         // the next initVar will be for the argument to the callback passed to .then,
    //         // so we should taint it according to the promise's resolve value taintedness
    //         machine.installAdvice(machine.initVarAdvice,
    //             (s : any, description : StaticDescription) => {
    //                 let v = machine.join(promiseTaint, machine.produceMark(description));
    
    //                 if (machine.argsLeftToProcess > 0) {
    //                     machine.taintTree.get(machine.ROOTID).pop();
    //                     machine.argsLeftToProcess--;
    //                 }
    
    //                 // actually set the taint value of the variable
    //                 machine.varTaintMap.set(s, v);
    //         });
    //     }
    // }),
});

// TODO: don't use string here; create a type for builtin names
export function getNativeModel<V, F>(name: string): NativeModel<any, any> {

    if (models.hasOwnProperty(name)) {
        // @ts-ignore
        return models[name] as NativeModel<any>;
    } else {
        return defaultModel;
    }
}

export function useNativeRecorder<R>(analysis: Analysis,
                                     name: DynamicDescription,
                                     receiverName: DynamicDescription,
                                     receiver: any,
                                     args: any[],
                                     isMethod: boolean,
                                     description: StaticDescription): R {
    let nativeModel = getNativeModel(description.name);

    if (nativeModel.recorder) {
        return nativeModel.recorder(analysis, name, receiverName, receiver, args, isMethod, description);
    } else {
        // if there isn't a recorder, return null. this is ok because a lack
        // of a recorder only makes sense when we aren't expecting any
        // recorded information.
        return null;
    }
}

export function useNativeImplementationPre<V, F, R, S>(machine: JSMachine<V, F>,
                                     name: DynamicDescription,
                                     receiver: DynamicDescription,
                                     actualArgs: number,
                                     extraRecords: R,
                                     isMethod: boolean,
                                     description: StaticDescription): S {
    return getNativeModel(description.name)
        .implementationPre(machine,
            name,
            receiver,
            actualArgs,
            extraRecords,
            isMethod,
            description);
}

export function useNativeImplementationPost<V, F, S>(machine: JSMachine<V, F>,
                                                       name: DynamicDescription,
                                                       returnValueName: DynamicDescription,
                                                       saved: S,
                                                       description: StaticDescription): void {
    let model = getNativeModel(description.name);
    if (model.implementationPost) {
        model.implementationPost(machine,
            name,
            returnValueName,
            saved,
            description);
    }

    // if there isn't an implementationPost, don't do anything. this is ok
    // because we don't need to return anything.
}

export function getModelledFunctionNames() : string[] {
    return Object.keys(models);
}