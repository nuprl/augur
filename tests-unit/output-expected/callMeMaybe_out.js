exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[24,3]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[1,1],"end":[24,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"__dirname"});

    m.initVar("foo", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"foo"});

    m.initVar("bar", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"bar"});

    m.initVar("baz", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"baz"});

    m.initVar("T", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"T"});

    m.initVar("t", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"t"});

    m.initVar("i", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,2],"end":[24,2]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.writeVar("foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"foo"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}}});

    m.writeVar("bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"bar"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}}});

    m.writeVar("baz", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"baz"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[16,2]}}});

    m.writeVar("T", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[13,1],"end":[16,2]}},"name":"T"});

    m.readVar("T", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[18,13],"end":[18,14]}},"name":"T"});

    m.functionCall("T", 0, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[18,9],"end":[18,16]}},"name":"T"});

    m.readVar("this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,3],"end":[14,7]}},"name":"this"});

    m.readVar("foo", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[14,12],"end":[14,15]}},"name":"foo"});

    m.writeProperty("obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,3],"end":[14,15]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[14,3],"end":[14,15]}}});

    m.readVar("this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,3],"end":[15,7]}},"name":"this"});

    m.readVar("baz", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[15,12],"end":[15,15]}},"name":"baz"});

    m.writeProperty("obj0", "r", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[15,3],"end":[15,15]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[15,3],"end":[15,15]}}});

    m.functionReturn("T", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[18,9],"end":[18,16]}},"name":"T"});

    m.writeVar("t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[18,5],"end":[18,16]}},"name":"t"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[18,5],"end":[18,16]}}});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,13],"end":[19,14]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,9],"end":[19,14]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,9],"end":[19,14]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,17]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,20],"end":[19,21]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}});

    m.readVar("t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,4]}},"name":"t"});

    m.readProperty("obj0", "r", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,6]}}});

    m.functionCall("baz", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"});

    m.initVar("c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"c"});

    m.readVar("this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,7]}},"name":"this"});

    m.readProperty("obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,9]}}});

    m.functionCall("foo", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"foo"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"a"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,10],"end":[2,11]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,3],"end":[2,12]}}});

    m.functionReturn("foo", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"foo"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}}});

    m.functionReturn("baz", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}}});

    m.readVar("t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,4]}},"name":"t"});

    m.readProperty("obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,6]}}});

    m.functionCall("foo", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"foo"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[1,62],"end":[3,2]}},"name":"a"});

    m.readVar("a", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[2,10],"end":[2,11]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[2,3],"end":[2,12]}}});

    m.functionReturn("foo", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"foo"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}}});

    m.readVar("t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,4]}},"name":"t"});

    m.readVar("bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,9],"end":[22,12]}},"name":"bar"});

    m.writeProperty("obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,17]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,20],"end":[19,21]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}});

    m.readVar("t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,4]}},"name":"t"});

    m.readProperty("obj0", "r", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,6]}}});

    m.functionCall("baz", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"});

    m.initVar("c", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[9,1],"end":[11,2]}},"name":"c"});

    m.readVar("this", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,7]}},"name":"this"});

    m.readProperty("obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,9]}}});

    m.functionCall("bar", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"bar"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"b"});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,10],"end":[6,11]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,12]}}});

    m.functionReturn("bar", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}},"name":"bar"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[10,3],"end":[10,11]}}});

    m.functionReturn("baz", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}},"name":"baz"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[20,3],"end":[20,8]}}});

    m.readVar("t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,4]}},"name":"t"});

    m.readProperty("obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,6]}}});

    m.functionCall("bar", 1, 0, {"type":"functionInvocation","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"bar"});

    m.initVar("b", {"type":"declaration","location":{"fileName":"test.js","pos":{"start":[5,1],"end":[7,2]}},"name":"b"});

    m.readVar("b", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[6,10],"end":[6,11]}},"name":"b"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[6,3],"end":[6,12]}}});

    m.functionReturn("bar", {"type":"functionReturn","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}},"name":"bar"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[21,3],"end":[21,8]}}});

    m.readVar("t", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,4]}},"name":"t"});

    m.readVar("bar", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[22,9],"end":[22,12]}},"name":"bar"});

    m.writeProperty("obj0", "f", {"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[22,3],"end":[22,12]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,23],"end":[19,26]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,17]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"test.js","pos":{"start":[19,20],"end":[19,21]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}});

    m.pop({"type":"expr","location":{"fileName":"test.js","pos":{"start":[19,16],"end":[19,21]}}});

    m.endExecution();

};

