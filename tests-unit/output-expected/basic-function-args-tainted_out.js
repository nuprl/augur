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

    m.readVar("a");

    m.push(false);

    m.functionCall("identity", 2, 2);

    m.initVar("x");

    m.initVar("y");

    m.readVar("x");

    m.writeVar("z");

    m.endExecution();

};

