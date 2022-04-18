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
            
        // Right now, we don't have a good idea of what we can do with the intermediate information
        // that would be included in the sources set of the join.
        // 
        // It is able to contain intermediate expressions that taint has flowed into, e.g., variables,
        // but I think the useful information would be in the expressions that are "a level up", e.g.,
        // the function call that the variable is in (or if that function is a callback to map or forEach).
        //
        // For now, we're going to take whichever source had the taint in the first place, which should work
        // out to be the actual source of the taint.
        if (a.value && b.value) {
            this.logger.error('How is this possible?');
        }

        let retSource;
        if (a.value) {
            retSource = a.source;
        } else {
            retSource = b.source;
        }

        return new SourcedBoolean(a.value || b.value, retSource /* new Set([...a.source, ...b.source]) */);
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
                // TODO: Changed to description to get location information.
                this.reportFlow([taintMarking.source, description /* sinkDescription */]);
            }
        }
    }
}
