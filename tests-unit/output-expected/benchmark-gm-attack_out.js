exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[1,1],"end":[25,3]}}});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[1,1],"end":[25,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"dummySource"});

    m.initVar("DUMMY_FILE", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"DUMMY_FILE"});

    m.initVar("payload", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"payload"});

    m.initVar("gm", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[1,2],"end":[25,2]}},"name":"gm"});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[10,1],"end":[12,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[10,1],"end":[12,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[6,18],"end":[6,27]}}});

    m.writeVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[6,5],"end":[6,26]}},"name":"DUMMY_FILE"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[6,5],"end":[6,26]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[8,15],"end":[8,25]}}});

    m.readVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[8,28],"end":[8,38]}},"name":"DUMMY_FILE"});

    m.binaryOp({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[8,15],"end":[8,38]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[8,41],"end":[8,44]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[8,15],"end":[8,44]}}});

    m.writeVar("payload", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[8,5],"end":[8,43]}},"name":"payload"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[8,5],"end":[8,43]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[14,1],"end":[14,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[14,13],"end":[14,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"gm-attack.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"gm-attack.js","pos":{"start":[10,1],"end":[12,2]}},"name":"val"});

    m.readVar("payload", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[11,5],"end":[11,12]}},"name":"payload"});

    m.readVar("val", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[11,16],"end":[11,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[11,5],"end":[11,12]}}});

    m.writeVar("payload", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[11,5],"end":[11,19]}},"name":"payload"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[11,5],"end":[11,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"gm-attack.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[14,1],"end":[14,17]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[16,10],"end":[16,17]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[16,18],"end":[16,22]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"gm-attack.js","pos":{"start":[16,10],"end":[16,23]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,1],"end":[134,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,1],"end":[134,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"__dirname"});

    m.initVar("gm", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"gm"});

    m.initVar("Stream", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"Stream"});

    m.initVar("EventEmitter", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"EventEmitter"});

    m.initVar("util", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"util"});

    m.initVar("parent", {"type":"declaration","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[1,2],"end":[134,2]}},"name":"parent"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[20,1],"end":[82,2]}}});

    m.writeVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[20,1],"end":[82,2]}},"name":"gm"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[6,14],"end":[6,21]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[6,22],"end":[6,30]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[6,14],"end":[6,31]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[6,14],"end":[6,31]}},"name":"require"});

    m.readProperty("obj0", "Stream", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[6,14],"end":[6,38]}}});

    m.writeVar("Stream", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[6,5],"end":[6,38]}},"name":"Stream"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[6,5],"end":[6,38]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[7,20],"end":[7,27]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[7,28],"end":[7,36]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[7,20],"end":[7,37]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[7,20],"end":[7,37]}},"name":"require"});

    m.readProperty("obj1", "EventEmitter", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[7,20],"end":[7,50]}}});

    m.writeVar("EventEmitter", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[7,5],"end":[7,50]}},"name":"EventEmitter"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[7,5],"end":[7,50]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[8,12],"end":[8,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[8,20],"end":[8,26]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[8,12],"end":[8,27]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[8,12],"end":[8,27]}},"name":"require"});

    m.writeVar("util", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[8,5],"end":[8,27]}},"name":"util"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[8,5],"end":[8,27]}}});

    m.readVar("util", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[10,1],"end":[10,5]}},"name":"util"});

    m.readProperty("obj2", "inherits", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[10,1],"end":[10,14]}}});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[10,15],"end":[10,17]}},"name":"gm"});

    m.readVar("EventEmitter", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[10,19],"end":[10,31]}},"name":"EventEmitter"});

    m.functionCall("inherits", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[10,1],"end":[10,32]}},"name":"inherits"});

    m.functionReturn("inherits", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[10,1],"end":[10,32]}},"name":"inherits"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[10,1],"end":[10,32]}}});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[91,14],"end":[91,16]}},"name":"gm"});

    m.writeVar("parent", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[91,5],"end":[91,16]}},"name":"parent"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[91,5],"end":[91,16]}}});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[92,1],"end":[92,3]}},"name":"gm"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[92,15],"end":[106,2]}}});

    m.writeProperty("obj3", "subClass", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[92,1],"end":[106,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[92,1],"end":[106,2]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,1],"end":[112,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,9],"end":[112,24]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,1],"end":[112,25]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[1,1],"end":[19,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[1,1],"end":[19,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[1,2],"end":[19,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[1,2],"end":[19,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[1,2],"end":[19,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[1,2],"end":[19,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[1,2],"end":[19,2]}},"name":"__dirname"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[2,1],"end":[2,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[2,28],"end":[17,2]}}});

    m.writeVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[2,18],"end":[17,2]}},"name":"exports"});

    m.writeProperty("obj4", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[2,1],"end":[17,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[2,1],"end":[17,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,1],"end":[112,25]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,26],"end":[112,28]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,26],"end":[112,38]}}});

    m.functionCall("exports", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,1],"end":[112,39]}},"name":"exports"});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[2,28],"end":[17,2]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[3,3],"end":[3,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[3,20],"end":[3,22]}}});

    m.writeProperty("obj5", "_options", {"type":"expr","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[3,3],"end":[3,22]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[3,3],"end":[3,22]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[5,3],"end":[5,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[5,19],"end":[16,4]}}});

    m.writeProperty("obj5", "options", {"type":"expr","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[5,3],"end":[16,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/options.js","pos":{"start":[5,3],"end":[16,4]}}});

    m.functionReturn("exports", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,1],"end":[112,39]}},"name":"exports"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[112,1],"end":[112,39]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,1],"end":[113,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,9],"end":[113,24]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,1],"end":[113,25]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[1,1],"end":[334,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[1,1],"end":[334,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[1,2],"end":[334,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[1,2],"end":[334,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[1,2],"end":[334,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[1,2],"end":[334,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[1,2],"end":[334,2]}},"name":"__dirname"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,1],"end":[5,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}}});

    m.writeProperty("obj6", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,1],"end":[332,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,1],"end":[332,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,1],"end":[113,25]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,26],"end":[113,28]}},"name":"gm"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,1],"end":[113,29]}}});

    m.initVar("gm", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"gm"});

    m.initVar("identifyPattern", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"identifyPattern"});

    m.initVar("parse", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"parse"});

    m.initVar("makeArgs", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"makeArgs"});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"proto"});

    m.initVar("IDENTIFYING", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"IDENTIFYING"});

    m.initVar("IDENTIFIED", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"IDENTIFIED"});

    m.initVar("map", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"map"});

    m.initVar("orientations", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"orientations"});

    m.initVar("helper", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[5,18],"end":[332,2]}},"name":"helper"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[156,3],"end":[171,4]}}});

    m.writeVar("identifyPattern", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[156,3],"end":[171,4]}},"name":"identifyPattern"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[182,3],"end":[245,4]}}});

    m.writeVar("parse", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[182,3],"end":[245,4]}},"name":"parse"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[255,3],"end":[271,4]}}});

    m.writeVar("makeArgs", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[255,3],"end":[271,4]}},"name":"makeArgs"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[7,15],"end":[7,17]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[7,15],"end":[7,27]}}});

    m.writeVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[7,7],"end":[7,27]}},"name":"proto"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[7,7],"end":[7,27]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[13,23],"end":[13,24]}}});

    m.writeVar("IDENTIFYING", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[13,9],"end":[13,24]}},"name":"IDENTIFYING"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[13,9],"end":[13,24]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[14,22],"end":[14,23]}}});

    m.writeVar("IDENTIFIED", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[14,9],"end":[14,23]}},"name":"IDENTIFIED"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[14,9],"end":[14,23]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[25,24],"end":[25,32]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[25,42],"end":[25,47]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[25,57],"end":[25,65]}}});

    m.writeProperty("obj7", "helper", {});

    m.writeProperty("obj7", "format", {});

    m.writeProperty("obj7", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[25,17],"end":[25,67]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[26,24],"end":[26,31]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[26,42],"end":[26,46]}}});

    m.writeProperty("obj8", "format", {});

    m.writeProperty("obj8", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[26,17],"end":[26,48]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[27,26],"end":[27,36]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[27,46],"end":[27,50]}}});

    m.writeProperty("obj9", "format", {});

    m.writeProperty("obj9", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[27,19],"end":[27,52]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[28,23],"end":[28,29]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[28,39],"end":[28,47]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[28,57],"end":[28,67]}}});

    m.writeProperty("obj10", "helper", {});

    m.writeProperty("obj10", "format", {});

    m.writeProperty("obj10", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[28,16],"end":[28,69]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[29,23],"end":[29,30]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[29,40],"end":[29,44]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[29,55],"end":[29,63]}}});

    m.writeProperty("obj11", "helper", {});

    m.writeProperty("obj11", "format", {});

    m.writeProperty("obj11", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[29,16],"end":[29,65]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[30,29],"end":[30,42]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[30,52],"end":[30,73]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[30,83],"end":[30,96]}}});

    m.writeProperty("obj12", "helper", {});

    m.writeProperty("obj12", "format", {});

    m.writeProperty("obj12", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[30,22],"end":[30,98]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[31,23],"end":[31,35]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[31,46],"end":[31,50]}}});

    m.writeProperty("obj13", "verbose", {});

    m.writeProperty("obj13", "key", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[31,16],"end":[31,52]}}});

    m.writeProperty("obj14", "res", {});

    m.writeProperty("obj14", "orientation", {});

    m.writeProperty("obj14", "color", {});

    m.writeProperty("obj14", "size", {});

    m.writeProperty("obj14", "filesize", {});

    m.writeProperty("obj14", "depth", {});

    m.writeProperty("obj14", "format", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[24,13],"end":[32,4]}}});

    m.writeVar("map", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[24,7],"end":[32,4]}},"name":"map"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[24,7],"end":[32,4]}}});

    m.readVar("Object", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[38,9]}},"name":"Object"});

    m.readProperty("obj15", "keys", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[38,14]}}});

    m.readVar("map", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,15],"end":[38,18]}},"name":"map"});

    m.functionCall("keys", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[38,19]}},"name":"keys"});

    m.functionReturn("keys", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[38,19]}},"name":"keys"});

    m.readProperty("obj16", "forEach", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[38,27]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}}});

    m.functionCall("forEach", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[87,5]}},"name":"forEach"});

    m.initVar("getter", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}},"name":"getter"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[39,10]}},"name":"proto"});

    m.readVar("getter", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,11],"end":[39,17]}},"name":"getter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,21],"end":[86,6]}}});

    m.writeProperty("obj5", "format", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.initVar("getter", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}},"name":"getter"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[39,10]}},"name":"proto"});

    m.readVar("getter", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,11],"end":[39,17]}},"name":"getter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,21],"end":[86,6]}}});

    m.writeProperty("obj5", "depth", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.initVar("getter", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}},"name":"getter"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[39,10]}},"name":"proto"});

    m.readVar("getter", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,11],"end":[39,17]}},"name":"getter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,21],"end":[86,6]}}});

    m.writeProperty("obj5", "filesize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.initVar("getter", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}},"name":"getter"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[39,10]}},"name":"proto"});

    m.readVar("getter", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,11],"end":[39,17]}},"name":"getter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,21],"end":[86,6]}}});

    m.writeProperty("obj5", "size", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.initVar("getter", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}},"name":"getter"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[39,10]}},"name":"proto"});

    m.readVar("getter", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,11],"end":[39,17]}},"name":"getter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,21],"end":[86,6]}}});

    m.writeProperty("obj5", "color", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.initVar("getter", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}},"name":"getter"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[39,10]}},"name":"proto"});

    m.readVar("getter", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,11],"end":[39,17]}},"name":"getter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,21],"end":[86,6]}}});

    m.writeProperty("obj5", "orientation", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.initVar("getter", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,28],"end":[87,4]}},"name":"getter"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[39,10]}},"name":"proto"});

    m.readVar("getter", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,11],"end":[39,17]}},"name":"getter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,21],"end":[86,6]}}});

    m.writeProperty("obj5", "res", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[39,5],"end":[86,6]}}});

    m.functionReturn("forEach", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[87,5]}},"name":"forEach"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[38,3],"end":[87,5]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[97,3],"end":[97,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[97,20],"end":[147,4]}}});

    m.writeProperty("obj5", "identify", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[97,3],"end":[147,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[97,3],"end":[147,4]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[278,12],"end":[278,21]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[279,12],"end":[279,22]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[280,12],"end":[280,25]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[281,12],"end":[281,24]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[282,12],"end":[282,21]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[283,12],"end":[283,22]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[284,12],"end":[284,25]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[285,12],"end":[285,24]}}});

    m.writeProperty("obj17", "8", {});

    m.writeProperty("obj17", "7", {});

    m.writeProperty("obj17", "6", {});

    m.writeProperty("obj17", "5", {});

    m.writeProperty("obj17", "4", {});

    m.writeProperty("obj17", "3", {});

    m.writeProperty("obj17", "2", {});

    m.writeProperty("obj17", "1", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[277,22],"end":[286,4]}}});

    m.writeVar("orientations", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[277,7],"end":[286,4]}},"name":"orientations"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[277,7],"end":[286,4]}}});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[292,16],"end":[292,18]}},"name":"gm"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[292,37],"end":[292,39]}}});

    m.writeProperty("obj3", "identifyHelpers", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[292,16],"end":[292,39]}}});

    m.writeVar("helper", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[292,7],"end":[292,39]}},"name":"helper"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[292,7],"end":[292,39]}}});

    m.readVar("helper", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[294,3],"end":[294,9]}},"name":"helper"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[294,21],"end":[309,4]}}});

    m.writeProperty("obj18", "Geometry", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[294,3],"end":[309,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[294,3],"end":[309,4]}}});

    m.readVar("helper", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[311,3],"end":[311,9]}},"name":"helper"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[311,19],"end":[313,4]}}});

    m.writeProperty("obj18", "Format", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[311,3],"end":[313,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[311,3],"end":[313,4]}}});

    m.readVar("helper", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[315,3],"end":[315,9]}},"name":"helper"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[315,18],"end":[317,4]}}});

    m.writeProperty("obj18", "Depth", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[315,3],"end":[317,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[315,3],"end":[317,4]}}});

    m.readVar("helper", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[319,3],"end":[319,9]}},"name":"helper"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[319,19],"end":[321,4]}}});

    m.writeProperty("obj18", "Colors", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[319,3],"end":[321,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[319,3],"end":[321,4]}}});

    m.readVar("helper", {"type":"variable","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[323,3],"end":[323,9]}},"name":"helper"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[323,24],"end":[331,4]}}});

    m.writeProperty("obj18", "Orientation", {"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[323,3],"end":[331,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/getters.js","pos":{"start":[323,3],"end":[331,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,1],"end":[113,29]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[113,1],"end":[113,29]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,1],"end":[114,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,9],"end":[114,21]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,1],"end":[114,22]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,1],"end":[1107,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,1],"end":[1107,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"__dirname"});

    m.initVar("comment", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"comment"});

    m.initVar("argsToArray", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"argsToArray"});

    m.initVar("isUtil", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1,2],"end":[1107,2]}},"name":"isUtil"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1095,1],"end":[1105,2]}}});

    m.writeVar("comment", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1095,1],"end":[1105,2]}},"name":"comment"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[5,19],"end":[5,26]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[5,27],"end":[5,36]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[5,19],"end":[5,37]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[1,1],"end":[44,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[1,1],"end":[44,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[1,2],"end":[44,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[1,2],"end":[44,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[1,2],"end":[44,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[1,2],"end":[44,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[1,2],"end":[44,2]}},"name":"__dirname"});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[10,1],"end":[10,8]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[10,18],"end":[12,2]}}});

    m.writeProperty("obj19", "escape", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[10,1],"end":[12,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[10,1],"end":[12,2]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[14,1],"end":[14,8]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[14,20],"end":[16,2]}}});

    m.writeProperty("obj19", "unescape", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[14,1],"end":[16,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[14,1],"end":[16,2]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[18,1],"end":[18,8]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[18,23],"end":[27,2]}}});

    m.writeProperty("obj19", "argsToArray", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[18,1],"end":[27,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[18,1],"end":[27,2]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[29,1],"end":[29,8]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[29,18],"end":[43,2]}}});

    m.writeProperty("obj19", "isUtil", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[29,1],"end":[43,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[29,1],"end":[43,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[5,19],"end":[5,37]}},"name":"require"});

    m.readProperty("obj19", "argsToArray", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[5,19],"end":[5,49]}}});

    m.writeVar("argsToArray", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[5,5],"end":[5,49]}},"name":"argsToArray"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[5,5],"end":[5,49]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[6,14],"end":[6,21]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[6,22],"end":[6,31]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[6,14],"end":[6,32]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[6,14],"end":[6,32]}},"name":"require"});

    m.readProperty("obj19", "isUtil", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[6,14],"end":[6,39]}}});

    m.writeVar("isUtil", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[6,5],"end":[6,39]}},"name":"isUtil"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[6,5],"end":[6,39]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[11,1],"end":[11,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[11,18],"end":[1089,2]}}});

    m.writeProperty("obj20", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[11,1],"end":[1089,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[11,1],"end":[1089,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,1],"end":[114,22]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,23],"end":[114,25]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,23],"end":[114,35]}}});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,1],"end":[114,36]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[11,18],"end":[1089,2]}},"name":"proto"});

    m.initVar("limits", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[11,18],"end":[1089,2]}},"name":"limits"});

    m.initVar("noises", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[11,18],"end":[1089,2]}},"name":"noises"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[14,3],"end":[14,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[14,23],"end":[18,4]}}});

    m.writeProperty("obj5", "selectFrame", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[14,3],"end":[18,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[14,3],"end":[18,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[21,3],"end":[21,8]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[21,19],"end":[21,24]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[21,38],"end":[24,4]}}});

    m.writeProperty("obj5", "subCommand", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[21,19],"end":[24,4]}}});

    m.writeProperty("obj5", "command", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[21,3],"end":[24,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[21,3],"end":[24,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[27,3],"end":[27,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[27,18],"end":[29,4]}}});

    m.writeProperty("obj5", "adjoin", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[27,3],"end":[29,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[27,3],"end":[29,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[32,3],"end":[32,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[32,18],"end":[34,4]}}});

    m.writeProperty("obj5", "affine", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[32,3],"end":[34,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[32,3],"end":[34,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[36,3],"end":[36,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[36,17],"end":[39,4]}}});

    m.writeProperty("obj5", "alpha", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[36,3],"end":[39,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[36,3],"end":[39,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[67,3],"end":[67,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[67,18],"end":[101,4]}}});

    m.writeProperty("obj5", "append", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[67,3],"end":[101,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[67,3],"end":[101,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[104,3],"end":[104,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[104,24],"end":[106,4]}}});

    m.writeProperty("obj5", "authenticate", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[104,3],"end":[106,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[104,3],"end":[106,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[109,3],"end":[109,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[109,19],"end":[111,4]}}});

    m.writeProperty("obj5", "average", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[109,3],"end":[111,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[109,3],"end":[111,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[114,3],"end":[114,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[114,20],"end":[116,4]}}});

    m.writeProperty("obj5", "backdrop", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[114,3],"end":[116,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[114,3],"end":[116,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[119,3],"end":[119,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[119,26],"end":[121,4]}}});

    m.writeProperty("obj5", "blackThreshold", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[119,3],"end":[121,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[119,3],"end":[121,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[124,3],"end":[124,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[124,23],"end":[126,4]}}});

    m.writeProperty("obj5", "bluePrimary", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[124,3],"end":[126,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[124,3],"end":[126,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[129,3],"end":[129,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[129,18],"end":[131,4]}}});

    m.writeProperty("obj5", "border", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[129,3],"end":[131,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[129,3],"end":[131,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[134,3],"end":[134,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[134,23],"end":[136,4]}}});

    m.writeProperty("obj5", "borderColor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[134,3],"end":[136,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[134,3],"end":[136,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[139,3],"end":[139,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[139,15],"end":[141,4]}}});

    m.writeProperty("obj5", "box", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[139,3],"end":[141,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[139,3],"end":[141,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[144,3],"end":[144,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[144,19],"end":[146,4]}}});

    m.writeProperty("obj5", "channel", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[144,3],"end":[146,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[144,3],"end":[146,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[149,3],"end":[149,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[149,16],"end":[151,4]}}});

    m.writeProperty("obj5", "chop", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[149,3],"end":[151,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[149,3],"end":[151,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[154,3],"end":[154,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[154,16],"end":[156,4]}}});

    m.writeProperty("obj5", "clip", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[154,3],"end":[156,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[154,3],"end":[156,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[159,3],"end":[159,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[159,20],"end":[161,4]}}});

    m.writeProperty("obj5", "coalesce", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[159,3],"end":[161,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[159,3],"end":[161,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[164,3],"end":[164,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[164,20],"end":[166,4]}}});

    m.writeProperty("obj5", "colorize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[164,3],"end":[166,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[164,3],"end":[166,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[169,3],"end":[169,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[169,20],"end":[171,4]}}});

    m.writeProperty("obj5", "colorMap", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[169,3],"end":[171,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[169,3],"end":[171,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[174,3],"end":[174,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[174,19],"end":[176,4]}}});

    m.writeProperty("obj5", "compose", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[174,3],"end":[176,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[174,3],"end":[176,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[179,3],"end":[179,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[179,20],"end":[181,4]}}});

    m.writeProperty("obj5", "compress", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[179,3],"end":[181,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[179,3],"end":[181,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[184,3],"end":[184,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[184,20],"end":[186,4]}}});

    m.writeProperty("obj5", "convolve", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[184,3],"end":[186,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[184,3],"end":[186,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[189,3],"end":[189,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[189,29],"end":[191,4]}}});

    m.writeProperty("obj5", "createDirectories", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[189,3],"end":[191,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[189,3],"end":[191,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[194,3],"end":[194,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[194,23],"end":[196,4]}}});

    m.writeProperty("obj5", "deconstruct", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[194,3],"end":[196,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[194,3],"end":[196,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[199,3],"end":[199,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[199,18],"end":[201,4]}}});

    m.writeProperty("obj5", "define", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[199,3],"end":[201,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[199,3],"end":[201,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[204,3],"end":[204,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[204,17],"end":[206,4]}}});

    m.writeProperty("obj5", "delay", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[204,3],"end":[206,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[204,3],"end":[206,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[209,3],"end":[209,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[209,20],"end":[211,4]}}});

    m.writeProperty("obj5", "displace", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[209,3],"end":[211,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[209,3],"end":[211,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[214,3],"end":[214,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[214,19],"end":[216,4]}}});

    m.writeProperty("obj5", "display", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[214,3],"end":[216,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[214,3],"end":[216,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[219,3],"end":[219,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[219,19],"end":[221,4]}}});

    m.writeProperty("obj5", "dispose", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[219,3],"end":[221,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[219,3],"end":[221,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[224,3],"end":[224,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[224,20],"end":[226,4]}}});

    m.writeProperty("obj5", "dissolve", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[224,3],"end":[226,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[224,3],"end":[226,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[229,3],"end":[229,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[229,20],"end":[231,4]}}});

    m.writeProperty("obj5", "encoding", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[229,3],"end":[231,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[229,3],"end":[231,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[234,3],"end":[234,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[234,18],"end":[236,4]}}});

    m.writeProperty("obj5", "endian", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[234,3],"end":[236,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[234,3],"end":[236,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[239,3],"end":[239,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[239,16],"end":[241,4]}}});

    m.writeProperty("obj5", "file", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[239,3],"end":[241,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[239,3],"end":[241,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[244,3],"end":[244,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[244,19],"end":[246,4]}}});

    m.writeProperty("obj5", "flatten", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[244,3],"end":[246,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[244,3],"end":[246,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[249,3],"end":[249,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[249,22],"end":[251,4]}}});

    m.writeProperty("obj5", "foreground", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[249,3],"end":[251,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[249,3],"end":[251,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[254,3],"end":[254,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[254,17],"end":[257,4]}}});

    m.writeProperty("obj5", "frame", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[254,3],"end":[257,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[254,3],"end":[257,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[260,3],"end":[260,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[260,16],"end":[262,4]}}});

    m.writeProperty("obj5", "fuzz", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[260,3],"end":[262,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[260,3],"end":[262,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[265,3],"end":[265,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[265,20],"end":[267,4]}}});

    m.writeProperty("obj5", "gaussian", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[265,3],"end":[267,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[265,3],"end":[267,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[270,3],"end":[270,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[270,20],"end":[277,4]}}});

    m.writeProperty("obj5", "geometry", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[270,3],"end":[277,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[270,3],"end":[277,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[280,3],"end":[280,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[280,24],"end":[282,4]}}});

    m.writeProperty("obj5", "greenPrimary", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[280,3],"end":[282,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[280,3],"end":[282,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[285,3],"end":[285,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[285,26],"end":[287,4]}}});

    m.writeProperty("obj5", "highlightColor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[285,3],"end":[287,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[285,3],"end":[287,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[290,3],"end":[290,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[290,26],"end":[292,4]}}});

    m.writeProperty("obj5", "highlightStyle", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[290,3],"end":[292,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[290,3],"end":[292,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[295,3],"end":[295,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[295,24],"end":[297,4]}}});

    m.writeProperty("obj5", "iconGeometry", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[295,3],"end":[297,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[295,3],"end":[297,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[300,3],"end":[300,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[300,18],"end":[302,4]}}});

    m.writeProperty("obj5", "intent", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[300,3],"end":[302,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[300,3],"end":[302,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[305,3],"end":[305,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[305,15],"end":[307,4]}}});

    m.writeProperty("obj5", "lat", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[305,3],"end":[307,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[305,3],"end":[307,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[310,3],"end":[310,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[310,17],"end":[312,4]}}});

    m.writeProperty("obj5", "level", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[310,3],"end":[312,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[310,3],"end":[312,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[315,3],"end":[315,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[315,16],"end":[317,4]}}});

    m.writeProperty("obj5", "list", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[315,3],"end":[317,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[315,3],"end":[317,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[320,3],"end":[320,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[320,15],"end":[322,4]}}});

    m.writeProperty("obj5", "log", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[320,3],"end":[322,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[320,3],"end":[322,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[325,3],"end":[325,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[325,16],"end":[327,4]}}});

    m.writeProperty("obj5", "loop", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[325,3],"end":[327,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[325,3],"end":[327,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[330,3],"end":[330,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[330,15],"end":[332,4]}}});

    m.writeProperty("obj5", "map", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[330,3],"end":[332,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[330,3],"end":[332,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[335,3],"end":[335,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[335,16],"end":[337,4]}}});

    m.writeProperty("obj5", "mask", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[335,3],"end":[337,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[335,3],"end":[337,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[340,3],"end":[340,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[340,17],"end":[342,4]}}});

    m.writeProperty("obj5", "matte", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[340,3],"end":[342,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[340,3],"end":[342,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[345,3],"end":[345,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[345,22],"end":[347,4]}}});

    m.writeProperty("obj5", "matteColor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[345,3],"end":[347,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[345,3],"end":[347,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[350,3],"end":[350,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[350,24],"end":[352,4]}}});

    m.writeProperty("obj5", "maximumError", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[350,3],"end":[352,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[350,3],"end":[352,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[355,3],"end":[355,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[355,16],"end":[357,4]}}});

    m.writeProperty("obj5", "mode", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[355,3],"end":[357,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[355,3],"end":[357,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[360,3],"end":[360,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[360,19],"end":[362,4]}}});

    m.writeProperty("obj5", "monitor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[360,3],"end":[362,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[360,3],"end":[362,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[365,3],"end":[365,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[365,18],"end":[367,4]}}});

    m.writeProperty("obj5", "mosaic", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[365,3],"end":[367,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[365,3],"end":[367,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[370,3],"end":[370,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[370,22],"end":[375,4]}}});

    m.writeProperty("obj5", "motionBlur", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[370,3],"end":[375,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[370,3],"end":[375,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[378,3],"end":[378,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[378,16],"end":[380,4]}}});

    m.writeProperty("obj5", "name", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[378,3],"end":[380,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[378,3],"end":[380,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[383,3],"end":[383,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[383,16],"end":[385,4]}}});

    m.writeProperty("obj5", "noop", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[383,3],"end":[385,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[383,3],"end":[385,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[388,3],"end":[388,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[388,21],"end":[390,4]}}});

    m.writeProperty("obj5", "normalize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[388,3],"end":[390,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[388,3],"end":[390,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[393,3],"end":[393,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[393,18],"end":[395,4]}}});

    m.writeProperty("obj5", "opaque", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[393,3],"end":[395,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[393,3],"end":[395,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[398,3],"end":[398,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[398,20],"end":[400,4]}}});

    m.writeProperty("obj5", "operator", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[398,3],"end":[400,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[398,3],"end":[400,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[403,3],"end":[403,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[403,25],"end":[405,4]}}});

    m.writeProperty("obj5", "orderedDither", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[403,3],"end":[405,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[403,3],"end":[405,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[408,3],"end":[408,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[408,27],"end":[410,4]}}});

    m.writeProperty("obj5", "outputDirectory", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[408,3],"end":[410,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[408,3],"end":[410,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[413,3],"end":[413,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[413,16],"end":[415,4]}}});

    m.writeProperty("obj5", "page", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[413,3],"end":[415,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[413,3],"end":[415,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[418,3],"end":[418,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[418,17],"end":[420,4]}}});

    m.writeProperty("obj5", "pause", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[418,3],"end":[420,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[418,3],"end":[420,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[423,3],"end":[423,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[423,15],"end":[425,4]}}});

    m.writeProperty("obj5", "pen", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[423,3],"end":[425,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[423,3],"end":[425,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[428,3],"end":[428,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[428,16],"end":[430,4]}}});

    m.writeProperty("obj5", "ping", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[428,3],"end":[430,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[428,3],"end":[430,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[433,3],"end":[433,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[433,21],"end":[435,4]}}});

    m.writeProperty("obj5", "pointSize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[433,3],"end":[435,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[433,3],"end":[435,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[438,3],"end":[438,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[438,19],"end":[440,4]}}});

    m.writeProperty("obj5", "preview", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[438,3],"end":[440,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[438,3],"end":[440,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[443,3],"end":[443,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[443,19],"end":[445,4]}}});

    m.writeProperty("obj5", "process", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[443,3],"end":[445,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[443,3],"end":[445,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[448,3],"end":[448,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[448,19],"end":[450,4]}}});

    m.writeProperty("obj5", "profile", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[448,3],"end":[450,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[448,3],"end":[450,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[453,3],"end":[453,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[453,20],"end":[455,4]}}});

    m.writeProperty("obj5", "progress", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[453,3],"end":[455,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[453,3],"end":[455,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[458,3],"end":[458,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[458,27],"end":[460,4]}}});

    m.writeProperty("obj5", "randomThreshold", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[458,3],"end":[460,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[458,3],"end":[460,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[463,3],"end":[463,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[463,19],"end":[465,4]}}});

    m.writeProperty("obj5", "recolor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[463,3],"end":[465,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[463,3],"end":[465,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[468,3],"end":[468,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[468,22],"end":[470,4]}}});

    m.writeProperty("obj5", "redPrimary", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[468,3],"end":[470,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[468,3],"end":[470,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[473,3],"end":[473,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[473,18],"end":[475,4]}}});

    m.writeProperty("obj5", "remote", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[473,3],"end":[475,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[473,3],"end":[475,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[478,3],"end":[478,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[478,18],"end":[480,4]}}});

    m.writeProperty("obj5", "render", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[478,3],"end":[480,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[478,3],"end":[480,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[483,3],"end":[483,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[483,18],"end":[486,4]}}});

    m.writeProperty("obj5", "repage", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[483,3],"end":[486,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[483,3],"end":[486,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[489,3],"end":[489,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[489,18],"end":[491,4]}}});

    m.writeProperty("obj5", "sample", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[489,3],"end":[491,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[489,3],"end":[491,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[494,3],"end":[494,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[494,26],"end":[496,4]}}});

    m.writeProperty("obj5", "samplingFactor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[494,3],"end":[496,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[494,3],"end":[496,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[499,3],"end":[499,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[499,17],"end":[501,4]}}});

    m.writeProperty("obj5", "scene", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[499,3],"end":[501,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[499,3],"end":[501,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[504,3],"end":[504,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[504,18],"end":[506,4]}}});

    m.writeProperty("obj5", "scenes", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[504,3],"end":[506,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[504,3],"end":[506,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[509,3],"end":[509,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[509,18],"end":[511,4]}}});

    m.writeProperty("obj5", "screen", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[509,3],"end":[511,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[509,3],"end":[511,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[514,3],"end":[514,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[514,15],"end":[516,4]}}});

    m.writeProperty("obj5", "set", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[514,3],"end":[516,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[514,3],"end":[516,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[519,3],"end":[519,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[519,19],"end":[521,4]}}});

    m.writeProperty("obj5", "segment", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[519,3],"end":[521,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[519,3],"end":[521,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[524,3],"end":[524,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[524,17],"end":[526,4]}}});

    m.writeProperty("obj5", "shade", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[524,3],"end":[526,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[524,3],"end":[526,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[529,3],"end":[529,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[529,18],"end":[531,4]}}});

    m.writeProperty("obj5", "shadow", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[529,3],"end":[531,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[529,3],"end":[531,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[534,3],"end":[534,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[534,24],"end":[536,4]}}});

    m.writeProperty("obj5", "sharedMemory", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[534,3],"end":[536,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[534,3],"end":[536,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[539,3],"end":[539,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[539,17],"end":[541,4]}}});

    m.writeProperty("obj5", "shave", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[539,3],"end":[541,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[539,3],"end":[541,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[544,3],"end":[544,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[544,17],"end":[546,4]}}});

    m.writeProperty("obj5", "shear", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[544,3],"end":[546,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[544,3],"end":[546,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[549,3],"end":[549,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[549,18],"end":[551,4]}}});

    m.writeProperty("obj5", "silent", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[549,3],"end":[551,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[549,3],"end":[551,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[554,3],"end":[554,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[554,19],"end":[559,4]}}});

    m.writeProperty("obj5", "rawSize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[554,3],"end":[559,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[554,3],"end":[559,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[562,3],"end":[562,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[562,17],"end":[564,4]}}});

    m.writeProperty("obj5", "snaps", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[562,3],"end":[564,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[562,3],"end":[564,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[567,3],"end":[567,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[567,19],"end":[569,4]}}});

    m.writeProperty("obj5", "stegano", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[567,3],"end":[569,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[567,3],"end":[569,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[572,3],"end":[572,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[572,18],"end":[574,4]}}});

    m.writeProperty("obj5", "stereo", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[572,3],"end":[574,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[572,3],"end":[574,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[577,3],"end":[577,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[577,20],"end":[579,4]}}});

    m.writeProperty("obj5", "textFont", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[577,3],"end":[579,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[577,3],"end":[579,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[582,3],"end":[582,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[582,19],"end":[584,4]}}});

    m.writeProperty("obj5", "texture", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[582,3],"end":[584,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[582,3],"end":[584,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[587,3],"end":[587,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[587,21],"end":[589,4]}}});

    m.writeProperty("obj5", "threshold", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[587,3],"end":[589,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[587,3],"end":[589,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[592,3],"end":[592,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[592,21],"end":[594,4]}}});

    m.writeProperty("obj5", "thumbnail", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[592,3],"end":[594,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[592,3],"end":[594,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[597,3],"end":[597,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[597,16],"end":[599,4]}}});

    m.writeProperty("obj5", "tile", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[597,3],"end":[599,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[597,3],"end":[599,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[602,3],"end":[602,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[602,17],"end":[604,4]}}});

    m.writeProperty("obj5", "title", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[602,3],"end":[604,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[602,3],"end":[604,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[607,3],"end":[607,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[607,21],"end":[609,4]}}});

    m.writeProperty("obj5", "transform", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[607,3],"end":[609,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[607,3],"end":[609,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[612,3],"end":[612,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[612,23],"end":[614,4]}}});

    m.writeProperty("obj5", "transparent", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[612,3],"end":[614,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[612,3],"end":[614,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[617,3],"end":[617,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[617,21],"end":[619,4]}}});

    m.writeProperty("obj5", "treeDepth", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[617,3],"end":[619,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[617,3],"end":[619,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[622,3],"end":[622,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[622,18],"end":[624,4]}}});

    m.writeProperty("obj5", "update", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[622,3],"end":[624,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[622,3],"end":[624,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[627,3],"end":[627,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[627,17],"end":[629,4]}}});

    m.writeProperty("obj5", "units", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[627,3],"end":[629,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[627,3],"end":[629,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[632,3],"end":[632,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[632,19],"end":[638,4]}}});

    m.writeProperty("obj5", "unsharp", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[632,3],"end":[638,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[632,3],"end":[638,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[641,3],"end":[641,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[641,21],"end":[643,4]}}});

    m.writeProperty("obj5", "usePixmap", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[641,3],"end":[643,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[641,3],"end":[643,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[646,3],"end":[646,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[646,16],"end":[648,4]}}});

    m.writeProperty("obj5", "view", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[646,3],"end":[648,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[646,3],"end":[648,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[651,3],"end":[651,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[651,24],"end":[653,4]}}});

    m.writeProperty("obj5", "virtualPixel", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[651,3],"end":[653,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[651,3],"end":[653,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[656,3],"end":[656,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[656,18],"end":[658,4]}}});

    m.writeProperty("obj5", "visual", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[656,3],"end":[658,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[656,3],"end":[658,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[661,3],"end":[661,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[661,21],"end":[663,4]}}});

    m.writeProperty("obj5", "watermark", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[661,3],"end":[663,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[661,3],"end":[663,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[666,3],"end":[666,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[666,16],"end":[668,4]}}});

    m.writeProperty("obj5", "wave", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[666,3],"end":[668,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[666,3],"end":[668,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[671,3],"end":[671,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[671,22],"end":[673,4]}}});

    m.writeProperty("obj5", "whitePoint", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[671,3],"end":[673,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[671,3],"end":[673,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[676,3],"end":[676,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[676,26],"end":[678,4]}}});

    m.writeProperty("obj5", "whiteThreshold", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[676,3],"end":[678,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[676,3],"end":[678,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[681,3],"end":[681,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[681,18],"end":[683,4]}}});

    m.writeProperty("obj5", "window", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[681,3],"end":[683,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[681,3],"end":[683,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[686,3],"end":[686,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[686,23],"end":[688,4]}}});

    m.writeProperty("obj5", "windowGroup", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[686,3],"end":[688,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[686,3],"end":[688,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[691,3],"end":[691,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[691,17],"end":[694,4]}}});

    m.writeProperty("obj5", "strip", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[691,3],"end":[694,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[691,3],"end":[694,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[697,3],"end":[697,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[697,21],"end":[699,4]}}});

    m.writeProperty("obj5", "interlace", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[697,3],"end":[699,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[697,3],"end":[699,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[702,3],"end":[702,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[702,21],"end":[705,4]}}});

    m.writeProperty("obj5", "setFormat", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[702,3],"end":[705,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[702,3],"end":[705,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[708,3],"end":[708,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[708,18],"end":[727,4]}}});

    m.writeProperty("obj5", "resize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[708,3],"end":[727,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[708,3],"end":[727,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[730,3],"end":[730,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[730,23],"end":[733,4]}}});

    m.writeProperty("obj5", "resizeExact", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[730,3],"end":[733,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[730,3],"end":[733,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[736,3],"end":[736,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[736,17],"end":[748,4]}}});

    m.writeProperty("obj5", "scale", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[736,3],"end":[748,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[736,3],"end":[748,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[751,3],"end":[751,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[751,18],"end":[753,4]}}});

    m.writeProperty("obj5", "filter", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[751,3],"end":[753,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[751,3],"end":[753,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[756,3],"end":[756,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[756,19],"end":[763,4]}}});

    m.writeProperty("obj5", "density", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[756,3],"end":[763,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[756,3],"end":[763,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[766,3],"end":[766,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[766,21],"end":[769,4]}}});

    m.writeProperty("obj5", "noProfile", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[766,3],"end":[769,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[766,3],"end":[769,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[772,3],"end":[772,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[772,20],"end":[774,4]}}});

    m.writeProperty("obj5", "resample", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[772,3],"end":[774,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[772,3],"end":[774,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[777,3],"end":[777,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[777,18],"end":[779,4]}}});

    m.writeProperty("obj5", "rotate", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[777,3],"end":[779,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[777,3],"end":[779,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[782,3],"end":[782,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[782,16],"end":[784,4]}}});

    m.writeProperty("obj5", "flip", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[782,3],"end":[784,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[782,3],"end":[784,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[787,3],"end":[787,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[787,16],"end":[789,4]}}});

    m.writeProperty("obj5", "flop", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[787,3],"end":[789,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[787,3],"end":[789,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[792,3],"end":[792,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[792,16],"end":[802,4]}}});

    m.writeProperty("obj5", "crop", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[792,3],"end":[802,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[792,3],"end":[802,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[805,3],"end":[805,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[805,19],"end":[807,4]}}});

    m.writeProperty("obj5", "magnify", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[805,3],"end":[807,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[805,3],"end":[807,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[810,3],"end":[810,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[810,18],"end":[812,4]}}});

    m.writeProperty("obj5", "minify", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[810,3],"end":[812,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[810,3],"end":[812,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[815,3],"end":[815,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[815,19],"end":[817,4]}}});

    m.writeProperty("obj5", "quality", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[815,3],"end":[817,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[815,3],"end":[817,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[820,3],"end":[820,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[820,16],"end":[822,4]}}});

    m.writeProperty("obj5", "blur", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[820,3],"end":[822,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[820,3],"end":[822,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[825,3],"end":[825,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[825,20],"end":[827,4]}}});

    m.writeProperty("obj5", "charcoal", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[825,3],"end":[827,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[825,3],"end":[827,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[830,3],"end":[830,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[830,20],"end":[832,4]}}});

    m.writeProperty("obj5", "modulate", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[830,3],"end":[832,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[830,3],"end":[832,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[836,3],"end":[836,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[836,21],"end":[840,4]}}});

    m.writeProperty("obj5", "antialias", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[836,3],"end":[840,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[836,3],"end":[840,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[843,3],"end":[843,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[843,20],"end":[845,4]}}});

    m.writeProperty("obj5", "bitdepth", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[843,3],"end":[845,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[843,3],"end":[845,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[848,3],"end":[848,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[848,18],"end":[850,4]}}});

    m.writeProperty("obj5", "colors", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[848,3],"end":[850,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[848,3],"end":[850,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[853,3],"end":[853,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[853,22],"end":[855,4]}}});

    m.writeProperty("obj5", "colorspace", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[853,3],"end":[855,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[853,3],"end":[855,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[858,3],"end":[858,8]}},"name":"proto"});

    m.readVar("comment", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[858,19],"end":[858,26]}},"name":"comment"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[858,27],"end":[858,37]}}});

    m.functionCall("comment", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[858,19],"end":[858,38]}},"name":"comment"});

    m.initVar("arg", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1095,1],"end":[1105,2]}},"name":"arg"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1096,10],"end":[1104,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1096,3],"end":[1104,4]}}});

    m.functionReturn("comment", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[858,19],"end":[858,38]}},"name":"comment"});

    m.writeProperty("obj5", "comment", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[858,3],"end":[858,38]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[858,3],"end":[858,38]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[861,3],"end":[861,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[861,20],"end":[873,4]}}});

    m.writeProperty("obj5", "contrast", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[861,3],"end":[873,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[861,3],"end":[873,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[876,3],"end":[876,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[876,17],"end":[878,4]}}});

    m.writeProperty("obj5", "cycle", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[876,3],"end":[878,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[876,3],"end":[878,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[881,3],"end":[881,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[881,21],"end":[883,4]}}});

    m.writeProperty("obj5", "despeckle", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[881,3],"end":[883,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[881,3],"end":[883,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[888,3],"end":[888,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[888,18],"end":[894,4]}}});

    m.writeProperty("obj5", "dither", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[888,3],"end":[894,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[888,3],"end":[894,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[897,3],"end":[897,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[897,22],"end":[899,4]}}});

    m.writeProperty("obj5", "monochrome", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[897,3],"end":[899,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[897,3],"end":[899,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[902,3],"end":[902,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[902,16],"end":[904,4]}}});

    m.writeProperty("obj5", "edge", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[902,3],"end":[904,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[902,3],"end":[904,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[907,3],"end":[907,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[907,18],"end":[909,4]}}});

    m.writeProperty("obj5", "emboss", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[907,3],"end":[909,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[907,3],"end":[909,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[912,3],"end":[912,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[912,19],"end":[914,4]}}});

    m.writeProperty("obj5", "enhance", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[912,3],"end":[914,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[912,3],"end":[914,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[917,3],"end":[917,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[917,20],"end":[919,4]}}});

    m.writeProperty("obj5", "equalize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[917,3],"end":[919,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[917,3],"end":[919,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[922,3],"end":[922,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[922,17],"end":[924,4]}}});

    m.writeProperty("obj5", "gamma", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[922,3],"end":[924,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[922,3],"end":[924,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[927,3],"end":[927,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[927,19],"end":[929,4]}}});

    m.writeProperty("obj5", "implode", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[927,3],"end":[929,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[927,3],"end":[929,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[932,3],"end":[932,8]}},"name":"proto"});

    m.readVar("comment", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[932,17],"end":[932,24]}},"name":"comment"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[932,25],"end":[932,33]}}});

    m.functionCall("comment", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[932,17],"end":[932,34]}},"name":"comment"});

    m.initVar("arg", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1095,1],"end":[1105,2]}},"name":"arg"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1096,10],"end":[1104,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1096,3],"end":[1104,4]}}});

    m.functionReturn("comment", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[932,17],"end":[932,34]}},"name":"comment"});

    m.writeProperty("obj5", "label", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[932,3],"end":[932,34]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[932,3],"end":[932,34]}}});

    m.writeProperty("obj21", "5", {});

    m.writeProperty("obj21", "4", {});

    m.writeProperty("obj21", "3", {});

    m.writeProperty("obj21", "2", {});

    m.writeProperty("obj21", "1", {});

    m.writeProperty("obj21", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[934,16],"end":[934,71]}}});

    m.writeVar("limits", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[934,7],"end":[934,71]}},"name":"limits"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[934,7],"end":[934,71]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[937,3],"end":[937,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[937,17],"end":[945,4]}}});

    m.writeProperty("obj5", "limit", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[937,3],"end":[945,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[937,3],"end":[945,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[948,3],"end":[948,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[948,18],"end":[950,4]}}});

    m.writeProperty("obj5", "median", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[948,3],"end":[950,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[948,3],"end":[950,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[953,3],"end":[953,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[953,20],"end":[956,4]}}});

    m.writeProperty("obj5", "negative", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[953,3],"end":[956,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[953,3],"end":[956,4]}}});

    m.writeProperty("obj22", "5", {});

    m.writeProperty("obj22", "4", {});

    m.writeProperty("obj22", "3", {});

    m.writeProperty("obj22", "2", {});

    m.writeProperty("obj22", "1", {});

    m.writeProperty("obj22", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[958,16],"end":[965,4]}}});

    m.writeVar("noises", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[958,7],"end":[965,4]}},"name":"noises"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[958,7],"end":[965,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[968,3],"end":[968,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[968,17],"end":[976,4]}}});

    m.writeProperty("obj5", "noise", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[968,3],"end":[976,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[968,3],"end":[976,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[979,3],"end":[979,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[979,17],"end":[981,4]}}});

    m.writeProperty("obj5", "paint", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[979,3],"end":[981,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[979,3],"end":[981,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[984,3],"end":[984,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[984,17],"end":[986,4]}}});

    m.writeProperty("obj5", "raise", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[984,3],"end":[986,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[984,3],"end":[986,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[989,3],"end":[989,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[989,17],"end":[991,4]}}});

    m.writeProperty("obj5", "lower", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[989,3],"end":[991,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[989,3],"end":[991,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[994,3],"end":[994,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[994,18],"end":[1000,4]}}});

    m.writeProperty("obj5", "region", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[994,3],"end":[1000,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[994,3],"end":[1000,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1003,3],"end":[1003,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1003,16],"end":[1007,4]}}});

    m.writeProperty("obj5", "roll", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1003,3],"end":[1007,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1003,3],"end":[1007,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1010,3],"end":[1010,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1010,19],"end":[1016,4]}}});

    m.writeProperty("obj5", "sharpen", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1010,3],"end":[1016,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1010,3],"end":[1016,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1019,3],"end":[1019,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1019,20],"end":[1021,4]}}});

    m.writeProperty("obj5", "solarize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1019,3],"end":[1021,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1019,3],"end":[1021,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1024,3],"end":[1024,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1024,18],"end":[1026,4]}}});

    m.writeProperty("obj5", "spread", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1024,3],"end":[1026,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1024,3],"end":[1026,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1029,3],"end":[1029,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1029,17],"end":[1031,4]}}});

    m.writeProperty("obj5", "swirl", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1029,3],"end":[1031,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1029,3],"end":[1031,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1034,3],"end":[1034,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1034,16],"end":[1036,4]}}});

    m.writeProperty("obj5", "type", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1034,3],"end":[1036,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1034,3],"end":[1036,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1039,3],"end":[1039,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1039,16],"end":[1041,4]}}});

    m.writeProperty("obj5", "trim", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1039,3],"end":[1041,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1039,3],"end":[1041,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1044,3],"end":[1044,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1044,18],"end":[1056,4]}}});

    m.writeProperty("obj5", "extent", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1044,3],"end":[1056,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1044,3],"end":[1056,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1060,3],"end":[1060,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1060,19],"end":[1066,4]}}});

    m.writeProperty("obj5", "gravity", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1060,3],"end":[1066,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1060,3],"end":[1066,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1068,3],"end":[1068,8]}},"name":"proto"});

    m.readProperty("obj5", "gravity", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1068,3],"end":[1068,16]}}});

    m.writeProperty("obj23", "8", {});

    m.writeProperty("obj23", "7", {});

    m.writeProperty("obj23", "6", {});

    m.writeProperty("obj23", "5", {});

    m.writeProperty("obj23", "4", {});

    m.writeProperty("obj23", "3", {});

    m.writeProperty("obj23", "2", {});

    m.writeProperty("obj23", "1", {});

    m.writeProperty("obj23", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1068,25],"end":[1078,4]}}});

    m.writeProperty("obj24", "types", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1068,3],"end":[1078,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1068,3],"end":[1078,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1081,3],"end":[1081,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1081,19],"end":[1083,4]}}});

    m.writeProperty("obj5", "flatten", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1081,3],"end":[1083,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1081,3],"end":[1083,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1086,3],"end":[1086,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1086,22],"end":[1088,4]}}});

    m.writeProperty("obj5", "background", {"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1086,3],"end":[1088,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/args.js","pos":{"start":[1086,3],"end":[1088,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,1],"end":[114,36]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[114,1],"end":[114,36]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,1],"end":[115,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,9],"end":[115,24]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,1],"end":[115,25]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,1],"end":[162,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,1],"end":[162,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,2],"end":[162,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,2],"end":[162,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,2],"end":[162,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,2],"end":[162,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,2],"end":[162,2]}},"name":"__dirname"});

    m.initVar("formatPoints", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,2],"end":[162,2]}},"name":"formatPoints"});

    m.initVar("escape", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[1,2],"end":[162,2]}},"name":"escape"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[150,1],"end":[160,2]}}});

    m.writeVar("formatPoints", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[150,1],"end":[160,2]}},"name":"formatPoints"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[6,14],"end":[6,21]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[6,22],"end":[6,31]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[6,14],"end":[6,32]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[6,14],"end":[6,32]}},"name":"require"});

    m.readProperty("obj19", "escape", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[6,14],"end":[6,39]}}});

    m.writeVar("escape", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[6,5],"end":[6,39]}},"name":"escape"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[6,5],"end":[6,39]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[12,1],"end":[12,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[12,18],"end":[148,2]}}});

    m.writeProperty("obj25", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[12,1],"end":[148,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[12,1],"end":[148,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,1],"end":[115,25]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,26],"end":[115,28]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,26],"end":[115,38]}}});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,1],"end":[115,39]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[12,18],"end":[148,2]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[15,3],"end":[15,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[15,16],"end":[17,4]}}});

    m.writeProperty("obj5", "fill", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[15,3],"end":[17,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[15,3],"end":[17,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[20,3],"end":[20,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[20,18],"end":[26,4]}}});

    m.writeProperty("obj5", "stroke", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[20,3],"end":[26,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[20,3],"end":[26,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[29,3],"end":[29,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[29,23],"end":[31,4]}}});

    m.writeProperty("obj5", "strokeWidth", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[29,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[29,3],"end":[31,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[34,3],"end":[34,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[34,16],"end":[40,4]}}});

    m.writeProperty("obj5", "font", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[34,3],"end":[40,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[34,3],"end":[40,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[43,3],"end":[43,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[43,20],"end":[45,4]}}});

    m.writeProperty("obj5", "fontSize", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[43,3],"end":[45,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[43,3],"end":[45,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[48,3],"end":[48,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[48,16],"end":[50,4]}}});

    m.writeProperty("obj5", "draw", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[48,3],"end":[50,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[48,3],"end":[50,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[53,3],"end":[53,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[53,21],"end":[55,4]}}});

    m.writeProperty("obj5", "drawPoint", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[53,3],"end":[55,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[53,3],"end":[55,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[58,3],"end":[58,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[58,20],"end":[60,4]}}});

    m.writeProperty("obj5", "drawLine", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[58,3],"end":[60,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[58,3],"end":[60,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[63,3],"end":[63,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[63,25],"end":[78,4]}}});

    m.writeProperty("obj5", "drawRectangle", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[63,3],"end":[78,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[63,3],"end":[78,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[81,3],"end":[81,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[81,19],"end":[83,4]}}});

    m.writeProperty("obj5", "drawArc", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[81,3],"end":[83,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[81,3],"end":[83,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[86,3],"end":[86,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[86,23],"end":[90,4]}}});

    m.writeProperty("obj5", "drawEllipse", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[86,3],"end":[90,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[86,3],"end":[90,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[93,3],"end":[93,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[93,22],"end":[95,4]}}});

    m.writeProperty("obj5", "drawCircle", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[93,3],"end":[95,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[93,3],"end":[95,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[98,3],"end":[98,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[98,24],"end":[100,4]}}});

    m.writeProperty("obj5", "drawPolyline", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[98,3],"end":[100,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[98,3],"end":[100,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[103,3],"end":[103,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[103,23],"end":[105,4]}}});

    m.writeProperty("obj5", "drawPolygon", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[103,3],"end":[105,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[103,3],"end":[105,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[108,3],"end":[108,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[108,22],"end":[110,4]}}});

    m.writeProperty("obj5", "drawBezier", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[108,3],"end":[110,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[108,3],"end":[110,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[112,3],"end":[112,8]}},"name":"proto"});

    m.writeProperty("obj26", "8", {});

    m.writeProperty("obj26", "7", {});

    m.writeProperty("obj26", "6", {});

    m.writeProperty("obj26", "5", {});

    m.writeProperty("obj26", "4", {});

    m.writeProperty("obj26", "3", {});

    m.writeProperty("obj26", "2", {});

    m.writeProperty("obj26", "1", {});

    m.writeProperty("obj26", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[112,22],"end":[121,19]}}});

    m.writeProperty("obj5", "_gravities", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[112,3],"end":[121,19]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[112,3],"end":[121,19]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[124,3],"end":[124,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[124,20],"end":[133,4]}}});

    m.writeProperty("obj5", "drawText", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[124,3],"end":[133,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[124,3],"end":[133,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[135,3],"end":[135,8]}},"name":"proto"});

    m.writeProperty("obj27", "1", {});

    m.writeProperty("obj27", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[135,22],"end":[135,40]}}});

    m.writeProperty("obj5", "_drawProps", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[135,3],"end":[135,40]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[135,3],"end":[135,40]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[138,3],"end":[138,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[138,19],"end":[146,4]}}});

    m.writeProperty("obj5", "setDraw", {"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[138,3],"end":[146,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/drawing.js","pos":{"start":[138,3],"end":[146,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,1],"end":[115,39]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[115,1],"end":[115,39]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,1],"end":[116,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,9],"end":[116,28]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,1],"end":[116,29]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[1,1],"end":[13,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[1,1],"end":[13,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[1,2],"end":[13,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[1,2],"end":[13,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[1,2],"end":[13,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[1,2],"end":[13,2]}},"name":"__dirname"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[6,1],"end":[6,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[6,18],"end":[11,2]}}});

    m.writeProperty("obj28", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[6,1],"end":[11,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[6,1],"end":[11,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,1],"end":[116,29]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,30],"end":[116,32]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,30],"end":[116,42]}}});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,1],"end":[116,43]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[6,18],"end":[11,2]}},"name":"proto"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,3],"end":[7,10]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,11],"end":[7,32]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,3],"end":[7,33]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[1,1],"end":[94,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[1,1],"end":[94,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[1,2],"end":[94,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[1,2],"end":[94,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[1,2],"end":[94,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[1,2],"end":[94,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[1,2],"end":[94,2]}},"name":"__dirname"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[6,1],"end":[6,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[6,18],"end":[92,2]}}});

    m.writeProperty("obj29", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[6,1],"end":[92,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[6,1],"end":[92,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,3],"end":[7,33]}},"name":"require"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,34],"end":[7,39]}},"name":"proto"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,3],"end":[7,40]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[6,18],"end":[92,2]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[8,3],"end":[8,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[8,17],"end":[82,4]}}});

    m.writeProperty("obj5", "thumb", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[8,3],"end":[82,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[8,3],"end":[82,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[84,3],"end":[84,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[84,22],"end":[91,4]}}});

    m.writeProperty("obj5", "thumbExact", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[84,3],"end":[91,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/thumb.js","pos":{"start":[84,3],"end":[91,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,3],"end":[7,40]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[7,3],"end":[7,40]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,3],"end":[8,10]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,11],"end":[8,32]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,3],"end":[8,33]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,1],"end":[63,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,1],"end":[63,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,2],"end":[63,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,2],"end":[63,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,2],"end":[63,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,2],"end":[63,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,2],"end":[63,2]}},"name":"__dirname"});

    m.initVar("fs", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,2],"end":[63,2]}},"name":"fs"});

    m.initVar("parallel", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[1,2],"end":[63,2]}},"name":"parallel"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[6,10],"end":[6,17]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[6,18],"end":[6,22]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[6,10],"end":[6,23]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[6,10],"end":[6,23]}},"name":"require"});

    m.writeVar("fs", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[6,5],"end":[6,23]}},"name":"fs"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[6,5],"end":[6,23]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[7,16],"end":[7,23]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[7,24],"end":[7,40]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[7,16],"end":[7,41]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,1],"end":[42,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,1],"end":[42,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,2],"end":[42,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,2],"end":[42,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,2],"end":[42,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,2],"end":[42,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,2],"end":[42,2]}},"name":"__dirname"});

    m.initVar("noop", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,2],"end":[42,2]}},"name":"noop"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[40,1],"end":[40,19]}}});

    m.writeVar("noop", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[40,1],"end":[40,19]}},"name":"noop"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,62],"end":[1,68]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,79],"end":[38,2]}}});

    m.writeProperty("obj30", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,62],"end":[38,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/array-parallel/index.js","pos":{"start":[1,62],"end":[38,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[7,16],"end":[7,41]}},"name":"require"});

    m.writeVar("parallel", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[7,5],"end":[7,41]}},"name":"parallel"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[7,5],"end":[7,41]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[13,1],"end":[13,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[13,18],"end":[61,2]}}});

    m.writeProperty("obj31", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[13,1],"end":[61,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[13,1],"end":[61,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,3],"end":[8,33]}},"name":"require"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,34],"end":[8,39]}},"name":"proto"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,3],"end":[8,40]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[13,18],"end":[61,2]}},"name":"proto"});

    m.initVar("noop", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[13,18],"end":[61,2]}},"name":"noop"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[19,3],"end":[19,22]}}});

    m.writeVar("noop", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[19,3],"end":[19,22]}},"name":"noop"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[22,3],"end":[22,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[22,17],"end":[60,4]}}});

    m.writeProperty("obj5", "morph", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[22,3],"end":[60,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/morph.js","pos":{"start":[22,3],"end":[60,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,3],"end":[8,40]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[8,3],"end":[8,40]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,3],"end":[9,10]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,11],"end":[9,32]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,3],"end":[9,33]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[1,1],"end":[12,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[1,1],"end":[12,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[1,2],"end":[12,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[1,2],"end":[12,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[1,2],"end":[12,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[1,2],"end":[12,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[1,2],"end":[12,2]}},"name":"__dirname"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[6,1],"end":[6,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[6,18],"end":[10,2]}}});

    m.writeProperty("obj32", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[6,1],"end":[10,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[6,1],"end":[10,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,3],"end":[9,33]}},"name":"require"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,34],"end":[9,39]}},"name":"proto"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,3],"end":[9,40]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[6,18],"end":[10,2]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[7,3],"end":[7,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[7,17],"end":[9,4]}}});

    m.writeProperty("obj5", "sepia", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[7,3],"end":[9,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/sepia.js","pos":{"start":[7,3],"end":[9,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,3],"end":[9,40]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[9,3],"end":[9,40]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,3],"end":[10,10]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,11],"end":[10,37]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,3],"end":[10,38]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[1,1],"end":[59,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[1,1],"end":[59,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[1,2],"end":[59,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[1,2],"end":[59,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[1,2],"end":[59,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[1,2],"end":[59,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[1,2],"end":[59,2]}},"name":"__dirname"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[6,1],"end":[6,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[6,18],"end":[57,2]}}});

    m.writeProperty("obj33", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[6,1],"end":[57,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[6,1],"end":[57,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,3],"end":[10,38]}},"name":"require"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,39],"end":[10,44]}},"name":"proto"});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,3],"end":[10,45]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[6,18],"end":[57,2]}},"name":"proto"});

    m.initVar("exifTransforms", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[6,18],"end":[57,2]}},"name":"exifTransforms"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[9,20],"end":[9,22]}}});

    m.writeProperty("obj34", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[10,20],"end":[10,29]}}});

    m.writeProperty("obj35", "1", {});

    m.writeProperty("obj35", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[11,20],"end":[11,36]}}});

    m.writeProperty("obj36", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[12,20],"end":[12,29]}}});

    m.writeProperty("obj37", "2", {});

    m.writeProperty("obj37", "1", {});

    m.writeProperty("obj37", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[13,20],"end":[13,44]}}});

    m.writeProperty("obj38", "1", {});

    m.writeProperty("obj38", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[14,20],"end":[14,35]}}});

    m.writeProperty("obj39", "2", {});

    m.writeProperty("obj39", "1", {});

    m.writeProperty("obj39", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[15,20],"end":[15,44]}}});

    m.writeProperty("obj40", "1", {});

    m.writeProperty("obj40", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[16,20],"end":[16,36]}}});

    m.writeProperty("obj41", "leftbottom", {});

    m.writeProperty("obj41", "rightbottom", {});

    m.writeProperty("obj41", "righttop", {});

    m.writeProperty("obj41", "lefttop", {});

    m.writeProperty("obj41", "bottomleft", {});

    m.writeProperty("obj41", "bottomright", {});

    m.writeProperty("obj41", "topright", {});

    m.writeProperty("obj41", "topleft", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[8,24],"end":[17,4]}}});

    m.writeVar("exifTransforms", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[8,7],"end":[17,4]}},"name":"exifTransforms"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[8,7],"end":[17,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[19,3],"end":[19,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[19,22],"end":[56,4]}}});

    m.writeProperty("obj5", "autoOrient", {"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[19,3],"end":[56,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience/autoOrient.js","pos":{"start":[19,3],"end":[56,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,3],"end":[10,45]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/convenience.js","pos":{"start":[10,3],"end":[10,45]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,1],"end":[116,43]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[116,1],"end":[116,43]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,1],"end":[117,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,9],"end":[117,24]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,1],"end":[117,25]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,1],"end":[413,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,1],"end":[413,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"__dirname"});

    m.initVar("spawn", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"spawn"});

    m.initVar("utils", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"utils"});

    m.initVar("debug", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"debug"});

    m.initVar("series", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"series"});

    m.initVar("PassThrough", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"PassThrough"});

    m.initVar("noBufferConcat", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[1,2],"end":[413,2]}},"name":"noBufferConcat"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[6,13],"end":[6,20]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[6,21],"end":[6,36]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[6,13],"end":[6,37]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[6,13],"end":[6,37]}},"name":"require"});

    m.readProperty("obj42", "spawn", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[6,13],"end":[6,43]}}});

    m.writeVar("spawn", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[6,5],"end":[6,43]}},"name":"spawn"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[6,5],"end":[6,43]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[7,13],"end":[7,20]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[7,21],"end":[7,30]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[7,13],"end":[7,31]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[7,13],"end":[7,31]}},"name":"require"});

    m.writeVar("utils", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[7,5],"end":[7,31]}},"name":"utils"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[7,5],"end":[7,31]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,13],"end":[8,20]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,21],"end":[8,28]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,13],"end":[8,29]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,1],"end":[211,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,1],"end":[211,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"__dirname"});

    m.initVar("useColors", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"useColors"});

    m.initVar("formatArgs", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"formatArgs"});

    m.initVar("log", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"log"});

    m.initVar("save", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"save"});

    m.initVar("load", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"load"});

    m.initVar("createWritableStdioStream", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"createWritableStdioStream"});

    m.initVar("tty", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"tty"});

    m.initVar("util", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"util"});

    m.initVar("fd", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"fd"});

    m.initVar("stream", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"stream"});

    m.initVar("inspect", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[1,2],"end":[211,2]}},"name":"inspect"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[44,1],"end":[54,2]}}});

    m.writeVar("useColors", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[44,1],"end":[54,2]}},"name":"useColors"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[82,1],"end":[99,2]}}});

    m.writeVar("formatArgs", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[82,1],"end":[99,2]}},"name":"formatArgs"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[105,1],"end":[107,2]}}});

    m.writeVar("log", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[105,1],"end":[107,2]}},"name":"log"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[116,1],"end":[124,2]}}});

    m.writeVar("save", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[116,1],"end":[124,2]}},"name":"save"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[133,1],"end":[135,2]}}});

    m.writeVar("load", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[133,1],"end":[135,2]}},"name":"load"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[144,1],"end":[203,2]}}});

    m.writeVar("createWritableStdioStream", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[144,1],"end":[203,2]}},"name":"createWritableStdioStream"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[6,11],"end":[6,18]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[6,19],"end":[6,24]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[6,11],"end":[6,25]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[6,11],"end":[6,25]}},"name":"require"});

    m.writeVar("tty", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[6,5],"end":[6,25]}},"name":"tty"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[6,5],"end":[6,25]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[7,12],"end":[7,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[7,20],"end":[7,26]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[7,12],"end":[7,27]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[7,12],"end":[7,27]}},"name":"require"});

    m.writeVar("util", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[7,5],"end":[7,27]}},"name":"util"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[7,5],"end":[7,27]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,11],"end":[15,17]}},"name":"module"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,28],"end":[15,35]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,36],"end":[15,45]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,28],"end":[15,46]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,1],"end":[199,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,1],"end":[199,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"__dirname"});

    m.initVar("selectColor", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"selectColor"});

    m.initVar("debug", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"debug"});

    m.initVar("enable", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"enable"});

    m.initVar("disable", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"disable"});

    m.initVar("enabled", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"enabled"});

    m.initVar("coerce", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"coerce"});

    m.initVar("prevColor", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"prevColor"});

    m.initVar("prevTime", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[1,2],"end":[199,2]}},"name":"prevTime"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[50,1],"end":[52,2]}}});

    m.writeVar("selectColor", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[50,1],"end":[52,2]}},"name":"selectColor"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[62,1],"end":[126,2]}}});

    m.writeVar("debug", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[62,1],"end":[126,2]}},"name":"debug"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[136,1],"end":[151,2]}}});

    m.writeVar("enable", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[136,1],"end":[151,2]}},"name":"enable"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[159,1],"end":[161,2]}}});

    m.writeVar("disable", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[159,1],"end":[161,2]}},"name":"disable"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[171,1],"end":[184,2]}}});

    m.writeVar("enabled", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[171,1],"end":[184,2]}},"name":"enabled"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[194,1],"end":[197,2]}}});

    m.writeVar("coerce", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[194,1],"end":[197,2]}},"name":"coerce"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[9,11],"end":[9,17]}},"name":"module"});

    m.readVar("debug", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[9,28],"end":[9,33]}},"name":"debug"});

    m.writeProperty("obj43", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[9,11],"end":[9,33]}}});

    m.writeVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[9,1],"end":[9,33]}},"name":"exports"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[9,1],"end":[9,33]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[10,1],"end":[10,8]}},"name":"exports"});

    m.readVar("coerce", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[10,18],"end":[10,24]}},"name":"coerce"});

    m.writeProperty("obj44", "coerce", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[10,1],"end":[10,24]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[10,1],"end":[10,24]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[11,1],"end":[11,8]}},"name":"exports"});

    m.readVar("disable", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[11,19],"end":[11,26]}},"name":"disable"});

    m.writeProperty("obj44", "disable", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[11,1],"end":[11,26]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[11,1],"end":[11,26]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[12,1],"end":[12,8]}},"name":"exports"});

    m.readVar("enable", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[12,18],"end":[12,24]}},"name":"enable"});

    m.writeProperty("obj44", "enable", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[12,1],"end":[12,24]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[12,1],"end":[12,24]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[13,1],"end":[13,8]}},"name":"exports"});

    m.readVar("enabled", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[13,19],"end":[13,26]}},"name":"enabled"});

    m.writeProperty("obj44", "enabled", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[13,1],"end":[13,26]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[13,1],"end":[13,26]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[14,1],"end":[14,8]}},"name":"exports"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[14,20],"end":[14,27]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[14,28],"end":[14,32]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[14,20],"end":[14,33]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,1],"end":[127,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,1],"end":[127,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"__dirname"});

    m.initVar("parse", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"parse"});

    m.initVar("short", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"short"});

    m.initVar("long", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"long"});

    m.initVar("plural", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"plural"});

    m.initVar("s", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"s"});

    m.initVar("m", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"m"});

    m.initVar("h", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"h"});

    m.initVar("d", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"d"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[1,2],"end":[127,2]}},"name":"y"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[40,1],"end":[83,2]}}});

    m.writeVar("parse", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[40,1],"end":[83,2]}},"name":"parse"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[93,1],"end":[99,2]}}});

    m.writeVar("short", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[93,1],"end":[99,2]}},"name":"short"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[109,1],"end":[115,2]}}});

    m.writeVar("long", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[109,1],"end":[115,2]}},"name":"long"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[121,1],"end":[125,2]}}});

    m.writeVar("plural", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[121,1],"end":[125,2]}},"name":"plural"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[5,9],"end":[5,13]}}});

    m.writeVar("s", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[5,5],"end":[5,13]}},"name":"s"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[5,5],"end":[5,13]}}});

    m.readVar("s", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[6,9],"end":[6,10]}},"name":"s"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[6,13],"end":[6,15]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[6,9],"end":[6,15]}}});

    m.writeVar("m", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[6,5],"end":[6,15]}},"name":"m"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[6,5],"end":[6,15]}}});

    m.readVar("m", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[7,9],"end":[7,10]}},"name":"m"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[7,13],"end":[7,15]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[7,9],"end":[7,15]}}});

    m.writeVar("h", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[7,5],"end":[7,15]}},"name":"h"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[7,5],"end":[7,15]}}});

    m.readVar("h", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[8,9],"end":[8,10]}},"name":"h"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[8,13],"end":[8,15]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[8,9],"end":[8,15]}}});

    m.writeVar("d", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[8,5],"end":[8,15]}},"name":"d"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[8,5],"end":[8,15]}}});

    m.readVar("d", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[9,9],"end":[9,10]}},"name":"d"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[9,13],"end":[9,19]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[9,9],"end":[9,19]}}});

    m.writeVar("y", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[9,5],"end":[9,19]}},"name":"y"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[9,5],"end":[9,19]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[24,1],"end":[24,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[24,18],"end":[30,2]}}});

    m.writeProperty("obj45", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[24,1],"end":[30,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node_modules/ms/index.js","pos":{"start":[24,1],"end":[30,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[14,20],"end":[14,33]}},"name":"require"});

    m.writeProperty("obj44", "humanize", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[14,1],"end":[14,33]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[14,1],"end":[14,33]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[20,1],"end":[20,8]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[20,17],"end":[20,19]}}});

    m.writeProperty("obj44", "names", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[20,1],"end":[20,19]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[20,1],"end":[20,19]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[21,1],"end":[21,8]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[21,17],"end":[21,19]}}});

    m.writeProperty("obj44", "skips", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[21,1],"end":[21,19]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[21,1],"end":[21,19]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[29,1],"end":[29,8]}},"name":"exports"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[29,22],"end":[29,24]}}});

    m.writeProperty("obj44", "formatters", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[29,1],"end":[29,24]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[29,1],"end":[29,24]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[35,17],"end":[35,18]}}});

    m.writeVar("prevColor", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[35,5],"end":[35,18]}},"name":"prevColor"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[35,5],"end":[35,18]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,28],"end":[15,46]}},"name":"require"});

    m.writeProperty("obj46", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,11],"end":[15,46]}}});

    m.writeVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,1],"end":[15,46]}},"name":"exports"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[15,1],"end":[15,46]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[16,1],"end":[16,8]}},"name":"exports"});

    m.readVar("log", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[16,15],"end":[16,18]}},"name":"log"});

    m.writeProperty("obj44", "log", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[16,1],"end":[16,18]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[16,1],"end":[16,18]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[17,1],"end":[17,8]}},"name":"exports"});

    m.readVar("formatArgs", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[17,22],"end":[17,32]}},"name":"formatArgs"});

    m.writeProperty("obj44", "formatArgs", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[17,1],"end":[17,32]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[17,1],"end":[17,32]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[18,1],"end":[18,8]}},"name":"exports"});

    m.readVar("save", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[18,16],"end":[18,20]}},"name":"save"});

    m.writeProperty("obj44", "save", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[18,1],"end":[18,20]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[18,1],"end":[18,20]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[19,1],"end":[19,8]}},"name":"exports"});

    m.readVar("load", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[19,16],"end":[19,20]}},"name":"load"});

    m.writeProperty("obj44", "load", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[19,1],"end":[19,20]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[19,1],"end":[19,20]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[20,1],"end":[20,8]}},"name":"exports"});

    m.readVar("useColors", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[20,21],"end":[20,30]}},"name":"useColors"});

    m.writeProperty("obj44", "useColors", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[20,1],"end":[20,30]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[20,1],"end":[20,30]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[26,1],"end":[26,8]}},"name":"exports"});

    m.writeProperty("obj47", "5", {});

    m.writeProperty("obj47", "4", {});

    m.writeProperty("obj47", "3", {});

    m.writeProperty("obj47", "2", {});

    m.writeProperty("obj47", "1", {});

    m.writeProperty("obj47", "0", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[26,18],"end":[26,36]}}});

    m.writeProperty("obj44", "colors", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[26,1],"end":[26,36]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[26,1],"end":[26,36]}}});

    m.readVar("parseInt", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,10],"end":[35,18]}},"name":"parseInt"});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,19],"end":[35,26]}},"name":"process"});

    m.readProperty("obj48", "env", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,19],"end":[35,30]}}});

    m.readProperty("obj49", "DEBUG_FD", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,19],"end":[35,39]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,41],"end":[35,43]}}});

    m.functionCall("parseInt", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,10],"end":[35,44]}},"name":"parseInt"});

    m.functionReturn("parseInt", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,10],"end":[35,44]}},"name":"parseInt"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,48],"end":[35,49]}}});

    m.writeVar("fd", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,5],"end":[35,49]}},"name":"fd"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[35,5],"end":[35,49]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[36,14],"end":[36,22]}}});

    m.readVar("fd", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[36,20],"end":[36,22]}},"name":"fd"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[36,14],"end":[36,22]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[37,14],"end":[37,22]}}});

    m.readVar("fd", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[37,20],"end":[37,22]}},"name":"fd"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[37,14],"end":[37,22]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[37,25],"end":[37,32]}},"name":"process"});

    m.readProperty("obj48", "stderr", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[37,25],"end":[37,39]}}});

    m.writeVar("stream", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[36,5],"end":[38,43]}},"name":"stream"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[36,5],"end":[38,43]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[60,16],"end":[60,41]}}});

    m.readVar("util", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[60,22],"end":[60,26]}},"name":"util"});

    m.readProperty("obj2", "inspect", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[60,22],"end":[60,34]}}});

    m.readProperty("obj50", "length", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[60,22],"end":[60,41]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[60,16],"end":[60,41]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[66,3],"end":[68,4]}}});

    m.writeVar("inspect", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[60,5],"end":[69,2]}},"name":"inspect"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[60,5],"end":[69,2]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[71,1],"end":[71,8]}},"name":"exports"});

    m.readProperty("obj44", "formatters", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[71,1],"end":[71,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[71,24],"end":[74,2]}}});

    m.writeProperty("obj51", "o", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[71,1],"end":[74,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[71,1],"end":[74,2]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,1],"end":[209,8]}},"name":"exports"});

    m.readProperty("obj44", "enable", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,1],"end":[209,15]}}});

    m.readVar("load", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,16],"end":[209,20]}},"name":"load"});

    m.functionCall("load", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,16],"end":[209,22]}},"name":"load"});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[134,10],"end":[134,17]}},"name":"process"});

    m.readProperty("obj48", "env", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[134,10],"end":[134,21]}}});

    m.readProperty("obj49", "DEBUG", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[134,10],"end":[134,27]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[134,3],"end":[134,28]}}});

    m.functionReturn("load", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,16],"end":[209,22]}},"name":"load"});

    m.functionCall("enable", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,1],"end":[209,23]}},"name":"enable"});

    m.initVar("namespaces", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[136,1],"end":[151,2]}},"name":"namespaces"});

    m.initVar("split", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[136,1],"end":[151,2]}},"name":"split"});

    m.initVar("len", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[136,1],"end":[151,2]}},"name":"len"});

    m.initVar("i", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[136,1],"end":[151,2]}},"name":"i"});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[137,3],"end":[137,10]}},"name":"exports"});

    m.readProperty("obj44", "save", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[137,3],"end":[137,15]}}});

    m.readVar("namespaces", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[137,16],"end":[137,26]}},"name":"namespaces"});

    m.functionCall("save", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[137,3],"end":[137,27]}},"name":"save"});

    m.initVar("namespaces", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[116,1],"end":[124,2]}},"name":"namespaces"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[117,7],"end":[117,25]}}});

    m.readVar("namespaces", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[117,15],"end":[117,25]}},"name":"namespaces"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[117,7],"end":[117,25]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[120,12],"end":[120,19]}},"name":"process"});

    m.readProperty("obj48", "env", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[120,12],"end":[120,23]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[120,5],"end":[120,29]}}});

    m.unaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[120,5],"end":[120,29]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[120,5],"end":[120,29]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[117,3],"end":[123,4]}}});

    m.functionReturn("save", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[137,3],"end":[137,27]}},"name":"save"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[137,3],"end":[137,27]}}});

    m.readVar("namespaces", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,16],"end":[139,26]}},"name":"namespaces"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,30],"end":[139,32]}}});

    m.readProperty("obj52", "split", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,15],"end":[139,39]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,40],"end":[139,48]}}});

    m.functionCall("split", 2, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,15],"end":[139,49]}},"name":"split"});

    m.functionReturn("split", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,15],"end":[139,49]}},"name":"split"});

    m.writeVar("split", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,7],"end":[139,49]}},"name":"split"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[139,7],"end":[139,49]}}});

    m.readVar("split", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[140,13],"end":[140,18]}},"name":"split"});

    m.readProperty("obj53", "length", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[140,13],"end":[140,25]}}});

    m.writeVar("len", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[140,7],"end":[140,25]}},"name":"len"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[140,7],"end":[140,25]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,16],"end":[142,17]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,12],"end":[142,17]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,12],"end":[142,17]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,19],"end":[142,20]}},"name":"i"});

    m.readVar("len", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,23],"end":[142,26]}},"name":"len"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,19],"end":[142,26]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,19],"end":[142,26]}}});

    m.readVar("split", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[143,10],"end":[143,15]}},"name":"split"});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[143,16],"end":[143,17]}},"name":"i"});

    m.readProperty("obj53", 0, {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[143,10],"end":[143,18]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,28],"end":[142,31]}},"name":"i"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,28],"end":[142,31]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,28],"end":[142,31]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,28],"end":[142,31]}},"name":"i"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,28],"end":[142,31]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,19],"end":[142,20]}},"name":"i"});

    m.readVar("len", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,23],"end":[142,26]}},"name":"len"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,19],"end":[142,26]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[142,19],"end":[142,26]}}});

    m.functionReturn("enable", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,1],"end":[209,23]}},"name":"enable"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/node.js","pos":{"start":[209,1],"end":[209,23]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,13],"end":[8,29]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,30],"end":[8,34]}}});

    m.functionCall("debug", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,13],"end":[8,35]}},"name":"debug"});

    m.initVar("namespace", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[62,1],"end":[126,2]}},"name":"namespace"});

    m.initVar("disabled", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[62,1],"end":[126,2]}},"name":"disabled"});

    m.initVar("enabled", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[62,1],"end":[126,2]}},"name":"enabled"});

    m.initVar("fn", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[62,1],"end":[126,2]}},"name":"fn"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[65,3],"end":[66,4]}}});

    m.writeVar("disabled", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[65,3],"end":[66,4]}},"name":"disabled"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[70,3],"end":[118,4]}}});

    m.writeVar("enabled", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[70,3],"end":[118,4]}},"name":"enabled"});

    m.readVar("disabled", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[67,3],"end":[67,11]}},"name":"disabled"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[67,22],"end":[67,27]}}});

    m.writeProperty("obj54", "enabled", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[67,3],"end":[67,27]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[67,3],"end":[67,27]}}});

    m.readVar("enabled", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[119,3],"end":[119,10]}},"name":"enabled"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[119,21],"end":[119,25]}}});

    m.writeProperty("obj55", "enabled", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[119,3],"end":[119,25]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[119,3],"end":[119,25]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,12],"end":[121,19]}},"name":"exports"});

    m.readProperty("obj44", "enabled", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,12],"end":[121,27]}}});

    m.readVar("namespace", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,28],"end":[121,37]}},"name":"namespace"});

    m.functionCall("enabled", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,12],"end":[121,38]}},"name":"enabled"});

    m.initVar("name", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[171,1],"end":[184,2]}},"name":"name"});

    m.initVar("i", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[171,1],"end":[184,2]}},"name":"i"});

    m.initVar("len", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[171,1],"end":[184,2]}},"name":"len"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,12],"end":[173,13]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,8],"end":[173,13]}},"name":"i"});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,21],"end":[173,28]}},"name":"exports"});

    m.readProperty("obj44", "skips", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,21],"end":[173,34]}}});

    m.readProperty("obj56", "length", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,21],"end":[173,41]}}});

    m.writeVar("len", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,15],"end":[173,41]}},"name":"len"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,8],"end":[173,41]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,43],"end":[173,44]}},"name":"i"});

    m.readVar("len", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,47],"end":[173,50]}},"name":"len"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,43],"end":[173,50]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[173,43],"end":[173,50]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,12],"end":[178,13]}}});

    m.writeVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,8],"end":[178,13]}},"name":"i"});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,21],"end":[178,28]}},"name":"exports"});

    m.readProperty("obj44", "names", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,21],"end":[178,34]}}});

    m.readProperty("obj57", "length", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,21],"end":[178,41]}}});

    m.writeVar("len", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,15],"end":[178,41]}},"name":"len"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,8],"end":[178,41]}}});

    m.readVar("i", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,43],"end":[178,44]}},"name":"i"});

    m.readVar("len", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,47],"end":[178,50]}},"name":"len"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,43],"end":[178,50]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[178,43],"end":[178,50]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[183,10],"end":[183,15]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[183,3],"end":[183,16]}}});

    m.functionReturn("enabled", {"type":"functionReturn","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,12],"end":[121,38]}},"name":"enabled"});

    m.readVar("disabled", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,51],"end":[121,59]}},"name":"disabled"});

    m.writeVar("fn", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,7],"end":[121,59]}},"name":"fn"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[121,7],"end":[121,59]}}});

    m.readVar("fn", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[123,3],"end":[123,5]}},"name":"fn"});

    m.readVar("namespace", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[123,18],"end":[123,27]}},"name":"namespace"});

    m.writeProperty("obj54", "namespace", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[123,3],"end":[123,27]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[123,3],"end":[123,27]}}});

    m.readVar("fn", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[125,10],"end":[125,12]}},"name":"fn"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/debug/debug.js","pos":{"start":[125,3],"end":[125,13]}}});

    m.functionReturn("debug", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,13],"end":[8,35]}},"name":"debug"});

    m.writeVar("debug", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,5],"end":[8,35]}},"name":"debug"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[8,5],"end":[8,35]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[9,14],"end":[9,21]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[9,22],"end":[9,36]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[9,14],"end":[9,37]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,1],"end":[36,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,1],"end":[36,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,2],"end":[36,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,2],"end":[36,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,2],"end":[36,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,2],"end":[36,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,2],"end":[36,2]}},"name":"__dirname"});

    m.initVar("noop", {"type":"declaration","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,2],"end":[36,2]}},"name":"noop"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[34,1],"end":[34,19]}}});

    m.writeVar("noop", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[34,1],"end":[34,19]}},"name":"noop"});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,62],"end":[1,68]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,79],"end":[32,2]}}});

    m.writeProperty("obj58", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,62],"end":[32,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/node_modules/array-series/index.js","pos":{"start":[1,62],"end":[32,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[9,14],"end":[9,37]}},"name":"require"});

    m.writeVar("series", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[9,5],"end":[9,37]}},"name":"series"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[9,5],"end":[9,37]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[10,19],"end":[10,26]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[10,27],"end":[10,35]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[10,19],"end":[10,36]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[10,19],"end":[10,36]}},"name":"require"});

    m.readProperty("obj0", "PassThrough", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[10,19],"end":[10,48]}}});

    m.writeVar("PassThrough", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[10,5],"end":[10,48]}},"name":"PassThrough"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[10,5],"end":[10,48]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[16,22],"end":[16,141]}}});

    m.writeVar("noBufferConcat", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[16,5],"end":[16,140]}},"name":"noBufferConcat"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[16,5],"end":[16,140]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,1],"end":[22,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,18],"end":[411,2]}}});

    m.writeProperty("obj59", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,1],"end":[411,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,1],"end":[411,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,1],"end":[117,25]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,26],"end":[117,28]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,26],"end":[117,38]}}});

    m.functionCall("", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,1],"end":[117,39]}}});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,18],"end":[411,2]}},"name":"proto"});

    m.initVar("args", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,18],"end":[411,2]}},"name":"args"});

    m.initVar("streamToUnemptyBuffer", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,18],"end":[411,2]}},"name":"streamToUnemptyBuffer"});

    m.initVar("types", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[22,18],"end":[411,2]}},"name":"types"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[24,3],"end":[37,4]}}});

    m.writeVar("args", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[24,3],"end":[37,4]}},"name":"args"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[39,3],"end":[69,4]}}});

    m.writeVar("streamToUnemptyBuffer", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[39,3],"end":[69,4]}},"name":"streamToUnemptyBuffer"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[71,3],"end":[71,8]}},"name":"proto"});

    m.readVar("args", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[71,14],"end":[71,18]}},"name":"args"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[71,19],"end":[71,24]}}});

    m.functionCall("args", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[71,14],"end":[71,25]}},"name":"args"});

    m.initVar("prop", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[24,3],"end":[37,4]}},"name":"prop"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[25,12],"end":[36,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[25,5],"end":[36,6]}}});

    m.functionReturn("args", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[71,14],"end":[71,25]}},"name":"args"});

    m.writeProperty("obj5", "in", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[71,3],"end":[71,25]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[71,3],"end":[71,25]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[72,3],"end":[72,8]}},"name":"proto"});

    m.readVar("args", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[72,15],"end":[72,19]}},"name":"args"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[72,20],"end":[72,26]}}});

    m.functionCall("args", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[72,15],"end":[72,27]}},"name":"args"});

    m.initVar("prop", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[24,3],"end":[37,4]}},"name":"prop"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[25,12],"end":[36,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[25,5],"end":[36,6]}}});

    m.functionReturn("args", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[72,15],"end":[72,27]}},"name":"args"});

    m.writeProperty("obj5", "out", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[72,3],"end":[72,27]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[72,3],"end":[72,27]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[74,3],"end":[74,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[74,25],"end":[74,27]}}});

    m.writeProperty("obj5", "_preprocessor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[74,3],"end":[74,27]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[74,3],"end":[74,27]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[75,3],"end":[75,8]}},"name":"proto"});

    m.readVar("args", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[75,24],"end":[75,28]}},"name":"args"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[75,29],"end":[75,44]}}});

    m.functionCall("args", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[75,24],"end":[75,45]}},"name":"args"});

    m.initVar("prop", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[24,3],"end":[37,4]}},"name":"prop"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[25,12],"end":[36,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[25,5],"end":[36,6]}}});

    m.functionReturn("args", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[75,24],"end":[75,45]}},"name":"args"});

    m.writeProperty("obj5", "preprocessor", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[75,3],"end":[75,45]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[75,3],"end":[75,45]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[85,3],"end":[85,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[85,17],"end":[103,4]}}});

    m.writeProperty("obj5", "write", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[85,3],"end":[103,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[85,3],"end":[103,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[116,3],"end":[116,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[116,18],"end":[144,4]}}});

    m.writeProperty("obj5", "stream", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[116,3],"end":[144,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[116,3],"end":[144,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[155,3],"end":[155,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[155,20],"end":[167,4]}}});

    m.writeProperty("obj5", "toBuffer", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[155,3],"end":[167,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[155,3],"end":[167,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[176,3],"end":[176,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[176,23],"end":[178,4]}}});

    m.writeProperty("obj5", "_preprocess", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[176,3],"end":[178,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[176,3],"end":[178,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[189,3],"end":[189,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[189,17],"end":[191,4]}}});

    m.writeProperty("obj5", "_exec", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[189,3],"end":[191,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[189,3],"end":[191,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[204,3],"end":[204,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[204,18],"end":[320,4]}}});

    m.writeProperty("obj5", "_spawn", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[204,3],"end":[320,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[204,3],"end":[320,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[328,3],"end":[328,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[328,16],"end":[339,4]}}});

    m.writeProperty("obj5", "args", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[328,3],"end":[339,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[328,3],"end":[339,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[352,3],"end":[352,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[352,27],"end":[358,4]}}});

    m.writeProperty("obj5", "addSrcFormatter", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[352,3],"end":[358,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[352,3],"end":[358,4]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[366,3],"end":[366,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[366,15],"end":[372,4]}}});

    m.writeProperty("obj5", "src", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[366,3],"end":[372,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[366,3],"end":[372,4]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[379,14],"end":[379,25]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[380,15],"end":[380,24]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[381,15],"end":[381,24]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[382,15],"end":[382,26]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[383,15],"end":[383,34]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[384,15],"end":[384,25]}}});

    m.writeProperty("obj60", "webp", {});

    m.writeProperty("obj60", "bmp", {});

    m.writeProperty("obj60", "tiff", {});

    m.writeProperty("obj60", "gif", {});

    m.writeProperty("obj60", "png", {});

    m.writeProperty("obj60", "jpg", {});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[378,15],"end":[385,4]}}});

    m.writeVar("types", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[378,7],"end":[385,4]}},"name":"types"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[378,7],"end":[385,4]}}});

    m.readVar("types", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[387,3],"end":[387,8]}},"name":"types"});

    m.readVar("types", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[387,16],"end":[387,21]}},"name":"types"});

    m.readProperty("obj60", "jpg", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[387,16],"end":[387,25]}}});

    m.writeProperty("obj60", "jpeg", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[387,3],"end":[387,25]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[387,3],"end":[387,25]}}});

    m.readVar("types", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[388,3],"end":[388,8]}},"name":"types"});

    m.readVar("types", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[388,15],"end":[388,20]}},"name":"types"});

    m.readProperty("obj60", "tiff", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[388,15],"end":[388,25]}}});

    m.writeProperty("obj60", "tif", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[388,3],"end":[388,25]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[388,3],"end":[388,25]}}});

    m.readVar("types", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[389,3],"end":[389,8]}},"name":"types"});

    m.readVar("types", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[389,15],"end":[389,20]}},"name":"types"});

    m.readProperty("obj60", "bmp", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[389,15],"end":[389,24]}}});

    m.writeProperty("obj60", "dib", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[389,3],"end":[389,24]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[389,3],"end":[389,24]}}});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[400,3],"end":[400,8]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[400,19],"end":[410,4]}}});

    m.writeProperty("obj5", "inputIs", {"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[400,3],"end":[410,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/command.js","pos":{"start":[400,3],"end":[410,4]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,1],"end":[117,39]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[117,1],"end":[117,39]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,1],"end":[118,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,9],"end":[118,24]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,1],"end":[118,25]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,1],"end":[107,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,1],"end":[107,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,2],"end":[107,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,2],"end":[107,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,2],"end":[107,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,2],"end":[107,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,2],"end":[107,2]}},"name":"__dirname"});

    m.initVar("exec", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,2],"end":[107,2]}},"name":"exec"});

    m.initVar("utils", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[1,2],"end":[107,2]}},"name":"utils"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[3,12],"end":[3,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[3,20],"end":[3,35]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[3,12],"end":[3,36]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[3,12],"end":[3,36]}},"name":"require"});

    m.readProperty("obj42", "exec", {"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[3,12],"end":[3,41]}}});

    m.writeVar("exec", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[3,5],"end":[3,41]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[3,5],"end":[3,41]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[4,13],"end":[4,20]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[4,21],"end":[4,30]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[4,13],"end":[4,31]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[4,13],"end":[4,31]}},"name":"require"});

    m.writeVar("utils", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[4,5],"end":[4,31]}},"name":"utils"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[4,5],"end":[4,31]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,1],"end":[21,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,28],"end":[104,2]}}});

    m.writeVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,18],"end":[104,2]}},"name":"exports"});

    m.writeProperty("obj61", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,1],"end":[104,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,1],"end":[104,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,1],"end":[118,25]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,26],"end":[118,28]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,26],"end":[118,38]}}});

    m.functionCall("exports", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,1],"end":[118,39]}},"name":"exports"});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,28],"end":[104,2]}},"name":"proto"});

    m.initVar("compare", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,28],"end":[104,2]}},"name":"compare"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}}});

    m.writeVar("compare", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"compare"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[100,7],"end":[100,12]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[101,5],"end":[101,10]}},"name":"proto"});

    m.readVar("compare", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[101,21],"end":[101,28]}},"name":"compare"});

    m.writeProperty("obj5", "compare", {"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[101,5],"end":[101,28]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[101,5],"end":[101,28]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[100,3],"end":[102,4]}}});

    m.readVar("compare", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[103,10],"end":[103,17]}},"name":"compare"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[103,3],"end":[103,18]}}});

    m.functionReturn("exports", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,1],"end":[118,39]}},"name":"exports"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[118,1],"end":[118,39]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,1],"end":[119,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,9],"end":[119,26]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,1],"end":[119,27]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,1],"end":[33,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,1],"end":[33,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,2],"end":[33,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,2],"end":[33,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,2],"end":[33,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,2],"end":[33,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,2],"end":[33,2]}},"name":"__dirname"});

    m.initVar("utils", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[1,2],"end":[33,2]}},"name":"utils"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[3,13],"end":[3,20]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[3,21],"end":[3,30]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[3,13],"end":[3,31]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[3,13],"end":[3,31]}},"name":"require"});

    m.writeVar("utils", {"type":"variable","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[3,5],"end":[3,31]}},"name":"utils"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[3,5],"end":[3,31]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[19,1],"end":[19,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[19,28],"end":[31,2]}}});

    m.writeVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[19,18],"end":[31,2]}},"name":"exports"});

    m.writeProperty("obj62", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[19,1],"end":[31,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[19,1],"end":[31,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,1],"end":[119,27]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,28],"end":[119,30]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,28],"end":[119,40]}}});

    m.functionCall("exports", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,1],"end":[119,41]}},"name":"exports"});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[19,28],"end":[31,2]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[20,5],"end":[20,10]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[20,23],"end":[30,6]}}});

    m.writeProperty("obj5", "composite", {"type":"expr","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[20,5],"end":[30,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/composite.js","pos":{"start":[20,5],"end":[30,6]}}});

    m.functionReturn("exports", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,1],"end":[119,41]}},"name":"exports"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[119,1],"end":[119,41]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,1],"end":[120,8]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,9],"end":[120,24]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,1],"end":[120,25]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,1],"end":[28,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,1],"end":[28,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,2],"end":[28,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,2],"end":[28,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,2],"end":[28,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,2],"end":[28,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,2],"end":[28,2]}},"name":"__dirname"});

    m.initVar("utils", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[1,2],"end":[28,2]}},"name":"utils"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[3,13],"end":[3,20]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[3,21],"end":[3,30]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[3,13],"end":[3,31]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[3,13],"end":[3,31]}},"name":"require"});

    m.writeVar("utils", {"type":"variable","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[3,5],"end":[3,31]}},"name":"utils"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[3,5],"end":[3,31]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[18,1],"end":[18,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[18,28],"end":[26,2]}}});

    m.writeVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[18,18],"end":[26,2]}},"name":"exports"});

    m.writeProperty("obj63", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[18,1],"end":[26,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[18,1],"end":[26,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,1],"end":[120,25]}},"name":"require"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,26],"end":[120,28]}},"name":"gm"});

    m.readProperty("obj3", "prototype", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,26],"end":[120,38]}}});

    m.functionCall("exports", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,1],"end":[120,39]}},"name":"exports"});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[18,28],"end":[26,2]}},"name":"proto"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[19,5],"end":[19,10]}},"name":"proto"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[19,21],"end":[25,6]}}});

    m.writeProperty("obj5", "montage", {"type":"expr","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[19,5],"end":[25,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/montage.js","pos":{"start":[19,5],"end":[25,6]}}});

    m.functionReturn("exports", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,1],"end":[120,39]}},"name":"exports"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[120,1],"end":[120,39]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[126,1],"end":[126,7]}},"name":"module"});

    m.readVar("gm", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[126,28],"end":[126,30]}},"name":"gm"});

    m.writeVar("exports", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[126,18],"end":[126,30]}},"name":"exports"});

    m.writeProperty("obj64", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[126,1],"end":[126,30]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[126,1],"end":[126,30]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,1],"end":[127,7]}},"name":"module"});

    m.readProperty("obj64", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,1],"end":[127,15]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,24],"end":[127,31]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,32],"end":[127,45]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,24],"end":[127,46]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,24],"end":[127,46]}},"name":"require"});

    m.writeProperty("obj3", "utils", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,1],"end":[127,46]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[127,1],"end":[127,46]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,1],"end":[128,7]}},"name":"module"});

    m.readProperty("obj64", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,1],"end":[128,15]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,26],"end":[128,33]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,34],"end":[128,49]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,26],"end":[128,50]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,26],"end":[128,50]}},"name":"require"});

    m.functionCall("exports", 1, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,26],"end":[128,52]}},"name":"exports"});

    m.initVar("proto", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,28],"end":[104,2]}},"name":"proto"});

    m.initVar("compare", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[21,28],"end":[104,2]}},"name":"compare"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}}});

    m.writeVar("compare", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"compare"});

    m.readVar("proto", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[100,7],"end":[100,12]}},"name":"proto"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[100,3],"end":[102,4]}}});

    m.readVar("compare", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[103,10],"end":[103,17]}},"name":"compare"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[103,3],"end":[103,18]}}});

    m.functionReturn("exports", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,26],"end":[128,52]}},"name":"exports"});

    m.writeProperty("obj3", "compare", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,1],"end":[128,52]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[128,1],"end":[128,52]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,1],"end":[129,7]}},"name":"module"});

    m.readProperty("obj64", "exports", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,1],"end":[129,15]}}});

    m.readVar("JSON", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,26],"end":[129,30]}},"name":"JSON"});

    m.readProperty("obj65", "parse", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,26],"end":[129,36]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,3],"end":[130,10]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,11],"end":[130,15]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,3],"end":[130,16]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,3],"end":[130,16]}},"name":"require"});

    m.readProperty("obj66", "readFileSync", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,3],"end":[130,29]}}});

    m.readVar("__dirname", {"type":"variable","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,30],"end":[130,39]}},"name":"__dirname"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,42],"end":[130,57]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,30],"end":[130,57]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,59],"end":[130,65]}}});

    m.functionCall("readFileSync", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,3],"end":[130,66]}},"name":"readFileSync"});

    m.functionReturn("readFileSync", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[130,3],"end":[130,66]}},"name":"readFileSync"});

    m.functionCall("parse", 2, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,26],"end":[131,2]}},"name":"parse"});

    m.functionReturn("parse", {"type":"functionReturn","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,26],"end":[131,2]}},"name":"parse"});

    m.readProperty("obj67", "version", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,26],"end":[131,10]}}});

    m.writeProperty("obj3", "version", {"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,1],"end":[131,10]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/index.js","pos":{"start":[129,1],"end":[131,10]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"gm-attack.js","pos":{"start":[16,10],"end":[16,23]}},"name":"require"});

    m.writeVar("gm", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[16,5],"end":[16,23]}},"name":"gm"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[16,5],"end":[16,23]}}});

    m.readVar("gm", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[19,1],"end":[19,3]}},"name":"gm"});

    m.readProperty("obj3", "compare", {"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[19,1],"end":[19,11]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[19,12],"end":[19,32]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[20,12],"end":[20,33]}}});

    m.readVar("payload", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[20,36],"end":[20,43]}},"name":"payload"});

    m.binaryOp({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[20,12],"end":[20,43]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[21,12],"end":[21,91]}}});

    m.functionCall("compare", 4, 3, {"type":"functionInvocation","location":{"fileName":"gm-attack.js","pos":{"start":[19,1],"end":[21,92]}},"name":"compare"});

    m.initVar("orig", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"orig"});

    m.initVar("compareTo", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"compareTo"});

    m.initVar("options", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"options"});

    m.initVar("cb", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"cb"});

    m.initVar("isImageMagick", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"isImageMagick"});

    m.initVar("bin", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"bin"});

    m.initVar("execCmd", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"execCmd"});

    m.initVar("tolerance", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"tolerance"});

    m.initVar("highlightColorOption", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"highlightColorOption"});

    m.initVar("highlightStyleOption", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"highlightStyleOption"});

    m.initVar("diffFilename", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"diffFilename"});

    m.initVar("diffOpt", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[22,3],"end":[98,4]}},"name":"diffOpt"});

    m.readVar("utils", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[23,12],"end":[23,17]}},"name":"utils"});

    m.readProperty("obj19", "escape", {"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[23,12],"end":[23,24]}}});

    m.readVar("orig", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[23,25],"end":[23,29]}},"name":"orig"});

    m.functionCall("escape", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[23,12],"end":[23,30]}},"name":"escape"});

    m.initVar("arg", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[10,18],"end":[12,2]}},"name":"arg"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,10],"end":[11,13]}}});

    m.readVar("String", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,22]}},"name":"String"});

    m.readVar("arg", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,23],"end":[11,26]}},"name":"arg"});

    m.functionCall("String", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,27]}},"name":"String"});

    m.functionReturn("String", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,27]}},"name":"String"});

    m.readProperty("obj68", "trim", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,32]}}});

    m.functionCall("trim", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,34]}},"name":"trim"});

    m.functionReturn("trim", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,34]}},"name":"trim"});

    m.readProperty("obj68", "replace", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,42]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,43],"end":[11,47]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,49],"end":[11,54]}}});

    m.functionCall("replace", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,55]}},"name":"replace"});

    m.functionReturn("replace", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,55]}},"name":"replace"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,10],"end":[11,55]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,58],"end":[11,61]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,10],"end":[11,61]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,3],"end":[11,62]}}});

    m.functionReturn("escape", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[23,12],"end":[23,30]}},"name":"escape"});

    m.writeVar("orig", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[23,5],"end":[23,30]}},"name":"orig"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[23,5],"end":[23,30]}}});

    m.readVar("utils", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[24,17],"end":[24,22]}},"name":"utils"});

    m.readProperty("obj19", "escape", {"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[24,17],"end":[24,29]}}});

    m.readVar("compareTo", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[24,30],"end":[24,39]}},"name":"compareTo"});

    m.functionCall("escape", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[24,17],"end":[24,40]}},"name":"escape"});

    m.initVar("arg", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[10,18],"end":[12,2]}},"name":"arg"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,10],"end":[11,13]}}});

    m.readVar("String", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,22]}},"name":"String"});

    m.readVar("arg", {"type":"variable","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,23],"end":[11,26]}},"name":"arg"});

    m.functionCall("String", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,27]}},"name":"String"});

    m.functionReturn("String", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,27]}},"name":"String"});

    m.readProperty("obj69", "trim", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,32]}}});

    m.functionCall("trim", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,34]}},"name":"trim"});

    m.functionReturn("trim", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,34]}},"name":"trim"});

    m.readProperty("obj70", "replace", {"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,42]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,43],"end":[11,47]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,49],"end":[11,54]}}});

    m.functionCall("replace", 2, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,55]}},"name":"replace"});

    m.functionReturn("replace", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,16],"end":[11,55]}},"name":"replace"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,10],"end":[11,55]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,58],"end":[11,61]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,10],"end":[11,61]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/utils.js","pos":{"start":[11,3],"end":[11,62]}}});

    m.functionReturn("escape", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[24,17],"end":[24,40]}},"name":"escape"});

    m.writeVar("compareTo", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[24,5],"end":[24,40]}},"name":"compareTo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[24,5],"end":[24,40]}}});

    m.readVar("this", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[26,25],"end":[26,29]}},"name":"this"});

    m.readProperty("obj3", "_options", {"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[26,25],"end":[26,38]}}});

    m.writeVar("isImageMagick", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[26,9],"end":[26,67]}},"name":"isImageMagick"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[26,9],"end":[26,67]}}});

    m.readVar("isImageMagick", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[28,15],"end":[28,28]}},"name":"isImageMagick"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[28,36],"end":[28,41]}}});

    m.writeVar("bin", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[28,9],"end":[28,40]}},"name":"bin"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[28,9],"end":[28,40]}}});

    m.readVar("bin", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,19],"end":[29,22]}},"name":"bin"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,25],"end":[29,47]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,19],"end":[29,47]}}});

    m.readVar("orig", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,50],"end":[29,54]}},"name":"orig"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,19],"end":[29,54]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,57],"end":[29,60]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,19],"end":[29,60]}}});

    m.readVar("compareTo", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,63],"end":[29,72]}},"name":"compareTo"});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,19],"end":[29,72]}}});

    m.writeVar("execCmd", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,9],"end":[29,72]}},"name":"execCmd"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[29,9],"end":[29,72]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[30,21],"end":[30,24]}}});

    m.writeVar("tolerance", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[30,9],"end":[30,24]}},"name":"tolerance"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[30,9],"end":[30,24]}}});

    m.readVar("options", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[32,16],"end":[32,23]}},"name":"options"});

    m.unaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[32,9],"end":[32,36]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[32,9],"end":[32,36]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[32,9],"end":[32,36]}}});

    m.readVar("isImageMagick", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[63,7],"end":[63,20]}},"name":"isImageMagick"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[63,7],"end":[63,45]}}});

    m.readVar("options", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[65,18],"end":[65,25]}},"name":"options"});

    m.unaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[65,11],"end":[65,39]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[65,11],"end":[65,39]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[65,11],"end":[65,39]}}});

    m.readVar("options", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[66,14],"end":[66,21]}},"name":"options"});

    m.writeVar("cb", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[66,9],"end":[66,21]}},"name":"cb"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[66,9],"end":[66,21]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[65,7],"end":[69,8]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[32,5],"end":[70,6]}}});

    m.readVar("exec", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,5],"end":[72,9]}},"name":"exec"});

    m.readVar("execCmd", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,10],"end":[72,17]}},"name":"execCmd"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,19],"end":[97,6]}}});

    m.functionCall("exec", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,5],"end":[97,7]}},"name":"exec"});

    m.functionReturn("exec", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,5],"end":[97,7]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,5],"end":[97,7]}}});

    m.functionReturn("compare", {"type":"functionReturn","location":{"fileName":"gm-attack.js","pos":{"start":[19,1],"end":[21,92]}},"name":"compare"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[19,1],"end":[21,92]}}});

    m.initVar("err", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,19],"end":[97,6]}},"name":"err"});

    m.initVar("stdout", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,19],"end":[97,6]}},"name":"stdout"});

    m.initVar("stderr", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,19],"end":[97,6]}},"name":"stderr"});

    m.initVar("regex", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,19],"end":[97,6]}},"name":"regex"});

    m.initVar("match", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,19],"end":[97,6]}},"name":"match"});

    m.initVar("equality", {"type":"declaration","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[72,19],"end":[97,6]}},"name":"equality"});

    m.readVar("isImageMagick", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[74,11],"end":[74,24]}},"name":"isImageMagick"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[74,7],"end":[82,8]}}});

    m.readVar("err", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[83,11],"end":[83,14]}},"name":"err"});

    m.readVar("cb", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[84,16],"end":[84,18]}},"name":"cb"});

    m.readVar("err", {"type":"variable","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[84,19],"end":[84,22]}},"name":"err"});

    m.functionCall("", 0, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[84,16],"end":[84,23]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[21,26],"end":[21,33]}},"name":"console"});

    m.readProperty("obj71", "log", {"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[21,26],"end":[21,37]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[21,38],"end":[21,70]}}});

    m.readVar("payload", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[21,73],"end":[21,80]}},"name":"payload"});

    m.binaryOp({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[21,38],"end":[21,80]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"gm-attack.js","pos":{"start":[21,26],"end":[21,81]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"gm-attack.js","pos":{"start":[21,26],"end":[21,81]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[21,26],"end":[21,81]}}});

    m.readVar("done", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[21,83],"end":[21,87]}},"name":"done"});

    m.functionCall("done", 0, 0, {"type":"functionInvocation","location":{"fileName":"gm-attack.js","pos":{"start":[21,83],"end":[21,89]}},"name":"done"});

    m.readVar("console", {"type":"variable","location":{"fileName":"gm-attack.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"});

    m.readProperty("obj71", "log", {"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[2,5],"end":[2,16]}}});

    m.literal({"type":"literal","location":{"fileName":"gm-attack.js","pos":{"start":[2,17],"end":[2,24]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"gm-attack.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"gm-attack.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[2,5],"end":[2,25]}}});

    m.functionReturn("done", {"type":"functionReturn","location":{"fileName":"gm-attack.js","pos":{"start":[21,83],"end":[21,89]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"gm-attack.js","pos":{"start":[21,83],"end":[21,89]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/gm/lib/compare.js","pos":{"start":[84,16],"end":[84,23]}}});

    m.endExecution();

};

