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

    m.initVar("resize");

    m.initVar("fs");

    m.initVar("i");

    m.initVar("configFile");

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

    m.readVar("module");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("getSize");

    m.initVar("getSizeFromRatio");

    m.initVar("executeResize");

    m.initVar("convertiOS");

    m.initVar("convertAndroid");

    m.initVar("exec");

    m.initVar("path");

    m.initVar("async");

    m.initVar("mkdirp");

    m.initVar("sizeOf");

    m.initVar("defaults");

    m.initVar("platformConverters");

    m.initVar("resize");

    m.push(false);

    m.writeVar("getSize");

    m.push(false);

    m.writeVar("getSizeFromRatio");

    m.push(false);

    m.writeVar("executeResize");

    m.push(false);

    m.writeVar("convertiOS");

    m.push(false);

    m.writeVar("convertAndroid");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "exec");

    m.writeVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.functionCall("", 0, 0);

    m.initVar("only_once");

    m.initVar("async");

    m.initVar("root");

    m.initVar("previous_async");

    m.initVar("_each");

    m.initVar("_map");

    m.initVar("_reduce");

    m.initVar("_keys");

    m.initVar("_eachLimit");

    m.initVar("doParallel");

    m.initVar("doParallelLimit");

    m.initVar("doSeries");

    m.initVar("_asyncMap");

    m.initVar("_mapLimit");

    m.initVar("_filter");

    m.initVar("_reject");

    m.initVar("_detect");

    m.initVar("_parallel");

    m.initVar("_concat");

    m.initVar("_console_fn");

    m.initVar("_applyEach");

    m.push(false);

    m.writeVar("only_once");

    m.push(false);

    m.writeVar("async");

    m.writeVar("root");

    m.readVar("root");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("root");

    m.readVar("async");

    m.writeVar("previous_async");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "noConflict");

    m.push(false);

    m.writeVar("_each");

    m.push(false);

    m.writeVar("_map");

    m.push(false);

    m.writeVar("_reduce");

    m.push(false);

    m.writeVar("_keys");

    m.readVar("process");

    m.readVar("process");

    m.readProperty("obj2", "nextTick");

    m.unaryOp();

    m.readVar("async");

    m.readVar("process");

    m.readProperty("obj2", "nextTick");

    m.writeProperty("obj1", "nextTick");

    m.readVar("setImmediate");

    m.unaryOp();

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "setImmediate");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "each");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "each");

    m.writeProperty("obj1", "forEach");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "eachSeries");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "eachSeries");

    m.writeProperty("obj1", "forEachSeries");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "eachLimit");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "eachLimit");

    m.writeProperty("obj1", "forEachLimit");

    m.push(false);

    m.writeVar("_eachLimit");

    m.push(false);

    m.writeVar("doParallel");

    m.push(false);

    m.writeVar("doParallelLimit");

    m.push(false);

    m.writeVar("doSeries");

    m.push(false);

    m.writeVar("_asyncMap");

    m.readVar("async");

    m.readVar("doParallel");

    m.readVar("_asyncMap");

    m.functionCall("doParallel", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "map");

    m.readVar("async");

    m.readVar("doSeries");

    m.readVar("_asyncMap");

    m.functionCall("doSeries", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "mapSeries");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "mapLimit");

    m.push(false);

    m.writeVar("_mapLimit");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "reduce");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "reduce");

    m.writeProperty("obj1", "inject");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "reduce");

    m.writeProperty("obj1", "foldl");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "reduceRight");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "reduceRight");

    m.writeProperty("obj1", "foldr");

    m.push(false);

    m.writeVar("_filter");

    m.readVar("async");

    m.readVar("doParallel");

    m.readVar("_filter");

    m.functionCall("doParallel", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "filter");

    m.readVar("async");

    m.readVar("doSeries");

    m.readVar("_filter");

    m.functionCall("doSeries", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "filterSeries");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "filter");

    m.writeProperty("obj1", "select");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "filterSeries");

    m.writeProperty("obj1", "selectSeries");

    m.push(false);

    m.writeVar("_reject");

    m.readVar("async");

    m.readVar("doParallel");

    m.readVar("_reject");

    m.functionCall("doParallel", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "reject");

    m.readVar("async");

    m.readVar("doSeries");

    m.readVar("_reject");

    m.functionCall("doSeries", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "rejectSeries");

    m.push(false);

    m.writeVar("_detect");

    m.readVar("async");

    m.readVar("doParallel");

    m.readVar("_detect");

    m.functionCall("doParallel", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "detect");

    m.readVar("async");

    m.readVar("doSeries");

    m.readVar("_detect");

    m.functionCall("doSeries", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "detectSeries");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "some");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "some");

    m.writeProperty("obj1", "any");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "every");

    m.readVar("async");

    m.readVar("async");

    m.readProperty("obj1", "every");

    m.writeProperty("obj1", "all");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "sortBy");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "auto");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "waterfall");

    m.push(false);

    m.writeVar("_parallel");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "parallel");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "parallelLimit");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "series");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "iterator");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "apply");

    m.push(false);

    m.writeVar("_concat");

    m.readVar("async");

    m.readVar("doParallel");

    m.readVar("_concat");

    m.functionCall("doParallel", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "concat");

    m.readVar("async");

    m.readVar("doSeries");

    m.readVar("_concat");

    m.functionCall("doSeries", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "concatSeries");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "whilst");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "doWhilst");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "until");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "doUntil");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "queue");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "cargo");

    m.push(false);

    m.writeVar("_console_fn");

    m.readVar("async");

    m.readVar("_console_fn");

    m.push(false);

    m.functionCall("_console_fn", 1, 1);

    m.initVar("name");

    m.push(false);

    m.writeProperty("obj1", "log");

    m.readVar("async");

    m.readVar("_console_fn");

    m.push(false);

    m.functionCall("_console_fn", 1, 1);

    m.initVar("name");

    m.push(false);

    m.writeProperty("obj1", "dir");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "memoize");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "unmemoize");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "times");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "timesSeries");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "compose");

    m.push(false);

    m.writeVar("_applyEach");

    m.readVar("async");

    m.readVar("doParallel");

    m.readVar("_applyEach");

    m.functionCall("doParallel", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "applyEach");

    m.readVar("async");

    m.readVar("doSeries");

    m.readVar("_applyEach");

    m.functionCall("doSeries", 1, 1);

    m.initVar("fn");

    m.push(false);

    m.writeProperty("obj1", "applyEachSeries");

    m.readVar("async");

    m.push(false);

    m.writeProperty("obj1", "forever");

    m.readVar("define");

    m.unaryOp();

    m.readVar("module");

    m.unaryOp();

    m.readVar("module");

    m.readProperty("obj3", "exports");

    m.unaryOp();

    m.readVar("module");

    m.readVar("async");

    m.writeProperty("obj3", "exports");

    m.writeVar("async");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("mkdirP");

    m.initVar("path");

    m.initVar("fs");

    m.push(false);

    m.writeVar("mkdirP");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("module");

    m.readVar("mkdirP");

    m.readVar("mkdirP");

    m.readVar("mkdirP");

    m.writeProperty("obj4", "mkdirP");

    m.writeProperty("obj4", "mkdirp");

    m.writeProperty("obj5", "exports");

    m.readVar("mkdirP");

    m.push(false);

    m.writeProperty("obj4", "sync");

    m.writeVar("mkdirp");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("lookup");

    m.initVar("asyncFileToBuffer");

    m.initVar("syncFileToBuffer");

    m.initVar("fs");

    m.initVar("path");

    m.initVar("libpath");

    m.initVar("detector");

    m.initVar("handlers");

    m.initVar("types");

    m.initVar("bufferSize");

    m.push(false);

    m.writeVar("lookup");

    m.push(false);

    m.writeVar("asyncFileToBuffer");

    m.push(false);

    m.writeVar("syncFileToBuffer");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("process");

    m.readProperty("obj2", "env");

    m.readProperty("obj6", "TEST_COV");

    m.push(false);

    m.writeVar("libpath");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("typeMap");

    m.initVar("types");

    m.push(false);

    m.push(false);

    m.writeVar("typeMap");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.push(false);

    m.readVar("module");

    m.writeProperty("obj7", "6");

    m.writeProperty("obj7", "5");

    m.writeProperty("obj7", "4");

    m.writeProperty("obj7", "3");

    m.writeProperty("obj7", "2");

    m.writeProperty("obj7", "1");

    m.writeProperty("obj7", "0");

    m.push(false);

    m.writeProperty("obj8", "exports");

    m.writeVar("types");

    m.readVar("types");

    m.readProperty("obj7", "forEach");

    m.push(false);

    m.functionCall("forEach", 1, 1);

    m.initVar("type");

    m.readVar("typeMap");

    m.readVar("type");

    m.readVar("require");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isPNG");

    m.initVar("calculate");

    m.initVar("pngSignature");

    m.push(false);

    m.writeVar("isPNG");

    m.push(false);

    m.writeVar("calculate");

    m.push(false);

    m.push(false);

    m.writeVar("pngSignature");

    m.readVar("module");

    m.readVar("isPNG");

    m.readVar("calculate");

    m.writeProperty("obj9", "calculate");

    m.writeProperty("obj9", "detect");

    m.push(false);

    m.writeProperty("obj10", "exports");

    m.readProperty("obj9", "detect");

    m.writeProperty("obj11", "png");

    m.initVar("type");

    m.readVar("typeMap");

    m.readVar("type");

    m.readVar("require");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isGIF");

    m.initVar("calculate");

    m.initVar("gifRegexp");

    m.push(false);

    m.writeVar("isGIF");

    m.push(false);

    m.writeVar("calculate");

    m.push(false);

    m.push(false);

    m.writeVar("gifRegexp");

    m.readVar("module");

    m.readVar("isGIF");

    m.readVar("calculate");

    m.writeProperty("obj12", "calculate");

    m.writeProperty("obj12", "detect");

    m.push(false);

    m.writeProperty("obj13", "exports");

    m.readProperty("obj12", "detect");

    m.writeProperty("obj11", "gif");

    m.initVar("type");

    m.readVar("typeMap");

    m.readVar("type");

    m.readVar("require");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isBMP");

    m.initVar("calculate");

    m.push(false);

    m.writeVar("isBMP");

    m.push(false);

    m.writeVar("calculate");

    m.push(false);

    m.readVar("module");

    m.readVar("isBMP");

    m.readVar("calculate");

    m.writeProperty("obj14", "calculate");

    m.writeProperty("obj14", "detect");

    m.push(false);

    m.writeProperty("obj15", "exports");

    m.readProperty("obj14", "detect");

    m.writeProperty("obj11", "bmp");

    m.initVar("type");

    m.readVar("typeMap");

    m.readVar("type");

    m.readVar("require");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isPSD");

    m.initVar("calculate");

    m.push(false);

    m.writeVar("isPSD");

    m.push(false);

    m.writeVar("calculate");

    m.push(false);

    m.readVar("module");

    m.readVar("isPSD");

    m.readVar("calculate");

    m.writeProperty("obj16", "calculate");

    m.writeProperty("obj16", "detect");

    m.push(false);

    m.writeProperty("obj17", "exports");

    m.readProperty("obj16", "detect");

    m.writeProperty("obj11", "psd");

    m.initVar("type");

    m.readVar("typeMap");

    m.readVar("type");

    m.readVar("require");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isJPG");

    m.initVar("extractSize");

    m.initVar("validateBuffer");

    m.initVar("calculate");

    m.initVar("validJFIFMarkers");

    m.push(false);

    m.writeVar("isJPG");

    m.push(false);

    m.writeVar("extractSize");

    m.push(false);

    m.writeVar("validateBuffer");

    m.push(false);

    m.writeVar("calculate");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj18", "ffe2");

    m.writeProperty("obj18", "ffec");

    m.writeProperty("obj18", "ffdb");

    m.writeProperty("obj18", "ffe8");

    m.writeProperty("obj18", "ffe1");

    m.writeProperty("obj18", "ffe0");

    m.push(false);

    m.writeVar("validJFIFMarkers");

    m.readVar("module");

    m.readVar("isJPG");

    m.readVar("calculate");

    m.writeProperty("obj19", "calculate");

    m.writeProperty("obj19", "detect");

    m.push(false);

    m.writeProperty("obj20", "exports");

    m.readProperty("obj19", "detect");

    m.writeProperty("obj11", "jpg");

    m.initVar("type");

    m.readVar("typeMap");

    m.readVar("type");

    m.readVar("require");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isTIFF");

    m.initVar("readIFD");

    m.initVar("readValue");

    m.initVar("nextTag");

    m.initVar("extractTags");

    m.initVar("determineEndianness");

    m.initVar("calculate");

    m.initVar("fs");

    m.initVar("readUInt");

    m.push(false);

    m.writeVar("isTIFF");

    m.push(false);

    m.writeVar("readIFD");

    m.push(false);

    m.writeVar("readValue");

    m.push(false);

    m.writeVar("nextTag");

    m.push(false);

    m.writeVar("extractTags");

    m.push(false);

    m.writeVar("determineEndianness");

    m.push(false);

    m.writeVar("calculate");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("readUInt");

    m.push(false);

    m.writeVar("readUInt");

    m.push(false);

    m.readVar("module");

    m.readVar("readUInt");

    m.writeProperty("obj21", "exports");

    m.writeVar("readUInt");

    m.readVar("module");

    m.readVar("isTIFF");

    m.readVar("calculate");

    m.writeProperty("obj22", "calculate");

    m.writeProperty("obj22", "detect");

    m.push(false);

    m.writeProperty("obj23", "exports");

    m.readProperty("obj22", "detect");

    m.writeProperty("obj11", "tiff");

    m.initVar("type");

    m.readVar("typeMap");

    m.readVar("type");

    m.readVar("require");

    m.push(false);

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("isWebP");

    m.initVar("calculate");

    m.initVar("calculateLossless");

    m.initVar("calculateLossy");

    m.push(false);

    m.writeVar("isWebP");

    m.push(false);

    m.writeVar("calculate");

    m.push(false);

    m.writeVar("calculateLossless");

    m.push(false);

    m.writeVar("calculateLossy");

    m.push(false);

    m.readVar("module");

    m.readVar("isWebP");

    m.readVar("calculate");

    m.writeProperty("obj24", "calculate");

    m.writeProperty("obj24", "detect");

    m.push(false);

    m.writeProperty("obj25", "exports");

    m.readProperty("obj24", "detect");

    m.writeProperty("obj11", "webp");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj26", "exports");

    m.writeVar("detector");

    m.push(false);

    m.writeVar("handlers");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeVar("types");

    m.readVar("types");

    m.readProperty("obj7", "forEach");

    m.push(false);

    m.functionCall("forEach", 1, 1);

    m.initVar("type");

    m.readVar("handlers");

    m.readVar("type");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeProperty("obj27", "png");

    m.initVar("type");

    m.readVar("handlers");

    m.readVar("type");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeProperty("obj27", "gif");

    m.initVar("type");

    m.readVar("handlers");

    m.readVar("type");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeProperty("obj27", "bmp");

    m.initVar("type");

    m.readVar("handlers");

    m.readVar("type");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeProperty("obj27", "psd");

    m.initVar("type");

    m.readVar("handlers");

    m.readVar("type");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeProperty("obj27", "jpg");

    m.initVar("type");

    m.readVar("handlers");

    m.readVar("type");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeProperty("obj27", "tiff");

    m.initVar("type");

    m.readVar("handlers");

    m.readVar("type");

    m.readVar("require");

    m.readVar("libpath");

    m.push(false);

    m.binaryOp();

    m.readVar("type");

    m.binaryOp();

    m.functionCall("require", 1, 1);

    m.writeProperty("obj27", "webp");

    m.push(false);

    m.writeVar("bufferSize");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj28", "exports");

    m.writeVar("sizeOf");

    m.writeProperty("obj29", "1");

    m.writeProperty("obj29", "0");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj30", "ANDROID_BASE_SIZE");

    m.writeProperty("obj30", "ANDROID_OUTPUT_FOLDER");

    m.writeProperty("obj30", "IOS_OUTPUT_FOLDER");

    m.writeProperty("obj30", "IOS_FILE_NAME_PREFIX");

    m.writeProperty("obj30", "ORIGINAL_ICON_FILE_NAME");

    m.writeProperty("obj30", "PLATFORMS_TO_BUILD");

    m.push(false);

    m.writeVar("defaults");

    m.readVar("convertAndroid");

    m.readVar("convertiOS");

    m.writeProperty("obj31", "ios");

    m.writeProperty("obj31", "android");

    m.push(false);

    m.writeVar("platformConverters");

    m.push(false);

    m.writeVar("resize");

    m.readVar("resize");

    m.readVar("defaults");

    m.writeProperty("obj32", "defaults");

    m.readVar("module");

    m.readVar("resize");

    m.writeProperty("obj33", "exports");

    m.writeVar("exports");

    m.writeProperty("obj34", "exports");

    m.writeVar("exports");

    m.writeVar("resize");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.push(false);

    m.writeVar("i");

    m.push(false);

    m.readVar("i");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("configFile");

    m.readVar("fs");

    m.readProperty("obj35", "writeFileSync");

    m.readVar("configFile");

    m.push(false);

    m.readVar("payload");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.functionCall("writeFileSync", 3, 2);

    m.endExecution();

};

