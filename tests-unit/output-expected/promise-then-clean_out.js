exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("identity");

    m.initVar("a");

    m.push(false);

    m.writeVar("identity");

    m.push(false);

    m.writeVar("a");

    m.readVar("identity");

    m.push(false);

    m.functionCall("identity", 1, 1);

    m.initVar("x");

    m.readVar("Promise");

    m.push(false);

    m.functionCall("Promise", 1, 1);

    m.initVar("resolve");

    m.readVar("resolve");

    m.readVar("x");

    m.functionCall("", 1, 1);

    m.readProperty("obj0", "then");

    m.push(false);

    m.functionCall("then", 2, 1);

    m.initVar("v");

    m.initVar("z");

    m.readVar("v");

    m.writeVar("z");

    m.endExecution();

};

