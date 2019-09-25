exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[9,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"__dirname"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"a"});

    m.initVar("yourCreditCardNumber", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"yourCreditCardNumber"});

    m.initVar("obj", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[9,2]}},"name":"obj"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,70],"end":[1,88]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,87]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,66],"end":[1,87]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[2,28],"end":[2,59]}}});

    m.writeVar("yourCreditCardNumber", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,58]}},"name":"yourCreditCardNumber"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,5],"end":[2,58]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,11],"end":[3,13]}}});

    m.writeVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}},"name":"obj"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[3,5],"end":[3,13]}}});

    m.readVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[4,4]}},"name":"obj"});

    m.readVar("yourCreditCardNumber", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,25]}},"name":"yourCreditCardNumber"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,29],"end":[4,33]}}});

    m.writeProperty("obj0", "not a real credit card number", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[4,33]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,1],"end":[4,33]}}});

    m.readVar("obj", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,13],"end":[6,16]}},"name":"obj"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,13],"end":[6,16]}}});

    m.writeVar("key", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,6],"end":[6,9]}},"name":"key"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,6],"end":[6,9]}}});

    m.initVar("z", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[6,18],"end":[8,2]}},"name":"z"});

    m.readVar("key", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,13],"end":[7,16]}},"name":"key"});

    m.writeVar("z", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,16]}},"name":"z"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,9],"end":[7,16]}}});

    m.endExecution();

};

