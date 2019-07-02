exports.drive = (m) => {

    m.functionCall(0, 0);

    m.push(false);

    m.functionCall(5, 5);

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

    m.functionCall(1, 1);

    m.initVar("data");

    m.initVar("message");

    m.initVar("output");

    m.push(false);

    m.writeVar("message");

    m.readVar("message");

    m.writeVar("output");

    m.endExecution();

};

