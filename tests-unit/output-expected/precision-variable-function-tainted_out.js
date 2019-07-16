exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("z");

    m.readVar("z");

    m.readVar("a");

    m.functionCall("z", 1, 1);

    m.initVar("x");

    m.readVar("x");

    m.push(false);

    m.writeVar("z");

    m.endExecution();

};

