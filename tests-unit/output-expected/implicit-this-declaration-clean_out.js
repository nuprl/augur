exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[15,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[15,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"__dirname"});

    m.initVar("Square", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"Square"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"a"});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"z"});

    m.initVar("s", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[15,2]}},"name":"s"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}});

    m.writeVar("Square", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"Square"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[6,9],"end":[6,10]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,5],"end":[6,10]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,10]}}});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,10]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,10]}}});

    m.readVar("Square", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,13],"end":[13,19]}},"name":"Square"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[13,20],"end":[13,22]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,24],"end":[13,25]}},"name":"a"});

    m.functionCall("Square", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[13,9],"end":[13,26]}},"name":"Square"});

    m.initVar("width", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"width"});

    m.initVar("height", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"height"});

    m.initVar("doIExist", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"doIExist"});

    m.readVar("height", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,20],"end":[10,26]}},"name":"height"});

    m.readVar("this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,36],"end":[10,40]}},"name":"this"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,31],"end":[10,41]}},"name":"z"});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,20],"end":[10,41]}}});

    m.writeVar("doIExist", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,9],"end":[10,41]}},"name":"doIExist"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,9],"end":[10,41]}}});

    m.functionReturn("Square", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,9],"end":[13,26]}},"name":"Square"});

    m.writeVar("s", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,26]}},"name":"s"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,26]}}});

    m.endExecution();

};

