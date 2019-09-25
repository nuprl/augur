exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[1,1],"end":[10,3]}}});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[1,1],"end":[10,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"__dirname"});

    m.initVar("child_process", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"child_process"});

    m.initVar("a", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"a"});

    m.initVar("command", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[1,2],"end":[10,2]}},"name":"command"});

    m.readVar("require", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[1,82],"end":[1,89]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[1,90],"end":[1,105]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"paper-example.js","pos":{"start":[1,82],"end":[1,106]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"paper-example.js","pos":{"start":[1,82],"end":[1,106]}},"name":"require"});

    m.writeVar("child_process", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[1,66],"end":[1,106]}},"name":"child_process"});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[1,66],"end":[1,106]}}});

    m.writeProperty("obj0", "0", {});

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[2,9],"end":[2,16]}}});

    m.writeVar("a", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[2,5],"end":[2,16]}},"name":"a"});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[2,5],"end":[2,16]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[3,1],"end":[3,2]}},"name":"a"});

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[3,3],"end":[3,4]}}});

    m.readVar("process", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[3,8],"end":[3,15]}},"name":"process"});

    m.readProperty("obj1", "argv", {"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[3,8],"end":[3,20]}}});

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[3,21],"end":[3,22]}}});

    m.readProperty("obj2", 2, {"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[3,8],"end":[3,23]}}});

    m.writeProperty("obj0", 1, {"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[3,1],"end":[3,23]}}});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[3,1],"end":[3,23]}}});

    m.readVar("a", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[4,15],"end":[4,16]}},"name":"a"});

    m.readProperty("obj0", "reduce", {"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[4,15],"end":[4,23]}}});

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[4,24],"end":[4,53]}}});

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[4,55],"end":[4,58]}}});

    m.functionCall("reduce", 1, 2, {"type":"functionInvocation","location":{"fileName":"paper-example.js","pos":{"start":[4,15],"end":[4,59]}},"name":"reduce"});

    m.initVar("x", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[4,24],"end":[4,53]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[4,24],"end":[4,53]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[4,46],"end":[4,47]}},"name":"x"});

    m.readVar("y", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[4,50],"end":[4,51]}},"name":"y"});

    m.binaryOp({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[4,46],"end":[4,51]}}});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[4,39],"end":[4,51]}}});

    m.initVar("x", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[4,24],"end":[4,53]}},"name":"x"});

    m.initVar("y", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[4,24],"end":[4,53]}},"name":"y"});

    m.readVar("x", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[4,46],"end":[4,47]}},"name":"x"});

    m.readVar("y", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[4,50],"end":[4,51]}},"name":"y"});

    m.binaryOp({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[4,46],"end":[4,51]}}});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[4,39],"end":[4,51]}}});

    m.functionReturn("reduce", {"type":"functionReturn","location":{"fileName":"paper-example.js","pos":{"start":[4,15],"end":[4,59]}},"name":"reduce"});

    m.writeVar("command", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[4,5],"end":[4,59]}},"name":"command"});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[4,5],"end":[4,59]}}});

    m.readVar("child_process", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[5,1],"end":[5,14]}},"name":"child_process"});

    m.readProperty("obj3", "exec", {"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[5,1],"end":[5,19]}}});

    m.readVar("command", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[5,20],"end":[5,27]}},"name":"command"});

    m.literal({"type":"literal","location":{"fileName":"paper-example.js","pos":{"start":[5,29],"end":[7,2]}}});

    m.functionCall("exec", 3, 2, {"type":"functionInvocation","location":{"fileName":"paper-example.js","pos":{"start":[5,1],"end":[7,3]}},"name":"exec"});

    m.functionReturn("exec", {"type":"functionReturn","location":{"fileName":"paper-example.js","pos":{"start":[5,1],"end":[7,3]}},"name":"exec"});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[5,1],"end":[7,3]}}});

    m.initVar("err", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[5,29],"end":[7,2]}},"name":"err"});

    m.initVar("stdout", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[5,29],"end":[7,2]}},"name":"stdout"});

    m.initVar("stderr", {"type":"declaration","location":{"fileName":"paper-example.js","pos":{"start":[5,29],"end":[7,2]}},"name":"stderr"});

    m.readVar("err", {"type":"variable","location":{"fileName":"paper-example.js","pos":{"start":[6,11],"end":[6,14]}},"name":"err"});

    m.pop({"type":"expr","location":{"fileName":"paper-example.js","pos":{"start":[6,6],"end":[6,53]}}});

    m.endExecution();

};

