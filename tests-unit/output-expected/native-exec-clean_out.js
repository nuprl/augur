exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("exec");

    m.initVar("a");

    m.initVar("command");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "exec");

    m.writeVar("exec");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("command");

    m.readVar("exec");

    m.readVar("command");

    m.functionCall("exec", 0, 1);

    m.endExecution();

};

