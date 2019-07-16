exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("test");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.writeVar("test");

    m.push(false);

    m.writeVar("a");

    m.readVar("test");

    m.functionCall("test", 0, 0);

    m.push(false);

    m.writeVar("z");

    m.endExecution();

};

