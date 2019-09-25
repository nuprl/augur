exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__dirname"});

    m.initVar("test", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"test"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}});

    m.writeVar("test", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"test"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.readVar("test", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,13]}},"name":"test"});

    m.functionCall("test", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,15]}},"name":"test"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}});

    m.functionReturn("test", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,15]}},"name":"test"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,15]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,15]}}});

    m.endExecution();

};

