exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__dirname"}]);

    m.initVar(["global^foo", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"foo"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"a"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.writeVar(["global^foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"foo"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,18]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,18]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,18]}}}]);

    m.readVar(["global^foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,4]}},"name":"foo"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,5],"end":[9,6]}},"name":"a"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,12],"end":[9,13]}}}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,8],"end":[9,13]}},"name":"z"}]);

    m.functionInvokeStart(["global@3", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,14]}},"name":"foo"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"}]);

    m.initVar(["global@3#4^y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"}]);

    m.functionEnter(["global@3", 2, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,14]}},"name":"foo"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,14]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.endExecution([]);

};

