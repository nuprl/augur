exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[1,1],"end":[25,3]}}});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[1,1],"end":[25,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"dummySource"});

    m.initVar("DUMMY_FILE", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"DUMMY_FILE"});

    m.initVar("command", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"command"});

    m.initVar("uptime", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"uptime"});

    m.initVar("time", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[1,2],"end":[25,2]}},"name":"time"});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[11,1],"end":[13,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[11,1],"end":[13,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[6,18],"end":[6,27]}}});

    m.writeVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[6,5],"end":[6,26]}},"name":"DUMMY_FILE"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[6,5],"end":[6,26]}}});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[8,15],"end":[8,25]}}});

    m.readVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[8,28],"end":[8,38]}},"name":"DUMMY_FILE"});

    m.binaryOp({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[8,15],"end":[8,38]}}});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[8,41],"end":[8,44]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[8,15],"end":[8,44]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[8,5],"end":[8,43]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[8,5],"end":[8,43]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[15,1],"end":[15,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[15,13],"end":[15,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"os-uptime.js","pos":{"start":[15,1],"end":[15,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"os-uptime.js","pos":{"start":[11,1],"end":[13,2]}},"name":"val"});

    m.readVar("command", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[12,5],"end":[12,12]}},"name":"command"});

    m.readVar("val", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[12,16],"end":[12,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[12,5],"end":[12,12]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[12,5],"end":[12,19]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[12,5],"end":[12,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"os-uptime.js","pos":{"start":[15,1],"end":[15,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[15,1],"end":[15,17]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[17,14],"end":[17,21]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[17,22],"end":[17,33]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"os-uptime.js","pos":{"start":[17,14],"end":[17,34]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,1],"end":[13,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,1],"end":[13,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,2],"end":[13,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,2],"end":[13,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,2],"end":[13,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__dirname"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[3,5],"end":[3,12]}},"name":"process"});

    m.readProperty("obj0", "platform", {"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[3,5],"end":[3,21]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[3,5],"end":[3,34]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[3,5],"end":[3,34]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[5,12],"end":[5,19]}},"name":"process"});

    m.readProperty("obj0", "platform", {"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[5,12],"end":[5,28]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[5,12],"end":[5,40]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[5,12],"end":[5,40]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[6,3],"end":[6,9]}},"name":"module"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[6,20],"end":[6,27]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[6,28],"end":[6,37]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[6,20],"end":[6,38]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,1],"end":[10,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,1],"end":[10,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,2],"end":[10,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,2],"end":[10,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,2],"end":[10,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,2],"end":[10,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,2],"end":[10,2]}},"name":"__dirname"});

    m.initVar("execSync", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,2],"end":[10,2]}},"name":"execSync"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[2,18],"end":[2,25]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[2,26],"end":[2,41]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[2,18],"end":[2,42]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[2,18],"end":[2,42]}},"name":"require"});

    m.readProperty("obj1", "execSync", {"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[2,18],"end":[2,51]}}});

    m.writeVar("execSync", {"type":"variable","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[2,7],"end":[2,51]}},"name":"execSync"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[2,7],"end":[2,51]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[4,1],"end":[4,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[4,18],"end":[8,2]}}});

    m.writeProperty("obj2", "exports", {"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[4,1],"end":[8,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[4,1],"end":[8,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[6,20],"end":[6,38]}},"name":"require"});

    m.writeProperty("obj3", "exports", {"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[6,3],"end":[6,38]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[6,3],"end":[6,38]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[5,8],"end":[11,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/index.js","pos":{"start":[3,1],"end":[11,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"os-uptime.js","pos":{"start":[17,14],"end":[17,34]}},"name":"require"});

    m.writeVar("uptime", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[17,5],"end":[17,34]}},"name":"uptime"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[17,5],"end":[17,34]}}});

    m.readVar("uptime", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[19,12],"end":[19,18]}},"name":"uptime"});

    m.readVar("command", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[19,19],"end":[19,26]}},"name":"command"});

    m.functionCall("", 0, 1, {"type":"functionInvocation","location":{"fileName":"os-uptime.js","pos":{"start":[19,12],"end":[19,27]}}});

    m.initVar("output", {"type":"declaration","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[4,18],"end":[8,2]}},"name":"output"});

    m.readVar("execSync", {"type":"variable","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,18],"end":[5,26]}},"name":"execSync"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,27],"end":[5,38]}}});

    m.functionCall("execSync", 2, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,18],"end":[5,39]}},"name":"execSync"});

    m.functionReturn("execSync", {"type":"functionReturn","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,18],"end":[5,39]}},"name":"execSync"});

    m.readProperty("obj4", "toString", {"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,18],"end":[5,48]}}});

    m.functionCall("toString", 3, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,18],"end":[5,50]}},"name":"toString"});

    m.functionReturn("toString", {"type":"functionReturn","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,18],"end":[5,50]}},"name":"toString"});

    m.writeVar("output", {"type":"variable","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,9],"end":[5,50]}},"name":"output"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[5,9],"end":[5,50]}}});

    m.readVar("Date", {"type":"variable","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[7,14],"end":[7,18]}},"name":"Date"});

    m.readVar("output", {"type":"variable","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[7,19],"end":[7,25]}},"name":"output"});

    m.functionCall("Date", 7, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[7,10],"end":[7,26]}},"name":"Date"});

    m.functionReturn("Date", {"type":"functionReturn","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[7,10],"end":[7,26]}},"name":"Date"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/os-uptime/linux.js","pos":{"start":[7,3],"end":[7,27]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"os-uptime.js","pos":{"start":[19,12],"end":[19,27]}}});

    m.readProperty("obj5", "toLocaleString", {"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[19,12],"end":[19,42]}}});

    m.functionCall("toLocaleString", 0, 0, {"type":"functionInvocation","location":{"fileName":"os-uptime.js","pos":{"start":[19,12],"end":[19,44]}},"name":"toLocaleString"});

    m.functionReturn("toLocaleString", {"type":"functionReturn","location":{"fileName":"os-uptime.js","pos":{"start":[19,12],"end":[19,44]}},"name":"toLocaleString"});

    m.writeVar("time", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[19,5],"end":[19,44]}},"name":"time"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[19,5],"end":[19,44]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[20,1],"end":[20,8]}},"name":"console"});

    m.readProperty("obj6", "log", {"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[20,1],"end":[20,12]}}});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[20,13],"end":[20,40]}}});

    m.readVar("time", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[20,42],"end":[20,46]}},"name":"time"});

    m.functionCall("bound log", 0, 2, {"type":"functionInvocation","location":{"fileName":"os-uptime.js","pos":{"start":[20,1],"end":[20,47]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"os-uptime.js","pos":{"start":[20,1],"end":[20,47]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[20,1],"end":[20,47]}}});

    m.readVar("done", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[21,1],"end":[21,5]}},"name":"done"});

    m.functionCall("done", 0, 0, {"type":"functionInvocation","location":{"fileName":"os-uptime.js","pos":{"start":[21,1],"end":[21,7]}},"name":"done"});

    m.readVar("console", {"type":"variable","location":{"fileName":"os-uptime.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"});

    m.readProperty("obj6", "log", {"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[2,5],"end":[2,16]}}});

    m.literal({"type":"literal","location":{"fileName":"os-uptime.js","pos":{"start":[2,17],"end":[2,24]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"os-uptime.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"os-uptime.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[2,5],"end":[2,25]}}});

    m.functionReturn("done", {"type":"functionReturn","location":{"fileName":"os-uptime.js","pos":{"start":[21,1],"end":[21,7]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"os-uptime.js","pos":{"start":[21,1],"end":[21,7]}}});

    m.endExecution();

};

