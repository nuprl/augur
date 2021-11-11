// JALANGI DO NOT INSTRUMENT

import JSMachine from "./JSMachine";
import {StaticDescription, SourcedBoolean} from "../types";

export default class SourcedBooleanMachine
    extends JSMachine<SourcedBoolean, [Set<StaticDescription>, StaticDescription]> {

    getUntaintedValue(): SourcedBoolean {
        return new SourcedBoolean(false, new Set());
    }

    check(sink: StaticDescription, taint: SourcedBoolean): boolean {
        return taint.value;
    }

    join(a: SourcedBoolean, b: SourcedBoolean): SourcedBoolean {
        if (a === undefined && b === undefined)
            return this.getUntaintedValue();
        if (a === undefined)
            return b;
        if (b === undefined)
            return a;
            
        return new SourcedBoolean(a.value || b.value, new Set([...a.source, ...b.source]));
    }

    produceMark(description: StaticDescription): SourcedBoolean {
        return new SourcedBoolean(this.isSource(description), new Set([description]));
    }

    // When a value with taint marking T flows into a construct with the given description
    reportPossibleFlow(description: StaticDescription, taintMarking: SourcedBoolean): void {
        // console.log(`reportPossibleFlow: description: ${JSON.stringify(description)}, taintMarking: ${JSON.stringify(taintMarking)}`)
        // First check if the value is tainted
        if (taintMarking !== undefined && taintMarking.value) {
            // Check to see if this is a sink, and that it accepts the given
            // marking
            let sinkDescription = this.getSink(description);
            if (sinkDescription !== undefined && this.check(description, taintMarking)) {
                this.reportFlow([taintMarking.source, sinkDescription]);
            }
        }
    }
}
