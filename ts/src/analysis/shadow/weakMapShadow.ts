// JALANGI DO NOT INSTRUMENT

import {
    DynamicDescription, RawVariableDescription,
    ShadowMemory,
    VariableDescription
} from "../../types";

export default class WeakMapShadow implements ShadowMemory {

    // TODO: keep track of number of invocations of each function
    //  to make output more readable

    // TODO: make functions' shadow names somewhat related to their actual
    //  name, if defined

    private map: WeakMap<object, DynamicDescription> = new WeakMap();

    // An inverse of the stack field, this allows easier access to the different DynamicDescriptions for each rawVariableDescription
    private stackMap: Map<RawVariableDescription, Array<DynamicDescription>> = new Map()

    private key: number = 0;

    private stack: Array<[DynamicDescription, Array<RawVariableDescription>]> =
        [["global" as DynamicDescription, []]];

    getShadowID(o: object): DynamicDescription {
        let key = this.map.get(o);

        if (!key) {
            // console.error(`tried to get non-existent shadow ID for object
            // ${o.toString()}`);
         //  console.error(`tried to get non-existent shadow ID for object`);
         //  console.error(`initializing now...`);
            this.initialize(o);
            key = this.map.get(o);
            if (!key) {
          //      console.error(`failed to initialize shadow ID for object ${o}`);
            }
        }

        // if (key.includes("obj")) {
        //     console.error(`!!!! GETFIELD INCLUDES OBJ: receiver=${o} shadowID=${key}`);
        // }
        return key;
    }

    initialize(o: object): void {
        const shadow = this.map.get(o);

        if (!shadow) {
            try {
                this.map.set(o, (this.currentScopeName() + "@" + this.key++) as DynamicDescription);
            } catch(e) {
                //console.log(e.toString());
            }
        }
    }

    functionEnter(f: Function): void {
        // hopefully unnecessary
        // this.initialize(f);
      // console.error("shadow functionEnter");
        this.stack.push([(this.getShadowID(f) + "#" + this.key++) as DynamicDescription, []]);
    }

    functionExit(): void {
      // console.error("shadow functionExit");
        // Updates the stackMap by exiting the scope for variables declared in this scope.
        // Otherwise if the same variable name occurred throughout the program getting the full variable name
        // would return the incorrect value.
          this.currentScope()[1].forEach(rd => {
            this.stackMap.get(rd).pop();
        })  
      this.stack.pop();
    }

    declare(name: RawVariableDescription): void {
        //console.error(`current scope: ${JSON.stringify(this.currentScope())}`);
        // Adds the new RawVariableDescription to the stackMap along with the current scope to be
        // used to easily acquire the full variable name.
        if (!this.stackMap.has(name)) {
            this.stackMap.set(name, [this.currentScope()[0]]);
        } else {
            this.stackMap.get(name).push(this.currentScope()[0]);
        }
        this.currentScope()[1].push(name);
    }

    currentScopeName(): DynamicDescription {
        return this.currentScope()[0];
    }

    currentScope(): [DynamicDescription, Array<RawVariableDescription>] {
        return this.stack[this.stack.length - 1];
    }

    getFullVariableName(name: RawVariableDescription): VariableDescription {
        // Checks whether the provided name is in the stackMap from when it was declared.
        // Otherwise it's most likely in the global scope.
        if (this.stackMap.has(name)) {
            let arr = this.stackMap.get(name);
            return (arr[arr.length - 1] + "^" + name) as VariableDescription;
        } else {
            return ("global^" + name) as VariableDescription;
        }
    }
}
