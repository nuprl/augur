exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__dirname"}]);

    m.initVar(["global^exec", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"exec"}]);

    m.initVar(["global^a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"a"}]);

    m.initVar(["global^command", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"command"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}}}]);

    m.readVar(["global^require", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,82]}},"name":"require"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,83],"end":[1,98]}}}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,99]}},"name":"require"}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,99]}},"name":"require"}]);

    m.readProperty(["obj0", "exec", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,104]}}}]);

    m.writeVar(["global^exec", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,104]}},"name":"exec"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,104]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,25]}}}]);

    m.writeVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,24]}},"name":"a"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,24]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}}]);

    m.writeVar(["global^command", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,24]}},"name":"command"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,24]}}}]);

    m.readVar(["global^exec", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,5]}},"name":"exec"}]);

    m.readVar(["global^a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,6],"end":[5,7]}},"name":"a"}]);

    m.readVar(["global^command", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,10],"end":[5,17]}},"name":"command"}]);

    m.binary([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,6],"end":[5,17]}}}]);

    m.functionInvokeStart(["global@7", 3, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,18]}},"name":"exec"}]);

    m.functionInvokeEnd(["global@7", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,18]}},"name":"exec"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,18]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}}}]);

    m.endExecution([]);

};

