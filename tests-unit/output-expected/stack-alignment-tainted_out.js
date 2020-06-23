exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[26,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[26,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[26,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[26,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__dirname"}]);

    m.initVar(["global^inc", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"inc"}]);

    m.initVar(["global^first", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"first"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}}}]);

    m.writeVar(["global^inc", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}},"name":"inc"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}}}]);

    m.writeVar(["global^first", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}},"name":"first"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}}}]);

    m.readVar(["global^first", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,9],"end":[24,14]}},"name":"first"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,15],"end":[24,16]}},"name":"a"}]);

    m.readVar(["global^inc", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,18],"end":[24,21]}},"name":"inc"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[24,22],"end":[24,23]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[24,18],"end":[24,24]}},"name":"inc"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[10,9],"end":[10,10]}}}]);

    m.writeVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,5],"end":[10,10]}},"name":"x"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,5],"end":[10,10]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[11,12],"end":[11,13]}}}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,14]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,14]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[24,18],"end":[24,24]}},"name":"inc"}]);

    m.functionInvokeStart(["global@6", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[24,9],"end":[24,25]}},"name":"first"}]);

    m.initVar(["global@6#7^g", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}},"name":"g"}]);

    m.initVar(["global@6#7^h", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}},"name":"h"}]);

    m.functionEnter(["global@6", 2, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}}}]);

    m.readVar(["global@6#7^g", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,12],"end":[15,13]}},"name":"g"}]);

    m.functionReturn(["global@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[15,5],"end":[15,14]}}}]);

    m.functionExit(["global@6", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[15,5],"end":[15,14]}}}]);

    m.functionInvokeEnd(["global@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[24,9],"end":[24,25]}},"name":"first"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,5],"end":[24,25]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[24,5],"end":[24,25]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}}}]);

    m.endExecution([]);

};

