exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__dirname"});

    m.initVar("sendToThirdParty", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"sendToThirdParty"});

    m.initVar("input", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"input"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}});

    m.writeVar("sendToThirdParty", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"sendToThirdParty"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,76],"end":[1,107]}}});

    m.writeVar("input", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,106]}},"name":"input"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,106]}}});

    m.readVar("sendToThirdParty", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,17]}},"name":"sendToThirdParty"});

    m.readVar("input", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,18],"end":[8,23]}},"name":"input"});

    m.functionCall("sendToThirdParty", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,24]}},"name":"sendToThirdParty"});

    m.initVar("data", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"data"});

    m.initVar("message", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"message"});

    m.initVar("output", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"output"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,56]}}});

    m.readVar("data", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,59],"end":[4,63]}},"name":"data"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,63]}}});

    m.writeVar("message", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,63]}},"name":"message"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,63]}}});

    m.readVar("message", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,20],"end":[5,27]}},"name":"message"});

    m.writeVar("output", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,11],"end":[5,27]}},"name":"output"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,11],"end":[5,27]}}});

    m.functionReturn("sendToThirdParty", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,24]}},"name":"sendToThirdParty"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[8,24]}}});

    m.endExecution();

};

