exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[18,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[18,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[18,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[18,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"__dirname"}]);

    m.initVar(["global^f", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"f"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[14,2]}}}]);

    m.writeVar(["global^f", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[14,2]}},"name":"f"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}}]);

    m.readVar(["global^f", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[16,1],"end":[16,2]}},"name":"f"}]);

    m.functionInvokeStart(["global@3", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[16,1],"end":[16,4]}},"name":"f"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[14,2]}},"name":"x"}]);

    m.functionEnter(["global@3", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[14,2]}}}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,13],"end":[5,14]}},"name":"a"}]);

    m.writeVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,14]}},"name":"x"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,14]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[10,17],"end":[10,18]}}}]);

    m.writeVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,13],"end":[10,18]}},"name":"x"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,13],"end":[10,18]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,9],"end":[13,10]}},"name":"x"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,10]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,10]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[14,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[16,1],"end":[16,4]}},"name":"f"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[16,1],"end":[16,4]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[18,2]}}}]);

    m.endExecution([]);

};

