exports.drive = (m) => {

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[1,1],"end":[29,3]}}});

    m.pop({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[1,1],"end":[29,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"__dirname"});

    m.initVar("dummySource", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"dummySource"});

    m.initVar("DUMMY_FILE", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"DUMMY_FILE"});

    m.initVar("payload", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"payload"});

    m.initVar("printer", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[1,2],"end":[29,2]}},"name":"printer"});

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[9,1],"end":[11,2]}}});

    m.writeVar("dummySource", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[9,1],"end":[11,2]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[1,69],"end":[3,2]}}});

    m.writeVar("done", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[1,62],"end":[3,2]}},"name":"done"});

    m.pop({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[1,62],"end":[3,2]}}});

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[5,18],"end":[5,27]}}});

    m.writeVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[5,5],"end":[5,26]}},"name":"DUMMY_FILE"});

    m.pop({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[5,5],"end":[5,26]}}});

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[7,15],"end":[7,25]}}});

    m.readVar("DUMMY_FILE", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[7,28],"end":[7,38]}},"name":"DUMMY_FILE"});

    m.binaryOp({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[7,15],"end":[7,38]}}});

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[7,41],"end":[7,44]}}});

    m.binaryOp({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[7,15],"end":[7,44]}}});

    m.writeVar("payload", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[7,5],"end":[7,43]}},"name":"payload"});

    m.pop({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[7,5],"end":[7,43]}}});

    m.readVar("dummySource", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[13,1],"end":[13,12]}},"name":"dummySource"});

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[13,13],"end":[13,16]}}});

    m.functionCall("dummySource", 1, 1, {"type":"functionInvocation","location":{"fileName":"printer-exec.js","pos":{"start":[13,1],"end":[13,17]}},"name":"dummySource"});

    m.initVar("val", {"type":"declaration","location":{"fileName":"printer-exec.js","pos":{"start":[9,1],"end":[11,2]}},"name":"val"});

    m.readVar("payload", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[10,5],"end":[10,12]}},"name":"payload"});

    m.readVar("val", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[10,16],"end":[10,19]}},"name":"val"});

    m.binaryOp({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[10,5],"end":[10,12]}}});

    m.writeVar("payload", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[10,5],"end":[10,19]}},"name":"payload"});

    m.pop({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[10,5],"end":[10,19]}}});

    m.functionReturn("dummySource", {"type":"functionReturn","location":{"fileName":"printer-exec.js","pos":{"start":[13,1],"end":[13,17]}},"name":"dummySource"});

    m.pop({"type":"expr","location":{"fileName":"printer-exec.js","pos":{"start":[13,1],"end":[13,17]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"printer-exec.js","pos":{"start":[15,15],"end":[15,22]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"printer-exec.js","pos":{"start":[15,23],"end":[15,32]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"printer-exec.js","pos":{"start":[15,15],"end":[15,33]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,1],"end":[326,3]}}});

    m.pop({"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,1],"end":[326,3]}}});

    m.initVar("exports", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"exports"});

    m.initVar("require", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"require"});

    m.initVar("module", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"module"});

    m.initVar("__filename", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"__filename"});

    m.initVar("__dirname", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"__dirname"});

    m.initVar("getDefaultPrinterName", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"getDefaultPrinterName"});

    m.initVar("getPrinter", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"getPrinter"});

    m.initVar("getPrinterDriverOptions", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"getPrinterDriverOptions"});

    m.initVar("getSelectedPaperSize", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"getSelectedPaperSize"});

    m.initVar("getJob", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"getJob"});

    m.initVar("setJob", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"setJob"});

    m.initVar("getPrinters", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"getPrinters"});

    m.initVar("correctPrinterinfo", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"correctPrinterinfo"});

    m.initVar("printDirect", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"printDirect"});

    m.initVar("printFile", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"printFile"});

    m.initVar("printer_helper", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"printer_helper"});

    m.initVar("fs", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"fs"});

    m.initVar("child_process", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"child_process"});

    m.initVar("os", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"os"});

    m.initVar("path", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"path"});

    m.initVar("native_lib_path", {"type":"declaration","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,2],"end":[326,2]}},"name":"native_lib_path"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[55,1],"end":[71,2]}}});

    m.writeVar("getDefaultPrinterName", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[55,1],"end":[71,2]}},"name":"getDefaultPrinterName"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[78,1],"end":[86,2]}}});

    m.writeVar("getPrinter", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[78,1],"end":[86,2]}},"name":"getPrinter"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[92,1],"end":[99,2]}}});

    m.writeVar("getPrinterDriverOptions", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[92,1],"end":[99,2]}},"name":"getPrinterDriverOptions"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[105,1],"end":[115,2]}}});

    m.writeVar("getSelectedPaperSize", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[105,1],"end":[115,2]}},"name":"getSelectedPaperSize"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[117,1],"end":[120,2]}}});

    m.writeVar("getJob", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[117,1],"end":[120,2]}},"name":"getJob"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[122,1],"end":[125,2]}}});

    m.writeVar("setJob", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[122,1],"end":[125,2]}},"name":"setJob"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[127,1],"end":[133,2]}}});

    m.writeVar("getPrinters", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[127,1],"end":[133,2]}},"name":"getPrinters"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[135,1],"end":[161,2]}}});

    m.writeVar("correctPrinterinfo", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[135,1],"end":[161,2]}},"name":"correctPrinterinfo"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[186,1],"end":[248,2]}}});

    m.writeVar("printDirect", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[186,1],"end":[248,2]}},"name":"printDirect"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[259,1],"end":[324,2]}}});

    m.writeVar("printFile", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[259,1],"end":[324,2]}},"name":"printFile"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,83],"end":[1,85]}}});

    m.writeVar("printer_helper", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,66],"end":[1,85]}},"name":"printer_helper"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[1,66],"end":[1,85]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[2,10],"end":[2,17]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[2,18],"end":[2,22]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[2,10],"end":[2,23]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[2,10],"end":[2,23]}},"name":"require"});

    m.writeVar("fs", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[2,5],"end":[2,23]}},"name":"fs"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[2,5],"end":[2,23]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[3,21],"end":[3,28]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[3,29],"end":[3,44]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[3,21],"end":[3,45]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[3,21],"end":[3,45]}},"name":"require"});

    m.writeVar("child_process", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[3,5],"end":[3,45]}},"name":"child_process"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[3,5],"end":[3,45]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[4,10],"end":[4,17]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[4,18],"end":[4,22]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[4,10],"end":[4,23]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[4,10],"end":[4,23]}},"name":"require"});

    m.writeVar("os", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[4,5],"end":[4,23]}},"name":"os"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[4,5],"end":[4,23]}}});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[5,12],"end":[5,19]}},"name":"require"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[5,20],"end":[5,26]}}});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[5,12],"end":[5,27]}},"name":"require"});

    m.functionReturn("require", {"type":"functionReturn","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[5,12],"end":[5,27]}},"name":"require"});

    m.writeVar("path", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[5,5],"end":[5,27]}},"name":"path"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[5,5],"end":[5,27]}}});

    m.readVar("path", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,23],"end":[6,27]}},"name":"path"});

    m.readProperty("obj0", "join", {"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,23],"end":[6,32]}}});

    m.readVar("__dirname", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,33],"end":[6,42]}},"name":"__dirname"});

    m.literal({"type":"literal","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,44],"end":[6,80]}}});

    m.functionCall("join", 0, 2, {"type":"functionInvocation","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,23],"end":[6,81]}},"name":"join"});

    m.functionReturn("join", {"type":"functionReturn","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,23],"end":[6,81]}},"name":"join"});

    m.writeVar("native_lib_path", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,5],"end":[6,81]}},"name":"native_lib_path"});

    m.pop({"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[6,5],"end":[6,81]}}});

    m.readVar("fs", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[9,4],"end":[9,6]}},"name":"fs"});

    m.readProperty("obj1", "existsSync", {"type":"expr","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[9,4],"end":[9,17]}}});

    m.readVar("native_lib_path", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[9,18],"end":[9,33]}},"name":"native_lib_path"});

    m.functionCall("existsSync", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[9,4],"end":[9,34]}},"name":"existsSync"});

    m.functionReturn("existsSync", {"type":"functionReturn","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[9,4],"end":[9,34]}},"name":"existsSync"});

    m.readVar("require", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[10,22],"end":[10,29]}},"name":"require"});

    m.readVar("native_lib_path", {"type":"variable","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[10,30],"end":[10,45]}},"name":"native_lib_path"});

    m.functionCall("require", 1, 1, {"type":"functionInvocation","location":{"fileName":"node_modules/printer/lib/printer.js","pos":{"start":[10,22],"end":[10,46]}},"name":"require"});

    m.endExecution();

};

