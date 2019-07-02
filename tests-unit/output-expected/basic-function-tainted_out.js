exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

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

    m.functionCall(0, 0);

    m.initVar("b");

    m.push(false);

    m.writeVar("b");

    m.readVar("a");

    m.writeVar("z");

    m.endExecution();

};

