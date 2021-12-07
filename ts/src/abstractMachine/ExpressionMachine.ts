// JALANGI DO NOT INSTRUMENT

import JSMachine from "./JSMachine";
import {StaticDescription} from "../types";

export default class ExpressionMachine
    extends JSMachine<Set<StaticDescription>, [Set<StaticDescription>, StaticDescription]> {
        
    check(sink: StaticDescription, taint: Set<StaticDescription>): boolean {
        return true;
    }

    reportPossibleFlow(description: StaticDescription, taintMarking: Set<StaticDescription>): void {
        this.reportFlow([taintMarking, description]);
    }

    join(a: Set<StaticDescription>, b: Set<StaticDescription>): Set<StaticDescription> {
        // set union
        let set = new Set<StaticDescription>();

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

    produceMark(description: StaticDescription): Set<StaticDescription> {
        return new Set<StaticDescription>().add(description);
    }

    getUntaintedValue(): Set<StaticDescription> {
        return new Set<StaticDescription>();
    }
}
