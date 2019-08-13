import JSMachine from "./JSMachine";
import {TaintDescription} from "../types";

export default class BooleanMachine extends JSMachine<boolean> {

    getUntaintedValue(): boolean {
        return false;
    }

    check(sink: TaintDescription, taint: boolean): boolean {
        return taint;
    }

    join(a: boolean, b: boolean): boolean {
        return a || b;
    }

    produceMark(description: TaintDescription): boolean {
        return this.getSink(description) !== undefined;
    }

}
