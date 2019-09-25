exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[12,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[12,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"a"});

    m.initVar("obj", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"obj"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[12,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,75]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,75]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,75]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}}});

    m.writeProperty("obj0", "id", {});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[7,2]}}});

    m.writeVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[7,2]}},"name":"obj"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[7,2]}}});

    m.readVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,14]}},"name":"obj"});

    m.readProperty("obj0", "id", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,17]}}});

    m.readVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,21]}},"name":"obj"});

    m.readProperty("obj0", "id", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,24]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,25],"end":[9,29]}}});

    m.functionCall("id", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,30]}},"name":"id"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}},"name":"x"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,16],"end":[5,17]}},"name":"x"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,17]}}});

    m.functionReturn("id", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,30]}},"name":"id"});

    m.functionCall("id", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,31]}},"name":"id"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[6,6]}},"name":"x"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,16],"end":[5,17]}},"name":"x"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,17]}}});

    m.functionReturn("id", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,11],"end":[9,31]}},"name":"id"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,7],"end":[9,31]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,7],"end":[9,31]}}});

    m.endExecution();

};

