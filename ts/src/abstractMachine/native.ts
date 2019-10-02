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
    "Array.reduce":
        <V, F>(m: JSMachine<V, F>, name: string, actualArgs: number, description: TaintDescription) => {
            // pre
            m.pop([description]);
            if (actualArgs === 1) {
                m.pop([description]);
                m.push([m.getUntaintedValue(), description]);
                m.push([m.getUntaintedValue(), description]);
                m.readProperty([name, 0, description]);
                m.initVar(["__accum__", description]);
                m.pop([description]);
            } else if (actualArgs === 2) {
                m.initVar(["__accum__", description]);
                m.pop([description]);
            }

            // callback pre
            m.functionCallOp.before.install(
                ([functionName, expectedArgs, actualArgs, description]) => {
                    if (functionName === name) {
                        m.readVar(["__accum__", description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.readProperty([name, 0, description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.push([m.getUntaintedValue(), description]);
                        m.push([m.getUntaintedValue(), description]);
                    }
                });

            // callback post
            m.functionReturnOp.after.install(
                ([[functionName, description], ret]) => {
                    if (functionName === name) {
                        m.readVar(["__ret__", description]);
                        m.writeVar(["__accum__", description]);
                        m.pop([description]);
                    }
                }
            );

            // post
            m.builtinExitOp.after.install(
                ([[name, description], ret]) => {
                    m.readVar(["__accum__", description]);
                    m.writeVar(["__ret__", description]);
                    m.functionCallOp.before.uninstall();
                    m.functionReturnOp.after.uninstall();
                    m.builtinExitOp.after.uninstall();
                }
            );
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

