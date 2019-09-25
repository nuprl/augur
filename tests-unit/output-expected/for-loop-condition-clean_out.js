exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,14]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,14]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,14]}}});

    m.initVar("i", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,15]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,10],"end":[4,15]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,10],"end":[4,15]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,18],"end":[4,19]}},"name":"a"});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,24]}},"name":"i"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,18],"end":[4,19]}},"name":"a"});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,24]}},"name":"i"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,18],"end":[4,19]}},"name":"a"});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,24]}},"name":"i"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,30]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,18],"end":[4,19]}},"name":"a"});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,24]}},"name":"i"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,25]}}});

    m.endExecution();

};

