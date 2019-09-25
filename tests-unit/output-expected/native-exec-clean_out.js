exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"__dirname"});

    m.initVar("exec", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"exec"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"a"});

    m.initVar("command", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"command"});

    m.readVar("require", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,82]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,83],"end":[1,98]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,99]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,99]}},"name":"require"});

    m.readProperty("obj0", "exec", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,75],"end":[1,104]}}});

    m.writeVar("exec", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,104]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,104]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,25]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,24]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,24]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,24]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,24]}}});

    m.readVar("exec", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,5]}},"name":"exec"});

    m.readVar("command", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,6],"end":[5,13]}},"name":"command"});

    m.functionCall("exec", 3, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,14]}},"name":"exec"});

    m.functionReturn("exec", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,14]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,14]}}});

    m.endExecution();

};

