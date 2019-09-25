exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[11,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"__dirname"});

    m.initVar("foo", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"foo"});

    m.initVar("bar", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[11,2]}},"name":"bar"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.writeVar("foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"foo"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}});

    m.writeVar("bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"bar"});

    m.readVar("bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,4]}},"name":"bar"});

    m.functionCall("bar", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}},"name":"bar"});

    m.readVar("foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,6]}},"name":"foo"});

    m.functionCall("foo", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,8]}},"name":"foo"});

    m.functionReturn("foo", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,8]}},"name":"foo"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,8]}}});

    m.functionReturn("bar", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}},"name":"bar"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[9,6]}}});

    m.readVar("foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,4]}},"name":"foo"});

    m.functionCall("foo", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,6]}},"name":"foo"});

    m.functionReturn("foo", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,6]}},"name":"foo"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,1],"end":[10,6]}}});

    m.endExecution();

};

