exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[14,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[14,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[14,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[14,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"__dirname"}]);

    m.initVar(["global^id", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"id"}]);

    m.initVar(["global^assignToZ", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"assignToZ"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.writeVar(["global^id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"id"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}}}]);

    m.writeVar(["global^assignToZ", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}},"name":"assignToZ"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,74]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,74]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,74]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}}]);

    m.readVar(["global^assignToZ", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,10]}},"name":"assignToZ"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,11],"end":[12,12]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,13]}},"name":"assignToZ"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}}}]);

    m.readVar(["global^id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,15],"end":[9,17]}},"name":"id"}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,19]}},"name":"x"}]);

    m.functionInvokeStart(["global@3#4@6", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,15],"end":[9,20]}},"name":"id"}]);

    m.initVar(["global@3#4@6#7^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"x"}]);

    m.functionEnter(["global@3#4@6", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.readVar(["global@3#4@6#7^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,13]}},"name":"x"}]);

    m.functionReturn(["global@3#4@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,14]}}}]);

    m.functionExit(["global@3#4@6", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,14]}}}]);

    m.functionInvokeEnd(["global@3#4@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,15],"end":[9,20]}},"name":"id"}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,13]}},"name":"assignToZ"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,13]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}}}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,5],"end":[9,20]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,5],"end":[9,20]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}}}]);

    m.endExecution([]);

};

