exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"__dirname"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"a"}]);

    m.initVar(["global^id", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"id"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,10],"end":[3,16]}}}]);

    m.writeVar(["global^id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,16]}},"name":"id"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,16]}}}]);

    m.readVar(["global^id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,11],"end":[5,13]}},"name":"id"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,14],"end":[5,16]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[5,11],"end":[5,17]}},"name":"id"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,10],"end":[3,16]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,10],"end":[3,16]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,15],"end":[3,16]}},"name":"x"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[3,15],"end":[3,16]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,10],"end":[3,16]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,15],"end":[3,16]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,11],"end":[5,17]}},"name":"id"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,7],"end":[5,17]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,7],"end":[5,17]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}}}]);

    m.endExecution([]);

};

