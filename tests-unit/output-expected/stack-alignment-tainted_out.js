exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[26,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[26,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__dirname"});

    m.initVar("inc", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"inc"});

    m.initVar("first", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"first"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[26,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}}});

    m.writeVar("inc", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}},"name":"inc"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}}});

    m.writeVar("first", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}},"name":"first"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}}});

    m.readVar("first", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,9],"end":[24,14]}},"name":"first"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,15],"end":[24,16]}},"name":"a"});

    m.readVar("inc", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,18],"end":[24,21]}},"name":"inc"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[24,22],"end":[24,23]}}});

    m.functionCall("inc", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[24,18],"end":[24,24]}},"name":"inc"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[12,2]}},"name":"x"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[10,9],"end":[10,10]}}});

    m.writeVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,5],"end":[10,10]}},"name":"x"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,5],"end":[10,10]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[11,12],"end":[11,13]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[11,5],"end":[11,14]}}});

    m.functionReturn("inc", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[24,18],"end":[24,24]}},"name":"inc"});

    m.functionCall("first", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[24,9],"end":[24,25]}},"name":"first"});

    m.initVar("g", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}},"name":"g"});

    m.initVar("h", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[14,1],"end":[16,2]}},"name":"h"});

    m.readVar("g", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,12],"end":[15,13]}},"name":"g"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[15,5],"end":[15,14]}}});

    m.functionReturn("first", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[24,9],"end":[24,25]}},"name":"first"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[24,5],"end":[24,25]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[24,5],"end":[24,25]}}});

    m.endExecution();

};

