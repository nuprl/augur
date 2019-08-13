import JSMachine from "./JSMachine";
import {TaintDescription} from "../types";

export default class ExpressionMachine extends JSMachine<Set<TaintDescription>> {
    check(sink: TaintDescription, taint: Set<TaintDescription>): boolean {
        return true;
    }

    join(a: Set<TaintDescription>, b: Set<TaintDescription>): Set<TaintDescription> {
        // set union
        return new Set<TaintDescription>([...a, ...b]);
    }

    produceMark(description: TaintDescription): Set<TaintDescription> {
        return new Set<TaintDescription>().add(description);
    }

    getUntaintedValue(): Set<TaintDescription> {
        return new Set<TaintDescription>();
    }
}
