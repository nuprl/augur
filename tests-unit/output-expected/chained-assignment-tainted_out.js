exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[7,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"a"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"b"});

    m.initVar("c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"c"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[7,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,10]}}});

    m.writeVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}},"name":"c"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,11]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,11]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,11]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,13],"end":[5,14]}},"name":"a"});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,9],"end":[5,14]}},"name":"b"});

    m.writeVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,5],"end":[5,14]}},"name":"c"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,14]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[5,14]}}});

    m.endExecution();

};

