exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[1,1],"end":[38,3]}}});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[1,1],"end":[38,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"dummySource"});

    m.initVar("DUMMY_FILE", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"DUMMY_FILE"});

    m.initVar("command", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"command"});

    m.initVar("osenv", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"osenv"});

    m.initVar("filename", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"filename"});

    m.initVar("hostname", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[1,2],"end":[38,2]}},"name":"hostname"});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[10,1],"end":[12,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[10,1],"end":[12,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[6,18],"end":[6,27]}}});

    m.writeVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[6,5],"end":[6,26]}},"name":"DUMMY_FILE"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[6,5],"end":[6,26]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[8,15],"end":[8,25]}}});

    m.readVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[8,28],"end":[8,38]}},"name":"DUMMY_FILE"});

    m.binaryOp({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[8,15],"end":[8,38]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[8,41],"end":[8,44]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[8,15],"end":[8,44]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[8,5],"end":[8,43]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[8,5],"end":[8,43]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[14,1],"end":[14,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[14,13],"end":[14,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[10,1],"end":[12,2]}},"name":"val"});

    m.readVar("command", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[11,5],"end":[11,12]}},"name":"command"});

    m.readVar("val", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[11,16],"end":[11,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[11,5],"end":[11,12]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[11,5],"end":[11,19]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[11,5],"end":[11,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[14,1],"end":[14,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[14,1],"end":[14,17]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[16,13],"end":[16,20]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[16,21],"end":[16,28]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[16,13],"end":[16,29]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,1],"end":[74,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,1],"end":[74,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"__dirname"});

    m.initVar("memo", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"memo"});

    m.initVar("isWindows", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"isWindows"});

    m.initVar("path", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"path"});

    m.initVar("exec", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"exec"});

    m.initVar("osTmpdir", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"osTmpdir"});

    m.initVar("osHomedir", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,2],"end":[74,2]}},"name":"osHomedir"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}}});

    m.writeVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"memo"});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,78],"end":[1,85]}},"name":"process"});

    m.readProperty("obj0", "platform", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,78],"end":[1,94]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,78],"end":[1,106]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,78],"end":[1,106]}}});

    m.writeVar("isWindows", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,66],"end":[1,105]}},"name":"isWindows"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[1,66],"end":[1,105]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[2,12],"end":[2,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[2,20],"end":[2,26]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[2,12],"end":[2,27]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[2,12],"end":[2,27]}},"name":"require"});

    m.writeVar("path", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[2,5],"end":[2,27]}},"name":"path"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[2,5],"end":[2,27]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[3,12],"end":[3,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[3,20],"end":[3,35]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[3,12],"end":[3,36]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[3,12],"end":[3,36]}},"name":"require"});

    m.readProperty("obj1", "exec", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[3,12],"end":[3,41]}}});

    m.writeVar("exec", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[3,5],"end":[3,41]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[3,5],"end":[3,41]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[4,16],"end":[4,23]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[4,24],"end":[4,35]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[4,16],"end":[4,36]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,1],"end":[27,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,1],"end":[27,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,2],"end":[27,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,2],"end":[27,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,2],"end":[27,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,2],"end":[27,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,2],"end":[27,2]}},"name":"__dirname"});

    m.initVar("isWindows", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,2],"end":[27,2]}},"name":"isWindows"});

    m.initVar("trailingSlashRe", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,2],"end":[27,2]}},"name":"trailingSlashRe"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[2,17],"end":[2,24]}},"name":"process"});

    m.readProperty("obj0", "platform", {"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[2,17],"end":[2,33]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[2,17],"end":[2,45]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[2,17],"end":[2,45]}}});

    m.writeVar("isWindows", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[2,5],"end":[2,44]}},"name":"isWindows"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[2,5],"end":[2,44]}}});

    m.readVar("isWindows", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[3,23],"end":[3,32]}},"name":"isWindows"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[3,47],"end":[3,53]}}});

    m.writeVar("trailingSlashRe", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[3,5],"end":[3,53]}},"name":"trailingSlashRe"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[3,5],"end":[3,53]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[6,1],"end":[6,7]}},"name":"module"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[6,18],"end":[25,2]}}});

    m.writeProperty("obj2", "exports", {"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[6,1],"end":[25,2]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-tmpdir/index.js","pos":{"start":[6,1],"end":[25,2]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[4,16],"end":[4,36]}},"name":"require"});

    m.writeVar("osTmpdir", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[4,5],"end":[4,36]}},"name":"osTmpdir"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[4,5],"end":[4,36]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[5,17],"end":[5,24]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[5,25],"end":[5,37]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[5,17],"end":[5,38]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,1],"end":[26,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,1],"end":[26,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,2],"end":[26,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,2],"end":[26,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,2],"end":[26,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,2],"end":[26,2]}},"name":"__dirname"});

    m.initVar("homedir", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,2],"end":[26,2]}},"name":"homedir"});

    m.initVar("os", {"type":"declaration","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,2],"end":[26,2]}},"name":"os"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[4,1],"end":[22,2]}}});

    m.writeVar("homedir", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[4,1],"end":[22,2]}},"name":"homedir"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[1,62],"end":[1,74]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[2,10],"end":[2,17]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[2,18],"end":[2,22]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[2,10],"end":[2,23]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[2,10],"end":[2,23]}},"name":"require"});

    m.writeVar("os", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[2,5],"end":[2,23]}},"name":"os"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[2,5],"end":[2,23]}}});

    m.readVar("module", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,1],"end":[24,7]}},"name":"module"});

    m.readVar("os", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,25],"end":[24,27]}},"name":"os"});

    m.readProperty("obj3", "homedir", {"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,25],"end":[24,35]}}});

    m.unaryOp({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,18],"end":[24,50]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,18],"end":[24,50]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,18],"end":[24,50]}}});

    m.readVar("os", {"type":"variable","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,53],"end":[24,55]}},"name":"os"});

    m.readProperty("obj3", "homedir", {"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,53],"end":[24,63]}}});

    m.writeProperty("obj4", "exports", {"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,1],"end":[24,73]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/node_modules/os-homedir/index.js","pos":{"start":[24,1],"end":[24,73]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[5,17],"end":[5,38]}},"name":"require"});

    m.writeVar("osHomedir", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[5,5],"end":[5,38]}},"name":"osHomedir"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[5,5],"end":[5,38]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[34,1],"end":[34,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[34,6],"end":[34,12]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[34,14],"end":[39,2]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[39,4],"end":[39,12]}}});

    m.functionCall("memo", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[34,1],"end":[39,13]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "user", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[34,1],"end":[39,13]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[34,1],"end":[39,13]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[41,1],"end":[41,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[41,6],"end":[41,14]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[41,16],"end":[43,2]}}});

    m.functionCall("memo", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[41,1],"end":[43,3]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "prompt", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[41,1],"end":[43,3]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[41,1],"end":[43,3]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[45,1],"end":[45,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[45,6],"end":[45,16]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[45,18],"end":[47,2]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[47,4],"end":[47,14]}}});

    m.functionCall("memo", 3, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[45,1],"end":[47,15]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "hostname", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[45,1],"end":[47,15]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[45,1],"end":[47,15]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[49,1],"end":[49,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[49,6],"end":[49,14]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[49,16],"end":[51,2]}}});

    m.functionCall("memo", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[49,1],"end":[51,3]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "tmpdir", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[49,1],"end":[51,3]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[49,1],"end":[51,3]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[53,1],"end":[53,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[53,6],"end":[53,12]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[53,14],"end":[55,2]}}});

    m.functionCall("memo", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[53,1],"end":[55,3]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "home", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[53,1],"end":[55,3]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[53,1],"end":[55,3]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[57,1],"end":[57,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[57,6],"end":[57,12]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[57,14],"end":[61,2]}}});

    m.functionCall("memo", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[57,1],"end":[61,3]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "path", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[57,1],"end":[61,3]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[57,1],"end":[61,3]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[63,1],"end":[63,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[63,6],"end":[63,14]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[63,16],"end":[67,2]}}});

    m.functionCall("memo", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[63,1],"end":[67,3]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "editor", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[63,1],"end":[67,3]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[63,1],"end":[67,3]}}});

    m.readVar("memo", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[69,1],"end":[69,5]}},"name":"memo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[69,6],"end":[69,13]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[69,15],"end":[72,2]}}});

    m.functionCall("memo", 3, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[69,1],"end":[72,3]}},"name":"memo"});

    m.initVar("key", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"key"});

    m.initVar("lookup", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"lookup"});

    m.initVar("fallback", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fallback"});

    m.initVar("fell", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"fell"});

    m.initVar("falling", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[11,1],"end":[32,2]}},"name":"falling"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,14],"end":[12,19]}}});

    m.writeVar("fell", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}},"name":"fell"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[12,7],"end":[12,19]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,17],"end":[13,22]}}});

    m.writeVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}},"name":"falling"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[13,7],"end":[13,22]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[14,10]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,11],"end":[14,14]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}}});

    m.writeProperty("obj5", "shell", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,3],"end":[31,4]}}});

    m.functionReturn("memo", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[69,1],"end":[72,3]}},"name":"memo"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[69,1],"end":[72,3]}}});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[16,13],"end":[16,29]}},"name":"require"});

    m.writeVar("osenv", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[16,5],"end":[16,29]}},"name":"osenv"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[16,5],"end":[16,29]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[20,16],"end":[20,28]}}});

    m.writeVar("filename", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[20,5],"end":[20,27]}},"name":"filename"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[20,5],"end":[20,27]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[21,15],"end":[21,30]}}});

    m.writeVar("command", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[21,5],"end":[21,29]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[21,5],"end":[21,29]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[23,1],"end":[23,8]}},"name":"console"});

    m.readProperty("obj6", "log", {"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[23,1],"end":[23,12]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[23,13],"end":[23,45]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[23,1],"end":[23,46]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[23,1],"end":[23,46]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[23,1],"end":[23,46]}}});

    m.readVar("osenv", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[25,16],"end":[25,21]}},"name":"osenv"});

    m.readProperty("obj5", "hostname", {"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[25,16],"end":[25,30]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[25,31],"end":[28,2]}}});

    m.readVar("filename", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[28,4],"end":[28,12]}},"name":"filename"});

    m.readVar("command", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[28,13],"end":[28,20]}},"name":"command"});

    m.binaryOp({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[28,4],"end":[28,20]}}});

    m.functionCall("", 1, 2, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[25,16],"end":[28,21]}}});

    m.initVar("cb", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}},"name":"cb"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[14,18],"end":[31,4]}},"name":"val"});

    m.readVar("lookup", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[15,15],"end":[15,21]}},"name":"lookup"});

    m.functionCall("", 0, 0, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[15,15],"end":[15,23]}}});

    m.readVar("isWindows", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[46,10],"end":[46,19]}},"name":"isWindows"});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[46,49],"end":[46,56]}},"name":"process"});

    m.readProperty("obj0", "env", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[46,49],"end":[46,60]}}});

    m.readProperty("obj7", "HOSTNAME", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[46,49],"end":[46,69]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[46,3],"end":[46,69]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[15,15],"end":[15,23]}}});

    m.writeVar("val", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[15,9],"end":[15,23]}},"name":"val"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[15,9],"end":[15,23]}}});

    m.readVar("val", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[16,10],"end":[16,13]}},"name":"val"});

    m.unaryOp({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[16,9],"end":[16,13]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[16,5],"end":[24,6]}}});

    m.readVar("exports", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[25,5],"end":[25,12]}},"name":"exports"});

    m.readVar("key", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[25,13],"end":[25,16]}},"name":"key"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[25,20],"end":[28,6]}}});

    m.writeProperty("obj5", "hostname", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[25,5],"end":[28,6]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[25,5],"end":[28,6]}}});

    m.readVar("cb", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,9],"end":[29,11]}},"name":"cb"});

    m.readVar("falling", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,16],"end":[29,23]}},"name":"falling"});

    m.unaryOp({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,15],"end":[29,23]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,25],"end":[29,32]}},"name":"process"});

    m.readProperty("obj0", "nextTick", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,25],"end":[29,41]}}});

    m.readVar("cb", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,42],"end":[29,44]}},"name":"cb"});

    m.readProperty("obj8", "bind", {"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,42],"end":[29,49]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,50],"end":[29,54]}}});

    m.literal({"type":"literal","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,56],"end":[29,60]}}});

    m.readVar("val", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,62],"end":[29,65]}},"name":"val"});

    m.functionCall("bind", 1, 3, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,42],"end":[29,66]}},"name":"bind"});

    m.functionReturn("bind", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,42],"end":[29,66]}},"name":"bind"});

    m.functionCall("nextTick", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,25],"end":[29,67]}},"name":"nextTick"});

    m.functionReturn("nextTick", {"type":"functionReturn","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,25],"end":[29,67]}},"name":"nextTick"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,25],"end":[29,67]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[29,5],"end":[29,67]}}});

    m.readVar("val", {"type":"variable","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[30,12],"end":[30,15]}},"name":"val"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/osenv/osenv.js","pos":{"start":[30,5],"end":[30,15]}}});

    m.functionReturn("", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[25,16],"end":[28,21]}}});

    m.writeVar("hostname", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[25,5],"end":[28,21]}},"name":"hostname"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[25,5],"end":[28,21]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[30,1],"end":[30,8]}},"name":"console"});

    m.readProperty("obj6", "log", {"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[30,1],"end":[30,12]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[30,13],"end":[30,26]}}});

    m.readVar("hostname", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[30,29],"end":[30,37]}},"name":"hostname"});

    m.binaryOp({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[30,13],"end":[30,37]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[30,1],"end":[30,38]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[30,1],"end":[30,38]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[30,1],"end":[30,38]}}});

    m.readVar("console", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[32,1],"end":[32,8]}},"name":"console"});

    m.readProperty("obj6", "log", {"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[32,1],"end":[32,12]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[32,13],"end":[32,44]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[32,1],"end":[32,45]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[32,1],"end":[32,45]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[32,1],"end":[32,45]}}});

    m.readVar("done", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[34,1],"end":[34,5]}},"name":"done"});

    m.functionCall("done", 0, 0, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[34,1],"end":[34,7]}},"name":"done"});

    m.readVar("console", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[2,5],"end":[2,12]}},"name":"console"});

    m.readProperty("obj6", "log", {"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[2,5],"end":[2,16]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[2,17],"end":[2,24]}}});

    m.functionCall("bound log", 0, 1, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[2,5],"end":[2,25]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[2,5],"end":[2,25]}}});

    m.functionReturn("done", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[34,1],"end":[34,7]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[34,1],"end":[34,7]}}});

    m.initVar("er", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[25,31],"end":[28,2]}},"name":"er"});

    m.initVar("hostname", {"type":"declaration","location":{"fileName":"osenv.js","pos":{"start":[25,31],"end":[28,2]}},"name":"hostname"});

    m.readVar("er", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[26,7],"end":[26,9]}},"name":"er"});

    m.readVar("console", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[27,8],"end":[27,15]}},"name":"console"});

    m.readProperty("obj6", "log", {"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[27,8],"end":[27,19]}}});

    m.literal({"type":"literal","location":{"fileName":"osenv.js","pos":{"start":[27,20],"end":[27,50]}}});

    m.readVar("hostname", {"type":"variable","location":{"fileName":"osenv.js","pos":{"start":[27,52],"end":[27,60]}},"name":"hostname"});

    m.functionCall("bound log", 0, 2, {"type":"functionInvocation","location":{"fileName":"osenv.js","pos":{"start":[27,8],"end":[27,61]}},"name":"bound log"});

    m.functionReturn("bound log", {"type":"functionReturn","location":{"fileName":"osenv.js","pos":{"start":[27,8],"end":[27,61]}},"name":"bound log"});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[27,8],"end":[27,61]}}});

    m.pop({"type":"expr","location":{"fileName":"osenv.js","pos":{"start":[26,3],"end":[27,61]}}});

    m.endExecution();

};

