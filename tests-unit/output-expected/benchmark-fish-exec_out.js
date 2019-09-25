exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[1,1],"end":[19,3]}}});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[1,1],"end":[19,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"dummySource"});

    m.initVar("DUMMY_FILE", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"DUMMY_FILE"});

    m.initVar("payload", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"payload"});

    m.initVar("fish", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[1,2],"end":[19,2]}},"name":"fish"});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[9,1],"end":[11,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[9,1],"end":[11,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[5,18],"end":[5,27]}}});

    m.writeVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[5,5],"end":[5,26]}},"name":"DUMMY_FILE"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[5,5],"end":[5,26]}}});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[7,15],"end":[7,25]}}});

    m.readVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[7,28],"end":[7,38]}},"name":"DUMMY_FILE"});

    m.binaryOp({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[7,15],"end":[7,38]}}});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[7,41],"end":[7,44]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[7,15],"end":[7,44]}}});

    m.writeVar("payload", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[7,5],"end":[7,43]}},"name":"payload"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[7,5],"end":[7,43]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[13,1],"end":[13,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[13,13],"end":[13,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"fish-exec.js","pos":{"start":[13,1],"end":[13,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"fish-exec.js","pos":{"start":[9,1],"end":[11,2]}},"name":"val"});

    m.readVar("payload", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[10,5],"end":[10,12]}},"name":"payload"});

    m.readVar("val", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[10,16],"end":[10,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[10,5],"end":[10,12]}}});

    m.writeVar("payload", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[10,5],"end":[10,19]}},"name":"payload"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[10,5],"end":[10,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"fish-exec.js","pos":{"start":[13,1],"end":[13,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[13,1],"end":[13,17]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[15,12],"end":[15,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[15,20],"end":[15,26]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"fish-exec.js","pos":{"start":[15,12],"end":[15,27]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,1],"end":[3,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,1],"end":[3,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,2],"end":[3,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,2],"end":[3,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,2],"end":[3,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,2],"end":[3,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,2],"end":[3,2]}},"name":"__dirname"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,62],"end":[1,68]}},"name":"module"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,79],"end":[1,86]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,87],"end":[1,99]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,79],"end":[1,100]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,1],"end":[53,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,1],"end":[53,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"__dirname"});

    m.initVar("fs", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"fs"});

    m.initVar("EventEmitter", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"EventEmitter"});

    m.initVar("exec", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"exec"});

    m.initVar("ee", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"ee"});

    m.initVar("fish", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,2],"end":[53,2]}},"name":"fish"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,84],"end":[1,91]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,92],"end":[1,96]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,84],"end":[1,97]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,84],"end":[1,97]}},"name":"require"});

    m.writeVar("fs", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,66],"end":[1,97]}},"name":"fs"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[1,66],"end":[1,97]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[2,23],"end":[2,30]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[2,31],"end":[2,39]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[2,23],"end":[2,40]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[2,23],"end":[2,40]}},"name":"require"});

    m.readProperty("obj0", "EventEmitter", {"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[2,23],"end":[2,53]}}});

    m.writeVar("EventEmitter", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[2,5],"end":[2,53]}},"name":"EventEmitter"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[2,5],"end":[2,53]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[3,23],"end":[3,30]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[3,31],"end":[3,46]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[3,23],"end":[3,47]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[3,23],"end":[3,47]}},"name":"require"});

    m.readProperty("obj1", "exec", {"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[3,23],"end":[3,52]}}});

    m.writeVar("exec", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[3,5],"end":[3,52]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[3,5],"end":[3,52]}}});

    m.readVar("EventEmitter", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[5,14],"end":[5,26]}},"name":"EventEmitter"});

    m.functionCall("EventEmitter", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[5,10],"end":[5,26]}},"name":"EventEmitter"});

    m.functionReturn("EventEmitter", {"type":"functionReturn","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[5,10],"end":[5,26]}},"name":"EventEmitter"});

    m.writeVar("ee", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[5,5],"end":[5,26]}},"name":"ee"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[5,5],"end":[5,26]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[8,12],"end":[16,2]}}});

    m.writeVar("fish", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[8,5],"end":[16,2]}},"name":"fish"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[8,5],"end":[16,2]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[51,1],"end":[51,7]}},"name":"module"});

    m.readVar("fish", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[51,18],"end":[51,22]}},"name":"fish"});

    m.writeProperty("obj2", "exports", {"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[51,1],"end":[51,22]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[51,1],"end":[51,22]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,79],"end":[1,100]}},"name":"require"});

    m.writeProperty("obj3", "exports", {"type":"expr","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,62],"end":[1,100]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/index.js","pos":{"start":[1,62],"end":[1,100]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"fish-exec.js","pos":{"start":[15,12],"end":[15,27]}},"name":"require"});

    m.writeVar("fish", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[15,5],"end":[15,27]}},"name":"fish"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[15,5],"end":[15,27]}}});

    m.readVar("fish", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[17,1],"end":[17,5]}},"name":"fish"});

    m.readVar("payload", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[17,6],"end":[17,13]}},"name":"payload"});

    m.functionCall("fish", 1, 1, {"type":"functionInvocation","location":{"fileName":"fish-exec.js","pos":{"start":[17,1],"end":[17,14]}},"name":"fish"});

    m.initVar("query", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[8,12],"end":[16,2]}},"name":"query"});

    m.initVar("ls", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[8,12],"end":[16,2]}},"name":"ls"});

    m.readVar("exec", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,14],"end":[10,18]}},"name":"exec"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,19],"end":[10,24]}}});

    m.readVar("query", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,27],"end":[10,32]}},"name":"query"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,19],"end":[10,32]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,34],"end":[12,6]}}});

    m.functionCall("exec", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,14],"end":[12,7]}},"name":"exec"});

    m.functionReturn("exec", {"type":"functionReturn","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,14],"end":[12,7]}},"name":"exec"});

    m.writeVar("ls", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,9],"end":[12,7]}},"name":"ls"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,9],"end":[12,7]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[13,12],"end":[15,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[13,5],"end":[15,7]}}});

    m.functionReturn("fish", {"type":"functionReturn","location":{"fileName":"fish-exec.js","pos":{"start":[17,1],"end":[17,14]}},"name":"fish"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[17,1],"end":[17,14]}}});

    m.readVar("done", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[18,1],"end":[18,5]}},"name":"done"});

    m.functionCall("done", 0, 0, {"type":"functionInvocation","location":{"fileName":"fish-exec.js","pos":{"start":[18,1],"end":[18,7]}},"name":"done"});

    m.readVar("console", {"type":"variable","location":{"fileName":"fish-exec.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"});

    m.readProperty("obj4", "log", {"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[2,5],"end":[2,16]}}});

    m.literal({"type":"literal","location":{"fileName":"fish-exec.js","pos":{"start":[2,17],"end":[2,24]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"fish-exec.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"fish-exec.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[2,5],"end":[2,25]}}});

    m.functionReturn("done", {"type":"functionReturn","location":{"fileName":"fish-exec.js","pos":{"start":[18,1],"end":[18,7]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"fish-exec.js","pos":{"start":[18,1],"end":[18,7]}}});

    m.initVar("error", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,34],"end":[12,6]}},"name":"error"});

    m.initVar("stdout", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,34],"end":[12,6]}},"name":"stdout"});

    m.initVar("stderr", {"type":"declaration","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[10,34],"end":[12,6]}},"name":"stderr"});

    m.readVar("ee", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[11,9],"end":[11,11]}},"name":"ee"});

    m.readProperty("obj5", "emit", {"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[11,9],"end":[11,16]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[11,17],"end":[11,21]}}});

    m.readVar("stdout", {"type":"variable","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[11,23],"end":[11,29]}},"name":"stdout"});

    m.functionCall("emit", 1, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[11,9],"end":[11,30]}},"name":"emit"});

    m.functionReturn("emit", {"type":"functionReturn","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[11,9],"end":[11,30]}},"name":"emit"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/fish/src/fish.js","pos":{"start":[11,9],"end":[11,30]}}});

    m.endExecution();

};

