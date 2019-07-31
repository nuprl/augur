exports.drive = (m) => {

    m.push(false);

    m.conditionalEnd();

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

    m.conditionalEnd();

    m.writeVar("a");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("b");

    m.readVar("b");

    m.conditionalEnd();

    m.writeVar("c");

    m.readVar("b");

    m.conditionalEnd();

    m.push(false);

    m.conditionalEnd();

    m.writeProperty("obj0", "field");

    m.conditionalEnd();

    m.readVar("c");

    m.conditionalEnd();

    m.readProperty("obj0", "field");

    m.conditionalEnd();

    m.writeVar("z");

    m.endExecution();

};

