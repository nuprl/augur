exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("obj");

    m.initVar("z");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeProperty("obj0", "id");

    m.push(false);

    m.writeVar("obj");

    m.readVar("obj");

    m.readProperty("obj0", "id");

    m.readVar("obj");

    m.readProperty("obj0", "id");

    m.readVar("a");

    m.functionCall("id", 1, 1);

    m.initVar("x");

    m.readVar("x");

    m.functionCall("id", 1, 1);

    m.initVar("x");

    m.readVar("x");

    m.writeVar("z");

    m.endExecution();

};

