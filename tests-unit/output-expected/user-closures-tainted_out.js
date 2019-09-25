exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[22,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[22,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"__dirname"});

    m.initVar("MyPromise", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"MyPromise"});

    m.initVar("identity", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"identity"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[22,2]}},"name":"a"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}}});

    m.writeVar("MyPromise", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}},"name":"MyPromise"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}}});

    m.writeVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}},"name":"identity"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,72],"end":[1,73]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,68],"end":[1,73]}}});

    m.readVar("identity", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,9]}},"name":"identity"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[17,10],"end":[17,11]}},"name":"a"});

    m.functionCall("identity", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,12]}},"name":"identity"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[12,1],"end":[15,2]}},"name":"x"});

    m.readVar("MyPromise", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,16],"end":[13,25]}},"name":"MyPromise"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}}});

    m.functionCall("MyPromise", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[13,12],"end":[13,58]}},"name":"MyPromise"});

    m.initVar("executor", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[3,1],"end":[10,2]}},"name":"executor"});

    m.readVar("executor", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,13]}},"name":"executor"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,26]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[4,28],"end":[4,35]}}});

    m.functionCall("", 2, 2, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,36]}}});

    m.initVar("resolve", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}},"name":"resolve"});

    m.initVar("reject", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[13,26],"end":[13,57]}},"name":"reject"});

    m.readVar("resolve", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,54]}},"name":"resolve"});

    m.readVar("x", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,55],"end":[13,56]}},"name":"x"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,57]}}});

    m.initVar("val", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[4,14],"end":[4,26]}},"name":"val"});

    m.readVar("val", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,26]}},"name":"val"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,23],"end":[4,26]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,57]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,47],"end":[13,57]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,36]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[4,5],"end":[4,36]}}});

    m.readVar("this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[7,9]}},"name":"this"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[7,17],"end":[9,6]}}});

    m.writeProperty("obj0", "then", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[9,6]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[7,5],"end":[9,6]}}});

    m.functionReturn("MyPromise", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[13,12],"end":[13,58]}},"name":"MyPromise"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[13,5],"end":[13,58]}}});

    m.functionReturn("identity", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,12]}},"name":"identity"});

    m.readProperty("obj0", "then", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[17,17]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[17,18],"end":[19,2]}}});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[19,3]}}});

    m.initVar("onfulfilled", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[7,17],"end":[9,6]}},"name":"onfulfilled"});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[19,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[17,1],"end":[19,3]}}});

    m.endExecution();

};

