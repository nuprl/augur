exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("inc");

    m.initVar("first");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.writeVar("inc");

    m.push(false);

    m.writeVar("first");

    m.push(false);

    m.writeVar("a");

    m.readVar("first");

    m.readVar("a");

    m.readVar("inc");

    m.push(false);

    m.functionCall("inc", 1, 1);

    m.initVar("x");

    m.push(false);

    m.writeVar("x");

    m.push(false);

    m.functionCall("first", 2, 2);

    m.initVar("g");

    m.initVar("h");

    m.readVar("g");

    m.writeVar("z");

    m.endExecution();

};

