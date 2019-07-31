exports.drive = (m) => {

    m.push(false);

    m.conditionalEnd();

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("test");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("test");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("a");

    m.readVar("test");

    m.functionCall("test", 0, 0);

    m.conditionalEnd();

    m.push(false);

    m.conditionalEnd();

    m.conditionalEnd();

    m.writeVar("z");

    m.endExecution();

};

