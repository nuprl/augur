exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

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

    m.push(false);

    m.readVar("inc");

    m.push(false);

    m.functionCall(1, 1);

    m.initVar("x");

    m.readVar("a");

    m.writeVar("x");

    m.push(false);

    m.functionCall(2, 2);

    m.initVar("g");

    m.initVar("h");

    m.readVar("g");

    m.writeVar("z");

    m.endExecution();

};

