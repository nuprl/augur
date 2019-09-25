exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"a"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"b"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,15],"end":[2,16]}},"name":"a"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,21],"end":[2,22]}},"name":"a"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,27],"end":[2,28]}},"name":"a"});

    m.writeProperty("obj0", "c", {});

    m.writeProperty("obj0", "b", {});

    m.writeProperty("obj0", "d", {});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,11],"end":[2,29]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,29]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,29]}}});

    m.initVar("k", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"k"});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}}});

    m.writeVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"k"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,6]}},"name":"b"});

    m.readVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,7],"end":[5,8]}},"name":"k"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,13]}}});

    m.writeProperty("obj0", "d", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,13]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,13]}}});

    m.writeVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"k"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,6]}},"name":"b"});

    m.readVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,7],"end":[5,8]}},"name":"k"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,13]}}});

    m.writeProperty("obj0", "b", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,13]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,13]}}});

    m.writeVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}},"name":"k"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[6,2]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,6]}},"name":"b"});

    m.readVar("k", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,7],"end":[5,8]}},"name":"k"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,12],"end":[5,13]}}});

    m.writeProperty("obj0", "c", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,13]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,13]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,11],"end":[8,12]}},"name":"b"});

    m.readProperty("obj0", "b", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,11],"end":[8,14]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[8,7],"end":[8,14]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[8,7],"end":[8,14]}}});

    m.endExecution();

};

