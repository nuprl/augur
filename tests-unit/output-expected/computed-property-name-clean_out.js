exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("a");

    m.initVar("yourCreditCardNumber");

    m.initVar("obj");

    m.push(false);

    m.writeVar("a");

    m.push(false);

    m.writeVar("yourCreditCardNumber");

    m.push(false);

    m.writeVar("obj");

    m.readVar("obj");

    m.readVar("yourCreditCardNumber");

    m.push(false);

    m.writeProperty("obj0", "not a real credit card number");

    m.readVar("obj");

    m.writeVar("key");

    m.initVar("z");

    m.readVar("key");

    m.writeVar("z");

    m.endExecution();

};

