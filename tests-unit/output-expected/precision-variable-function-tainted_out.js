exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,76]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,75]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,75]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,17]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,17]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,17]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[3,2]}},"name":"z"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,3],"end":[3,4]}},"name":"a"});

    m.functionCall("z", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[3,5]}},"name":"z"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,17]}},"name":"x"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,16],"end":[2,17]}},"name":"x"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,16],"end":[2,17]}}});

    m.functionReturn("z", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[3,5]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[3,5]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,6]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[4,6]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[4,6]}}});

    m.endExecution();

};

