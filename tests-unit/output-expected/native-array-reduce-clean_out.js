exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[6,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"a"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"b"});

    m.initVar("numbers", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"numbers"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[6,2]}},"name":"z"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,11],"end":[2,12]}}});

    m.writeVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,12]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,7],"end":[2,12]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,18],"end":[3,19]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,21],"end":[3,22]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,24],"end":[3,25]}}});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,27],"end":[3,28]}},"name":"b"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,30],"end":[3,32]}}});

    m.writeProperty("obj0", "4", {});

    m.writeProperty("obj0", "3", {});

    m.writeProperty("obj0", "2", {});

    m.writeProperty("obj0", "1", {});

    m.writeProperty("obj0", "0", {});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,17],"end":[3,33]}}});

    m.writeVar("numbers", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,33]}},"name":"numbers"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,7],"end":[3,33]}}});

    m.readVar("numbers", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,18]}},"name":"numbers"});

    m.readProperty("obj0", "reduce", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,25]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}}});

    m.functionCall("reduce", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,42]}},"name":"reduce"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"});

    m.readVar("y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"});

    m.readVar("y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"});

    m.readVar("y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,26],"end":[4,41]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,37]}},"name":"x"});

    m.readVar("y", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,40],"end":[4,41]}},"name":"y"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,36],"end":[4,41]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,38],"end":[4,41]}}});

    m.functionReturn("reduce", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,11],"end":[4,42]}},"name":"reduce"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,42]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,7],"end":[4,42]}}});

    m.endExecution();

};

