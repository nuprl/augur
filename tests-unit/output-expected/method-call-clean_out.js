exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[12,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[12,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[12,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[12,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"__dirname"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"a"}]);

    m.initVar(["global^obj", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"obj"}]);

    m.initVar(["global^z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"z"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,75]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,75]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,75]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}}}]);

    m.writeProperty(["obj0", "id", {}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[7,2]}}}]);

    m.writeVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[7,2]}},"name":"obj"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[7,2]}}}]);

    m.readVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,14]}},"name":"obj"}]);

    m.readProperty(["obj0", "id", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,17]}}}]);

    m.readVar(["global^obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,21]}},"name":"obj"}]);

    m.readProperty(["obj0", "id", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,24]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,25],"end":[9,29]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,30]}},"name":"id"}]);

    m.initVar(["global@3#4^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}}}]);

    m.readVar(["global@3#4^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,16],"end":[5,17]}},"name":"x"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,17]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,17]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,30]}},"name":"id"}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,31]}},"name":"id"}]);

    m.initVar(["global@3#5^x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}},"name":"x"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}}}]);

    m.readVar(["global@3#5^x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,16],"end":[5,17]}},"name":"x"}]);

    m.functionReturn(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,17]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,17]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,31]}},"name":"id"}]);

    m.writeVar(["global^z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,7],"end":[9,31]}},"name":"z"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,7],"end":[9,31]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}}}]);

    m.endExecution([]);

};

