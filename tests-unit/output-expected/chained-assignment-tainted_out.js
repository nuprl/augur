exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("b");

    m.initVar("c");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("b");

    m.push(false);

    m.writeVar("c");

    m.push(false);

    m.writeVar("z");

    m.readVar("a");

    m.writeVar("b");

    m.writeVar("c");

    m.writeVar("z");

    m.endExecution();

};

