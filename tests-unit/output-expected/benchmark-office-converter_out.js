exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("fun");

    m.initVar("DUMMY_FILE");

    m.initVar("command");

    m.initVar("converter");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("fun");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("DUMMY_FILE");

    m.push(false);

    m.readVar("DUMMY_FILE");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("command");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("command");

    m.readVar("val");

    m.binaryOp();

    m.writeVar("command");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("exec");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "exec");

    m.writeVar("exec");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj1", "exports");

    m.functionCall("", 0, 0);

    m.initVar("generatePdf");

    m.initVar("generateHtml");

    m.initVar("generate");

    m.push(false);

    m.writeVar("generatePdf");

    m.push(false);

    m.writeVar("generateHtml");

    m.push(false);

    m.writeVar("generate");

    m.readVar("generateHtml");

    m.readVar("generatePdf");

    m.writeProperty("obj2", "generatePdf");

    m.writeProperty("obj2", "generateHtml");

    m.push(false);

    m.writeVar("converter");

    m.readVar("console");

    m.readProperty("obj3", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("converter");

    m.readProperty("obj2", "generatePdf");

    m.push(false);

    m.readVar("command");

    m.binaryOp();

    m.readVar("fun");

    m.functionCall("generatePdf", 2, 2);

    m.initVar("fileName");

    m.initVar("next");

    m.readVar("generate");

    m.readVar("fileName");

    m.readVar("next");

    m.push(false);

    m.functionCall("generate", 3, 3);

    m.initVar("fileName");

    m.initVar("next");

    m.initVar("outputType");

    m.readVar("exec");

    m.push(false);

    m.readVar("outputType");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("fileName");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.readVar("console");

    m.readProperty("obj3", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj3", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.initVar("error");

    m.initVar("stdout");

    m.initVar("stderr");

    m.initVar("outputFile");

    m.readVar("error");

    m.readVar("next");

    m.readVar("error");

    m.functionCall("fun", 2, 1);

    m.initVar("err");

    m.initVar("result");

    m.readVar("err");

    m.unaryOp();

    m.endExecution();

};

