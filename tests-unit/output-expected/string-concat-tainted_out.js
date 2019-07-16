exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("sendToThirdParty");

    m.initVar("input");

    m.push(false);

    m.writeVar("sendToThirdParty");

    m.push(false);

    m.writeVar("input");

    m.readVar("sendToThirdParty");

    m.readVar("input");

    m.functionCall("sendToThirdParty", 1, 1);

    m.initVar("data");

    m.initVar("message");

    m.initVar("output");

    m.push(false);

    m.readVar("data");

    m.binaryOp();

    m.writeVar("message");

    m.readVar("message");

    m.writeVar("output");

    m.endExecution();

};

