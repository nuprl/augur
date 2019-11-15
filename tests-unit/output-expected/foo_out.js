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

    m.initVar(["global^bar", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"bar"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.writeVar(["global^foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"foo"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.writeVar(["global^bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"bar"}]);

    m.readVar(["global^bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,4]}},"name":"bar"}]);

    m.functionInvokeStart(["global@3", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}},"name":"bar"}]);

    m.functionEnter(["global@3", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.readVar(["global^foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,6]}},"name":"foo"}]);

    m.functionInvokeStart(["global@3#4@6", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,8]}},"name":"foo"}]);

    m.functionEnter(["global@3#4@6", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.functionExit(["global@3#4@6", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.functionInvokeEnd(["global@3#4@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,8]}},"name":"foo"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,8]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}},"name":"bar"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}}}]);

    m.readVar(["global^foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,4]}},"name":"foo"}]);

    m.functionInvokeStart(["global@3#4@6", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,6]}},"name":"foo"}]);

    m.functionEnter(["global@3#4@6", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.functionExit(["global@3#4@6", 12, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}}]);

    m.functionInvokeEnd(["global@3#4@6", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,6]}},"name":"foo"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,6]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}}}]);

    m.endExecution([]);

};

