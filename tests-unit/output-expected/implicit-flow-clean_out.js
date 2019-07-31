exports.drive = (m) => {

    m.push(false);

    m.conditionalEnd();

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("a");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("z");

    m.readVar("a");

    m.conditionalEnd();

    m.conditional(false);

    m.endExecution();

};

