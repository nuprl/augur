exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[8,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"__dirname"});

    m.initVar("identity", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"identity"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[8,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}}});

    m.writeVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"identity"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.readVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,17]}},"name":"identity"});

    m.readVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[7,26]}},"name":"identity"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,27],"end":[7,28]}},"name":"a"});

    m.functionCall("identity", 2, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[7,29]}},"name":"identity"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}},"name":"x"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}});

    m.functionReturn("identity", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,18],"end":[7,29]}},"name":"identity"});

    m.readVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,31],"end":[7,39]}},"name":"identity"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,40],"end":[7,41]}}});

    m.functionCall("identity", 2, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,31],"end":[7,42]}},"name":"identity"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}},"name":"x"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}});

    m.functionReturn("identity", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,31],"end":[7,42]}},"name":"identity"});

    m.functionCall("identity", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,43]}},"name":"identity"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[5,2]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,12],"end":[4,13]}},"name":"x"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,14]}}});

    m.functionReturn("identity", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,43]}},"name":"identity"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,43]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,43]}}});

    m.endExecution();

};

