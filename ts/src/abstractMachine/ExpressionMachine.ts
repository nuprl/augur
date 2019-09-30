// JALANGI DO NOT INSTRUMENT

import JSMachine from "./JSMachine";
import {TaintDescription} from "../types";

export default class ExpressionMachine
    extends JSMachine<Set<TaintDescription>, [Set<TaintDescription>, TaintDescription]> {
    check(sink: TaintDescription, taint: Set<TaintDescription>): boolean {
        return true;
    }

    reportPossibleFlow(description: TaintDescription, taintMarking: Set<TaintDescription>): void {
        this.reportFlow([taintMarking, description]);
    }

    join(a: Set<TaintDescription>, b: Set<TaintDescription>): Set<TaintDescription> {
        // set union
        let set = new Set<TaintDescription>();

        // add them separately, since one of them might not be defined.
        // TODO: this is a hack. they SHOULD always be defined. if they aren't
        // we are losing information.
        if (a) {
            a.forEach((v) => set.add(v));
        }
        if (b) {
            b.forEach((v) => set.add(v));
        }
        return set;
    }

    produceMark(description: TaintDescription): Set<TaintDescription> {
        return new Set<TaintDescription>().add(description);
    }

    getUntaintedValue(): Set<TaintDescription> {
        return new Set<TaintDescription>();
    }
}
