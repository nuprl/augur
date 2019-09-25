exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__dirname"});

    m.initVar("test", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"test"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}}});

    m.writeVar("test", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"test"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.readVar("test", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,13]}},"name":"test"});

    m.functionCall("test", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,15]}},"name":"test"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[6,2]}},"name":"b"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,13],"end":[4,18]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,18]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,18]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,13]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,14]}}});

    m.functionReturn("test", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[8,9],"end":[8,15]}},"name":"test"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,15]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,5],"end":[8,15]}}});

    m.endExecution();

};

