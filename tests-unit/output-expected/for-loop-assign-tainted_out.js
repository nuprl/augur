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

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,10],"end":[2,11]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,13],"end":[2,14]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,16],"end":[2,17]}},"name":"a"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,19],"end":[2,20]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,22],"end":[2,23]}}});

    m.writeProperty("obj0", "4", {});

    m.writeProperty("obj0", "3", {});

    m.writeProperty("obj0", "2", {});

    m.writeProperty("obj0", "1", {});

    m.writeProperty("obj0", "0", {});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,9],"end":[2,24]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,24]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,24]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,9],"end":[3,10]}}});

    m.writeVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}},"name":"c"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,10]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,15]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,10],"end":[4,15]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,10],"end":[4,15]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}},"name":"z"});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,22]}},"name":"c"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}},"name":"z"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,28]}},"name":"a"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}},"name":"z"});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,22]}},"name":"c"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}},"name":"z"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,28]}},"name":"a"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}},"name":"z"});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,22]}},"name":"c"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}},"name":"z"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,28]}},"name":"a"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}},"name":"z"});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,22]}},"name":"c"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}},"name":"z"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,28]}},"name":"a"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}},"name":"z"});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,22]}},"name":"c"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}},"name":"z"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,27],"end":[4,28]}},"name":"a"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,25]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,24],"end":[4,28]}}});

    m.readVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,18]}},"name":"z"});

    m.readVar("c", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,21],"end":[4,22]}},"name":"c"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,17],"end":[4,22]}}});

    m.endExecution();

};

