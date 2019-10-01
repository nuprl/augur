import JSMachine from "./JSMachine";
import {TaintDescription} from "../types";

type NativeModel =
    <V, F>(machine: JSMachine<V, F>,
           name: string,
           actualArgs: number,
           description: TaintDescription) => void;

interface NativeModelMap {
    // this means any string can be a valid key
    [name: string]: NativeModel;
}

let defaultModel: NativeModel = (machine, name, actualArgs, description) => {
    let args = [];

    for (let i = 0; i < actualArgs; i++) {
        args.push(machine.taintStack.pop());
    }

    args.forEach((v) => machine.reportPossibleFlow(description, v));
};

let models: NativeModelMap = {
    "Object.defineProperty":
        <V, F>(machine: JSMachine<V, F>, name: string, actualArgs: number, description: TaintDescription) => {
            // pre
            
        }
};

export function useNativeModel<V, F>(machine: JSMachine<V, F>, name: string, actualArgs: number, description: TaintDescription): void {
    let model = models[name];

    if (model) {
        model(machine, name, actualArgs, description);
    } else {
        defaultModel(machine, name, actualArgs, description);
    }
}

