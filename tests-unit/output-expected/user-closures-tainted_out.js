exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[22,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[22,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[22,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[22,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"__dirname"}]);

    m.initVar(["global^MyPromise", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"MyPromise"}]);

    m.initVar(["global^identity", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"identity"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"a"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}}}]);

    m.writeVar(["global^MyPromise", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}},"name":"MyPromise"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}}}]);

    m.writeVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}},"name":"identity"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.readVar(["global^identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,9]}},"name":"identity"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[17,10],"end":[17,11]}},"name":"a"}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,12]}},"name":"identity"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}}}]);

    m.readVar(["global^MyPromise", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,16],"end":[13,25]}},"name":"MyPromise"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}}}]);

    m.functionInvokeStart(["global@3#4@6", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[13,12],"end":[13,58]}},"name":"MyPromise"}]);

    m.initVar(["global@3#4@6#7^executor", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}},"name":"executor"}]);

    m.functionEnter(["global@3#4@6", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}}}]);

    m.readVar(["global@3#4@6#7^executor", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,13]}},"name":"executor"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,26]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,28],"end":[4,35]}}}]);

    m.functionInvokeStart(["global@3#4@6#7@9", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,36]}}}]);

    m.initVar(["global@3#4@6#7@9#10^resolve", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}},"name":"resolve"}]);

    m.initVar(["global@3#4@6#7@9#10^reject", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}},"name":"reject"}]);

    m.functionEnter(["global@3#4@6#7@9", 2, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}}}]);

    m.readVar(["global@3#4@6#7@9#10^resolve", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,54]}},"name":"resolve"}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,55],"end":[13,56]}},"name":"x"}]);

    m.functionInvokeStart(["global@3#4@6#7@9#10@12", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,57]}}}]);

    m.initVar(["global@3#4@6#7@9#10@12#13^val", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,26]}},"name":"val"}]);

    m.functionEnter(["global@3#4@6#7@9#10@12", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,26]}}}]);

    m.readVar(["global@3#4@6#7@9#10@12#13^val", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,26]}},"name":"val"}]);

    m.functionReturn(["global@3#4@6#7@9#10@12", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,26]}}}]);

    m.functionExit(["global@3#4@6#7@9#10@12", 22, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,26]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,26]}}}]);

    m.functionInvokeEnd(["global@3#4@6#7@9#10@12", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,57]}}}]);

    m.functionReturn(["global@3#4@6#7@9", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,57]}}}]);

    m.functionExit(["global@3#4@6#7@9", 16, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,57]}}}]);

    m.functionInvokeEnd(["global@3#4@6#7@9", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,36]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,36]}}}]);

    m.readVar(["global^this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,9]}},"name":"this"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,17],"end":[9,6]}}}]);

    m.writeProperty(["obj0", "then", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[9,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[9,6]}}}]);

    m.functionExit(["global@3#4@6", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}}}]);

    m.functionInvokeEnd(["global@3#4@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,12],"end":[13,58]}},"name":"MyPromise"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,58]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,58]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,12]}},"name":"identity"}]);

    m.readProperty(["obj0", "then", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,17]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[17,18],"end":[19,2]}}}]);

    m.functionInvokeStart(["global@15", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[19,3]}}}]);

    m.initVar(["global@15#16^onfulfilled", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[7,17],"end":[9,6]}},"name":"onfulfilled"}]);

    m.functionEnter(["global@15", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[7,17],"end":[9,6]}}}]);

    m.functionExit(["global@15", 9, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,17],"end":[9,6]}}}]);

    m.functionInvokeEnd(["global@15", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[19,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[19,3]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}}}]);

    m.endExecution([]);

};

