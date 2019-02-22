/*
 * Copyright (c) 2018, Oracle and/or its affiliates. All rights reserved.
 */

// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

function analyze(sandbox) {
    const callCount = new Map();
    const iidToLocation = new Map();

    this.functionEnter = (iid, func, receiver, args) => {
    iidToLocation.set(iid, sandbox.iidToLocation(iid));
    if (!callCount.has(iid)) {
        callCount.set(iid, 0);
    }
    callCount.set(iid, callCount.get(iid) + 1);
    };

    this.endExecution = () => {
    callCount.forEach((value, key) => {
        console.log(`[${key}]:\t${value}\t(${iidToLocation.get(key)})`);
    });
    };
}

export default analyze;
