exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__dirname"}]);

    m.initVar(["global^test", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"test"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}}]);

    m.writeVar(["global^test", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"test"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}}]);

    m.readVar(["global^test", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,13]}},"name":"test"}]);

    m.functionInvokeStart(["global@3", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,15]}},"name":"test"}]);

    m.initVar(["global@3#4^b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"b"}]);

    m.functionEnter(["global@3", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,13],"end":[4,18]}}}]);

    m.writeVar(["global@3#4^b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,18]}},"name":"b"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,18]}}}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,13]}},"name":"a"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,14]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,14]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,15]}},"name":"test"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,15]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,15]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}}}]);

    m.endExecution([]);

};

