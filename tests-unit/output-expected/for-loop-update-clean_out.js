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

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,10],"end":[3,11]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,6],"end":[3,11]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,6],"end":[3,11]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[3,14]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,17],"end":[3,18]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[3,18]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[3,18]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,10]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,24],"end":[3,25]}},"name":"a"});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,20],"end":[3,25]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,20],"end":[3,25]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[3,14]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,17],"end":[3,18]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[3,18]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,13],"end":[3,18]}}});

    m.endExecution();

};

