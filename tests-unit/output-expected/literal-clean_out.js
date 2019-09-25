exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__dirname"});

    m.initVar("foo", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"foo"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}});

    m.writeVar("foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"foo"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,18]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,18]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,18]}}});

    m.readVar("foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,4]}},"name":"foo"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,5],"end":[9,6]}},"name":"a"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,12],"end":[9,13]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,8],"end":[9,13]}},"name":"z"});

    m.functionCall("foo", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,14]}},"name":"foo"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"});

    m.functionReturn("foo", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,14]}},"name":"foo"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,14]}}});

    m.endExecution();

};

