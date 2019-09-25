exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[5,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[5,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"a"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"b"});

    m.initVar("c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"c"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[5,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,71]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,71]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,10]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,10]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,14]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,21],"end":[3,22]}},"name":"a"});

    m.writeVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,22]}},"name":"c"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,22]}}});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,9],"end":[4,10]}},"name":"c"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,10]}}});

    m.endExecution();

};

