exports.drive = (m) => {

    m.functionEnter(["global@0", 0, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[10,4]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[10,3]}}}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[10,3]}}}]);

    m.functionExit(["global@0", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[10,4]}}}]);

    m.initVar(["global^exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}},"name":"exports"}]);

    m.initVar(["global^require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}},"name":"require"}]);

    m.initVar(["global^module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}},"name":"module"}]);

    m.initVar(["global^__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}},"name":"__filename"}]);

    m.initVar(["global^__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}},"name":"__dirname"}]);

    m.initVar(["global^sendToThirdParty", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}},"name":"sendToThirdParty"}]);

    m.initVar(["global^input", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}},"name":"input"}]);

    m.functionEnter(["global@1", 5, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}}]);

    m.writeVar(["global^sendToThirdParty", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"sendToThirdParty"}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,76],"end":[1,107]}}}]);

    m.writeVar(["global^input", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,106]}},"name":"input"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,106]}}}]);

    m.readVar(["global^sendToThirdParty", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,17]}},"name":"sendToThirdParty"}]);

    m.readVar(["global^input", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,18],"end":[8,23]}},"name":"input"}]);

    m.functionInvokeStart(["global@3", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,24]}},"name":"sendToThirdParty"}]);

    m.initVar(["global@3#4^data", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"data"}]);

    m.initVar(["global@3#4^message", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"message"}]);

    m.initVar(["global@3#4^output", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"output"}]);

    m.functionEnter(["global@3", 1, {"type":"functionEnter","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}}]);

    m.literal([{"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,72]}}}]);

    m.writeVar(["global@3#4^message", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,71]}},"name":"message"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,71]}}}]);

    m.readVar(["global@3#4^message", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,20],"end":[5,27]}},"name":"message"}]);

    m.writeVar(["global@3#4^output", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,11],"end":[5,27]}},"name":"output"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,11],"end":[5,27]}}}]);

    m.functionExit(["global@3", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}}]);

    m.functionInvokeEnd(["global@3", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,24]}},"name":"sendToThirdParty"}]);

    m.pop([{"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,24]}}}]);

    m.functionExit(["global@1", 8, {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[10,2]}}}]);

    m.endExecution([]);

};

