exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("child_process");

    m.initVar("a");

    m.initVar("command");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("child_process");

    m.writeProperty("obj0", "0");

    m.push(false);

    m.writeVar("a");

    m.readVar("a");

    m.push(false);

    m.readVar("process");

    m.readProperty("obj1", "argv");

    m.push(false);

    m.readProperty("obj2", 2);

    m.writeProperty("obj0", 1);

    m.readVar("a");

    m.readProperty("obj0", "reduce");

    m.push(false);

    m.push(false);

    m.functionCall("reduce", 1, 2);

    m.initVar("x");

    m.initVar("y");

    m.readVar("x");

    m.readVar("y");

    m.binaryOp();

    m.initVar("x");

    m.initVar("y");

    m.readVar("x");

    m.readVar("y");

    m.binaryOp();

    m.writeVar("command");

    m.readVar("child_process");

    m.readProperty("obj3", "exec");

    m.readVar("command");

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.initVar("err");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("err");

    m.endExecution();

};

