exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[16,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[16,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[16,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[16,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"__dirname"}]);

    m.initVar(["global^id", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"id"}]);

    m.initVar(["global^f", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"f"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.writeVar(["global^id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"id"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,17]}}}]);

    m.writeVar(["global^f", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,17]}},"name":"f"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.readVar(["global^id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,3]}},"name":"id"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,4],"end":[9,5]}},"name":"a"}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}},"name":"id"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}},"name":"x"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}},"name":"id"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}}}]);

    m.readVar(["global^f", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,12]}},"name":"f"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,13],"end":[14,14]}},"name":"a"}]);

    m.functionInvokeStart(["global@6", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,15]}},"name":"f"}]);

    m.initVar(["global@6#7^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,17]}},"name":"x"}]);

    m.functionEnter(["global@6", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,17]}}}]);

    m.functionExit(["global@6", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,17]}}}]);

    m.functionInvokeEnd(["global@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[14,11],"end":[14,15]}},"name":"f"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,7],"end":[14,15]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,7],"end":[14,15]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[16,2]}}}]);

    m.endExecution([]);

};

