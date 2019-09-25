exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[14,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[14,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"__dirname"});

    m.initVar("id", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"id"});

    m.initVar("assignToZ", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"assignToZ"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[14,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}});

    m.writeVar("id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"id"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}}});

    m.writeVar("assignToZ", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}},"name":"assignToZ"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}});

    m.readVar("assignToZ", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,10]}},"name":"assignToZ"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,11],"end":[12,12]}}});

    m.functionCall("assignToZ", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,13]}},"name":"assignToZ"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[8,1],"end":[10,2]}},"name":"x"});

    m.readVar("id", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,15],"end":[9,17]}},"name":"id"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,18],"end":[9,19]}},"name":"x"});

    m.functionCall("id", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[9,15],"end":[9,20]}},"name":"id"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"x"});

    m.readVar("Promise", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,16],"end":[5,23]}},"name":"Promise"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,47]}}});

    m.functionCall("Promise", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,48]}},"name":"Promise"});

    m.initVar("resolve", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[5,24],"end":[5,47]}},"name":"resolve"});

    m.readVar("resolve", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,37],"end":[5,44]}},"name":"resolve"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,45],"end":[5,46]}},"name":"x"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[5,37],"end":[5,47]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,37],"end":[5,47]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,37],"end":[5,47]}}});

    m.functionReturn("Promise", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,48]}},"name":"Promise"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,49]}}});

    m.functionReturn("id", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[9,15],"end":[9,20]}},"name":"id"});

    m.functionReturn("assignToZ", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,13]}},"name":"assignToZ"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[12,13]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,5],"end":[9,20]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[9,5],"end":[9,20]}}});

    m.endExecution();

};

