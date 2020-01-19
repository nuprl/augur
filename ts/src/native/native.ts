import JSMachine from "../abstractMachine/JSMachine";
import {StaticDescription} from "../types";
import Analysis from "../analysis/analysis";

type NativeModelRecorder<R> =
    (analysis: Analysis,
     name: string,
     args: any[],
     description: StaticDescription) => R;

type NativeModelImplementation<R> =
    <V, F>(machine: JSMachine<V, F>,
           name: string,
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

let defaultRecorder: NativeModelRecorder<void> = () => {};
let defaultImplementation: NativeModelImplementation<void> =
    (machine, name, actualArgs, extraRecords, description): void => {
    let args = [];

    for (let i = 0; i < actualArgs; i++) {
        args.push(machine.taintStack.pop());
    }

    args.forEach((v) => machine.reportPossibleFlow(description, v));
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
               name: string,
               actualArgs: number,
               extraRecords: void,
               description: StaticDescription): void {
        }
    }),
    "call": asNativeModel({
        recorder: (analysis: Analysis,
                   name: string,
                   args: any[],
                   description: StaticDescription) => {
            return name;
        },
        implementation: function <V, F>(machine: JSMachine<V, F>,
                               name: string,
                               actualArgs: number,
                               extraRecords: string,
                               description: StaticDescription): void {
        }
    }),


});

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
                                     name: string,
                                     args: any[],
                                     description: StaticDescription): R {
    return getNativeModel(name).recorder(analysis, name, args, description);
}

export function useNativeImplementation<V, F, R>(machine: JSMachine<V, F>,
                                     name: string,
                                     actualArgs: number,
                                     extraRecords: R,
                                     description: StaticDescription): void {
    getNativeModel(name)
        .implementation(machine,
            name,
            actualArgs,
            extraRecords,
            description);
}
