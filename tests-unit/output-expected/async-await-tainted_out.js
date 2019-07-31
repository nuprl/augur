exports.drive = (m) => {

    m.push(false);

    m.conditionalEnd();

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("id");

    m.initVar("assignToZ");

    m.initVar("a");

    m.initVar("z");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("id");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("assignToZ");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("a");

    m.push(false);

    m.conditionalEnd();

    m.writeVar("z");

    m.readVar("assignToZ");

    m.conditionalEnd();

    m.readVar("a");

    m.functionCall("assignToZ", 1, 1);

    m.conditionalEnd();

    m.initVar("x");

    m.unaryOp();

    m.readVar("id");

    m.conditionalEnd();

    m.readVar("x");

    m.functionCall("id", 1, 1);

    m.conditionalEnd();

    m.initVar("x");

    m.readVar("x");

    m.conditionalEnd();

    m.conditionalEnd();

    m.conditionalEnd();

    m.unaryOp();

    m.conditionalEnd();

    m.writeVar("z");

    m.conditionalEnd();

    m.endExecution();

};

