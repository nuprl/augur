exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("identity");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.writeVar("identity");

    m.push(false);

    m.writeVar("a");

    m.readVar("identity");

    m.push(false);

    m.readVar("a");

    m.functionCall("identity", 1, 2);

    m.initVar("x");

    m.readVar("x");

    m.writeVar("z");

    m.endExecution();

};

