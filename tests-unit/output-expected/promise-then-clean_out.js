exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__dirname"});

    m.initVar("identity", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"identity"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"a"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}});

    m.writeVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"identity"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.readVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,9]}},"name":"identity"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,10],"end":[7,11]}}});

    m.functionCall("identity", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,12]}},"name":"identity"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"});

    m.readVar("Promise", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,16],"end":[4,23]}},"name":"Promise"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,47]}}});

    m.functionCall("Promise", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,48]}},"name":"Promise"});

    m.initVar("resolve", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,47]}},"name":"resolve"});

    m.readVar("resolve", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,44]}},"name":"resolve"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,45],"end":[4,46]}},"name":"x"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,47]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,47]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,37],"end":[4,47]}}});

    m.functionReturn("Promise", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,48]}},"name":"Promise"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,49]}}});

    m.functionReturn("identity", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,12]}},"name":"identity"});

    m.readProperty("obj0", "then", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[7,17]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}}});

    m.functionCall("then", 2, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[9,3]}},"name":"then"});

    m.functionReturn("then", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[9,3]}},"name":"then"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,1],"end":[9,3]}}});

    m.initVar("v", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}},"name":"v"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[9,2]}},"name":"z"});

    m.readVar("v", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,15],"end":[8,16]}},"name":"v"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,11],"end":[8,16]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,11],"end":[8,16]}}});

    m.endExecution();

};

