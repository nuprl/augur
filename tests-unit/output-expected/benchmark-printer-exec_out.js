exports.drive = (m) => {

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("dummySource");

    m.initVar("DUMMY_FILE");

    m.initVar("payload");

    m.initVar("printer");

    m.push(false);

    m.writeVar("dummySource");

    m.push(false);

    m.writeVar("done");

    m.push(false);

    m.writeVar("DUMMY_FILE");

    m.push(false);

    m.readVar("DUMMY_FILE");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("payload");

    m.readVar("dummySource");

    m.push(false);

    m.functionCall("dummySource", 1, 1);

    m.initVar("val");

    m.readVar("payload");

    m.readVar("val");

    m.binaryOp();

    m.writeVar("payload");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("getDefaultPrinterName");

    m.initVar("getPrinter");

    m.initVar("getPrinterDriverOptions");

    m.initVar("getSelectedPaperSize");

    m.initVar("getJob");

    m.initVar("setJob");

    m.initVar("getPrinters");

    m.initVar("correctPrinterinfo");

    m.initVar("printDirect");

    m.initVar("printFile");

    m.initVar("printer_helper");

    m.initVar("fs");

    m.initVar("child_process");

    m.initVar("os");

    m.initVar("path");

    m.initVar("native_lib_path");

    m.push(false);

    m.writeVar("getDefaultPrinterName");

    m.push(false);

    m.writeVar("getPrinter");

    m.push(false);

    m.writeVar("getPrinterDriverOptions");

    m.push(false);

    m.writeVar("getSelectedPaperSize");

    m.push(false);

    m.writeVar("getJob");

    m.push(false);

    m.writeVar("setJob");

    m.push(false);

    m.writeVar("getPrinters");

    m.push(false);

    m.writeVar("correctPrinterinfo");

    m.push(false);

    m.writeVar("printDirect");

    m.push(false);

    m.writeVar("printFile");

    m.push(false);

    m.writeVar("printer_helper");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("child_process");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("path");

    m.readProperty("obj0", "join");

    m.readVar("__dirname");

    m.push(false);

    m.functionCall("join", 0, 2);

    m.writeVar("native_lib_path");

    m.readVar("fs");

    m.readProperty("obj1", "existsSync");

    m.readVar("native_lib_path");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("require");

    m.readVar("native_lib_path");

    m.functionCall("require", 1, 1);

    m.endExecution();

};

