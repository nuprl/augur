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

    m.initVar("gm");

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

    m.initVar("gm");

    m.initVar("Stream");

    m.initVar("EventEmitter");

    m.initVar("util");

    m.initVar("parent");

    m.push(false);

    m.writeVar("gm");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "Stream");

    m.writeVar("Stream");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj1", "EventEmitter");

    m.writeVar("EventEmitter");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

    m.readVar("util");

    m.readProperty("obj2", "inherits");

    m.readVar("gm");

    m.readVar("EventEmitter");

    m.functionCall("inherits", 2, 2);

    m.readVar("gm");

    m.writeVar("parent");

    m.readVar("gm");

    m.push(false);

    m.writeProperty("obj3", "subClass");

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

    m.push(false);

    m.writeVar("exports");

    m.writeProperty("obj4", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("exports", 1, 1);

    m.initVar("proto");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "_options");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "options");

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

    m.push(false);

    m.writeProperty("obj6", "exports");

    m.readVar("gm");

    m.functionCall("", 1, 1);

    m.initVar("gm");

    m.initVar("identifyPattern");

    m.initVar("parse");

    m.initVar("makeArgs");

    m.initVar("proto");

    m.initVar("IDENTIFYING");

    m.initVar("IDENTIFIED");

    m.initVar("map");

    m.initVar("orientations");

    m.initVar("helper");

    m.push(false);

    m.writeVar("identifyPattern");

    m.push(false);

    m.writeVar("parse");

    m.push(false);

    m.writeVar("makeArgs");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.writeVar("proto");

    m.push(false);

    m.writeVar("IDENTIFYING");

    m.push(false);

    m.writeVar("IDENTIFIED");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj7", "helper");

    m.writeProperty("obj7", "format");

    m.writeProperty("obj7", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj8", "format");

    m.writeProperty("obj8", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj9", "format");

    m.writeProperty("obj9", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj10", "helper");

    m.writeProperty("obj10", "format");

    m.writeProperty("obj10", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj11", "helper");

    m.writeProperty("obj11", "format");

    m.writeProperty("obj11", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj12", "helper");

    m.writeProperty("obj12", "format");

    m.writeProperty("obj12", "key");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj13", "verbose");

    m.writeProperty("obj13", "key");

    m.push(false);

    m.writeProperty("obj14", "res");

    m.writeProperty("obj14", "orientation");

    m.writeProperty("obj14", "color");

    m.writeProperty("obj14", "size");

    m.writeProperty("obj14", "filesize");

    m.writeProperty("obj14", "depth");

    m.writeProperty("obj14", "format");

    m.push(false);

    m.writeVar("map");

    m.readVar("Object");

    m.readProperty("obj15", "keys");

    m.readVar("map");

    m.functionCall("keys", 1, 1);

    m.readProperty("obj16", "forEach");

    m.push(false);

    m.functionCall("forEach", 1, 1);

    m.initVar("getter");

    m.readVar("proto");

    m.readVar("getter");

    m.push(false);

    m.writeProperty("obj5", "format");

    m.initVar("getter");

    m.readVar("proto");

    m.readVar("getter");

    m.push(false);

    m.writeProperty("obj5", "depth");

    m.initVar("getter");

    m.readVar("proto");

    m.readVar("getter");

    m.push(false);

    m.writeProperty("obj5", "filesize");

    m.initVar("getter");

    m.readVar("proto");

    m.readVar("getter");

    m.push(false);

    m.writeProperty("obj5", "size");

    m.initVar("getter");

    m.readVar("proto");

    m.readVar("getter");

    m.push(false);

    m.writeProperty("obj5", "color");

    m.initVar("getter");

    m.readVar("proto");

    m.readVar("getter");

    m.push(false);

    m.writeProperty("obj5", "orientation");

    m.initVar("getter");

    m.readVar("proto");

    m.readVar("getter");

    m.push(false);

    m.writeProperty("obj5", "res");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "identify");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj17", "8");

    m.writeProperty("obj17", "7");

    m.writeProperty("obj17", "6");

    m.writeProperty("obj17", "5");

    m.writeProperty("obj17", "4");

    m.writeProperty("obj17", "3");

    m.writeProperty("obj17", "2");

    m.writeProperty("obj17", "1");

    m.push(false);

    m.writeVar("orientations");

    m.readVar("gm");

    m.push(false);

    m.writeProperty("obj3", "identifyHelpers");

    m.writeVar("helper");

    m.readVar("helper");

    m.push(false);

    m.writeProperty("obj18", "Geometry");

    m.readVar("helper");

    m.push(false);

    m.writeProperty("obj18", "Format");

    m.readVar("helper");

    m.push(false);

    m.writeProperty("obj18", "Depth");

    m.readVar("helper");

    m.push(false);

    m.writeProperty("obj18", "Colors");

    m.readVar("helper");

    m.push(false);

    m.writeProperty("obj18", "Orientation");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("comment");

    m.initVar("argsToArray");

    m.initVar("isUtil");

    m.push(false);

    m.writeVar("comment");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj19", "escape");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj19", "unescape");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj19", "argsToArray");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj19", "isUtil");

    m.readProperty("obj19", "argsToArray");

    m.writeVar("argsToArray");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj19", "isUtil");

    m.writeVar("isUtil");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj20", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("", 1, 1);

    m.initVar("proto");

    m.initVar("limits");

    m.initVar("noises");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "selectFrame");

    m.readVar("proto");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "subCommand");

    m.writeProperty("obj5", "command");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "adjoin");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "affine");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "alpha");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "append");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "authenticate");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "average");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "backdrop");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "blackThreshold");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "bluePrimary");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "border");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "borderColor");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "box");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "channel");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "chop");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "clip");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "coalesce");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "colorize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "colorMap");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "compose");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "compress");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "convolve");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "createDirectories");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "deconstruct");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "define");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "delay");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "displace");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "display");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "dispose");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "dissolve");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "encoding");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "endian");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "file");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "flatten");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "foreground");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "frame");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "fuzz");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "gaussian");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "geometry");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "greenPrimary");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "highlightColor");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "highlightStyle");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "iconGeometry");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "intent");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "lat");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "level");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "list");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "log");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "loop");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "map");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "mask");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "matte");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "matteColor");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "maximumError");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "mode");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "monitor");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "mosaic");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "motionBlur");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "name");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "noop");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "normalize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "opaque");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "operator");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "orderedDither");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "outputDirectory");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "page");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "pause");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "pen");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "ping");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "pointSize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "preview");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "process");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "profile");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "progress");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "randomThreshold");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "recolor");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "redPrimary");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "remote");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "render");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "repage");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "sample");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "samplingFactor");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "scene");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "scenes");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "screen");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "set");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "segment");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "shade");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "shadow");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "sharedMemory");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "shave");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "shear");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "silent");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "rawSize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "snaps");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "stegano");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "stereo");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "textFont");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "texture");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "threshold");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "thumbnail");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "tile");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "title");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "transform");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "transparent");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "treeDepth");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "update");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "units");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "unsharp");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "usePixmap");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "view");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "virtualPixel");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "visual");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "watermark");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "wave");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "whitePoint");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "whiteThreshold");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "window");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "windowGroup");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "strip");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "interlace");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "setFormat");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "resize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "resizeExact");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "scale");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "filter");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "density");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "noProfile");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "resample");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "rotate");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "flip");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "flop");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "crop");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "magnify");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "minify");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "quality");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "blur");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "charcoal");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "modulate");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "antialias");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "bitdepth");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "colors");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "colorspace");

    m.readVar("proto");

    m.readVar("comment");

    m.push(false);

    m.functionCall("comment", 1, 1);

    m.initVar("arg");

    m.push(false);

    m.writeProperty("obj5", "comment");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "contrast");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "cycle");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "despeckle");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "dither");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "monochrome");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "edge");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "emboss");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "enhance");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "equalize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "gamma");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "implode");

    m.readVar("proto");

    m.readVar("comment");

    m.push(false);

    m.functionCall("comment", 1, 1);

    m.initVar("arg");

    m.push(false);

    m.writeProperty("obj5", "label");

    m.writeProperty("obj21", "5");

    m.writeProperty("obj21", "4");

    m.writeProperty("obj21", "3");

    m.writeProperty("obj21", "2");

    m.writeProperty("obj21", "1");

    m.writeProperty("obj21", "0");

    m.push(false);

    m.writeVar("limits");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "limit");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "median");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "negative");

    m.writeProperty("obj22", "5");

    m.writeProperty("obj22", "4");

    m.writeProperty("obj22", "3");

    m.writeProperty("obj22", "2");

    m.writeProperty("obj22", "1");

    m.writeProperty("obj22", "0");

    m.push(false);

    m.writeVar("noises");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "noise");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "paint");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "raise");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "lower");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "region");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "roll");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "sharpen");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "solarize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "spread");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "swirl");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "type");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "trim");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "extent");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "gravity");

    m.readVar("proto");

    m.readProperty("obj5", "gravity");

    m.writeProperty("obj23", "8");

    m.writeProperty("obj23", "7");

    m.writeProperty("obj23", "6");

    m.writeProperty("obj23", "5");

    m.writeProperty("obj23", "4");

    m.writeProperty("obj23", "3");

    m.writeProperty("obj23", "2");

    m.writeProperty("obj23", "1");

    m.writeProperty("obj23", "0");

    m.push(false);

    m.writeProperty("obj24", "types");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "flatten");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "background");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("formatPoints");

    m.initVar("escape");

    m.push(false);

    m.writeVar("formatPoints");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj19", "escape");

    m.writeVar("escape");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj25", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("", 1, 1);

    m.initVar("proto");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "fill");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "stroke");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "strokeWidth");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "font");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "fontSize");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "draw");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawPoint");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawLine");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawRectangle");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawArc");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawEllipse");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawCircle");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawPolyline");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawPolygon");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawBezier");

    m.readVar("proto");

    m.writeProperty("obj26", "8");

    m.writeProperty("obj26", "7");

    m.writeProperty("obj26", "6");

    m.writeProperty("obj26", "5");

    m.writeProperty("obj26", "4");

    m.writeProperty("obj26", "3");

    m.writeProperty("obj26", "2");

    m.writeProperty("obj26", "1");

    m.writeProperty("obj26", "0");

    m.push(false);

    m.writeProperty("obj5", "_gravities");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "drawText");

    m.readVar("proto");

    m.writeProperty("obj27", "1");

    m.writeProperty("obj27", "0");

    m.push(false);

    m.writeProperty("obj5", "_drawProps");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "setDraw");

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

    m.push(false);

    m.writeProperty("obj28", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("", 1, 1);

    m.initVar("proto");

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

    m.push(false);

    m.writeProperty("obj29", "exports");

    m.readVar("proto");

    m.functionCall("", 1, 1);

    m.initVar("proto");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "thumb");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "thumbExact");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("fs");

    m.initVar("parallel");

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

    m.initVar("noop");

    m.push(false);

    m.writeVar("noop");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj30", "exports");

    m.writeVar("parallel");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj31", "exports");

    m.readVar("proto");

    m.functionCall("", 1, 1);

    m.initVar("proto");

    m.initVar("noop");

    m.push(false);

    m.writeVar("noop");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "morph");

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

    m.push(false);

    m.writeProperty("obj32", "exports");

    m.readVar("proto");

    m.functionCall("", 1, 1);

    m.initVar("proto");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "sepia");

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

    m.push(false);

    m.writeProperty("obj33", "exports");

    m.readVar("proto");

    m.functionCall("", 1, 1);

    m.initVar("proto");

    m.initVar("exifTransforms");

    m.push(false);

    m.writeProperty("obj34", "0");

    m.push(false);

    m.writeProperty("obj35", "1");

    m.writeProperty("obj35", "0");

    m.push(false);

    m.writeProperty("obj36", "0");

    m.push(false);

    m.writeProperty("obj37", "2");

    m.writeProperty("obj37", "1");

    m.writeProperty("obj37", "0");

    m.push(false);

    m.writeProperty("obj38", "1");

    m.writeProperty("obj38", "0");

    m.push(false);

    m.writeProperty("obj39", "2");

    m.writeProperty("obj39", "1");

    m.writeProperty("obj39", "0");

    m.push(false);

    m.writeProperty("obj40", "1");

    m.writeProperty("obj40", "0");

    m.push(false);

    m.writeProperty("obj41", "leftbottom");

    m.writeProperty("obj41", "rightbottom");

    m.writeProperty("obj41", "righttop");

    m.writeProperty("obj41", "lefttop");

    m.writeProperty("obj41", "bottomleft");

    m.writeProperty("obj41", "bottomright");

    m.writeProperty("obj41", "topright");

    m.writeProperty("obj41", "topleft");

    m.push(false);

    m.writeVar("exifTransforms");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "autoOrient");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("spawn");

    m.initVar("utils");

    m.initVar("debug");

    m.initVar("series");

    m.initVar("PassThrough");

    m.initVar("noBufferConcat");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj42", "spawn");

    m.writeVar("spawn");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("utils");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("useColors");

    m.initVar("formatArgs");

    m.initVar("log");

    m.initVar("save");

    m.initVar("load");

    m.initVar("createWritableStdioStream");

    m.initVar("tty");

    m.initVar("util");

    m.initVar("fd");

    m.initVar("stream");

    m.initVar("inspect");

    m.push(false);

    m.writeVar("useColors");

    m.push(false);

    m.writeVar("formatArgs");

    m.push(false);

    m.writeVar("log");

    m.push(false);

    m.writeVar("save");

    m.push(false);

    m.writeVar("load");

    m.push(false);

    m.writeVar("createWritableStdioStream");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("tty");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

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

    m.initVar("selectColor");

    m.initVar("debug");

    m.initVar("enable");

    m.initVar("disable");

    m.initVar("enabled");

    m.initVar("coerce");

    m.initVar("prevColor");

    m.initVar("prevTime");

    m.push(false);

    m.writeVar("selectColor");

    m.push(false);

    m.writeVar("debug");

    m.push(false);

    m.writeVar("enable");

    m.push(false);

    m.writeVar("disable");

    m.push(false);

    m.writeVar("enabled");

    m.push(false);

    m.writeVar("coerce");

    m.readVar("module");

    m.readVar("debug");

    m.writeProperty("obj43", "exports");

    m.writeVar("exports");

    m.readVar("exports");

    m.readVar("coerce");

    m.writeProperty("obj44", "coerce");

    m.readVar("exports");

    m.readVar("disable");

    m.writeProperty("obj44", "disable");

    m.readVar("exports");

    m.readVar("enable");

    m.writeProperty("obj44", "enable");

    m.readVar("exports");

    m.readVar("enabled");

    m.writeProperty("obj44", "enabled");

    m.readVar("exports");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("parse");

    m.initVar("short");

    m.initVar("long");

    m.initVar("plural");

    m.initVar("s");

    m.initVar("m");

    m.initVar("h");

    m.initVar("d");

    m.initVar("y");

    m.push(false);

    m.writeVar("parse");

    m.push(false);

    m.writeVar("short");

    m.push(false);

    m.writeVar("long");

    m.push(false);

    m.writeVar("plural");

    m.push(false);

    m.writeVar("s");

    m.readVar("s");

    m.push(false);

    m.binaryOp();

    m.writeVar("m");

    m.readVar("m");

    m.push(false);

    m.binaryOp();

    m.writeVar("h");

    m.readVar("h");

    m.push(false);

    m.binaryOp();

    m.writeVar("d");

    m.readVar("d");

    m.push(false);

    m.binaryOp();

    m.writeVar("y");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj45", "exports");

    m.writeProperty("obj44", "humanize");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj44", "names");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj44", "skips");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj44", "formatters");

    m.push(false);

    m.writeVar("prevColor");

    m.writeProperty("obj46", "exports");

    m.writeVar("exports");

    m.readVar("exports");

    m.readVar("log");

    m.writeProperty("obj44", "log");

    m.readVar("exports");

    m.readVar("formatArgs");

    m.writeProperty("obj44", "formatArgs");

    m.readVar("exports");

    m.readVar("save");

    m.writeProperty("obj44", "save");

    m.readVar("exports");

    m.readVar("load");

    m.writeProperty("obj44", "load");

    m.readVar("exports");

    m.readVar("useColors");

    m.writeProperty("obj44", "useColors");

    m.readVar("exports");

    m.writeProperty("obj47", "5");

    m.writeProperty("obj47", "4");

    m.writeProperty("obj47", "3");

    m.writeProperty("obj47", "2");

    m.writeProperty("obj47", "1");

    m.writeProperty("obj47", "0");

    m.push(false);

    m.writeProperty("obj44", "colors");

    m.readVar("parseInt");

    m.readVar("process");

    m.readProperty("obj48", "env");

    m.readProperty("obj49", "DEBUG_FD");

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.push(false);

    m.writeVar("fd");

    m.push(false);

    m.readVar("fd");

    m.binaryOp();

    m.push(false);

    m.readVar("fd");

    m.binaryOp();

    m.readVar("process");

    m.readProperty("obj48", "stderr");

    m.writeVar("stream");

    m.push(false);

    m.readVar("util");

    m.readProperty("obj2", "inspect");

    m.readProperty("obj50", "length");

    m.binaryOp();

    m.push(false);

    m.writeVar("inspect");

    m.readVar("exports");

    m.readProperty("obj44", "formatters");

    m.push(false);

    m.writeProperty("obj51", "o");

    m.readVar("exports");

    m.readProperty("obj44", "enable");

    m.readVar("load");

    m.functionCall("load", 0, 0);

    m.readVar("process");

    m.readProperty("obj48", "env");

    m.readProperty("obj49", "DEBUG");

    m.functionCall("enable", 1, 1);

    m.initVar("namespaces");

    m.initVar("split");

    m.initVar("len");

    m.initVar("i");

    m.readVar("exports");

    m.readProperty("obj44", "save");

    m.readVar("namespaces");

    m.functionCall("save", 1, 1);

    m.initVar("namespaces");

    m.push(false);

    m.readVar("namespaces");

    m.binaryOp();

    m.unaryOp();

    m.readVar("process");

    m.readProperty("obj48", "env");

    m.push(false);

    m.unaryOp();

    m.readVar("namespaces");

    m.push(false);

    m.readProperty("obj52", "split");

    m.push(false);

    m.functionCall("split", 2, 1);

    m.writeVar("split");

    m.readVar("split");

    m.readProperty("obj53", "length");

    m.writeVar("len");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.readVar("split");

    m.readVar("i");

    m.readProperty("obj53", 0);

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.push(false);

    m.functionCall("debug", 1, 1);

    m.initVar("namespace");

    m.initVar("disabled");

    m.initVar("enabled");

    m.initVar("fn");

    m.push(false);

    m.writeVar("disabled");

    m.push(false);

    m.writeVar("enabled");

    m.readVar("disabled");

    m.push(false);

    m.writeProperty("obj54", "enabled");

    m.readVar("enabled");

    m.push(false);

    m.writeProperty("obj55", "enabled");

    m.readVar("exports");

    m.readProperty("obj44", "enabled");

    m.readVar("namespace");

    m.functionCall("enabled", 1, 1);

    m.initVar("name");

    m.initVar("i");

    m.initVar("len");

    m.push(false);

    m.writeVar("i");

    m.readVar("exports");

    m.readProperty("obj44", "skips");

    m.readProperty("obj56", "length");

    m.writeVar("len");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.push(false);

    m.writeVar("i");

    m.readVar("exports");

    m.readProperty("obj44", "names");

    m.readProperty("obj57", "length");

    m.writeVar("len");

    m.readVar("i");

    m.readVar("len");

    m.binaryOp();

    m.push(false);

    m.readVar("disabled");

    m.writeVar("fn");

    m.readVar("fn");

    m.readVar("namespace");

    m.writeProperty("obj54", "namespace");

    m.readVar("fn");

    m.writeVar("debug");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("noop");

    m.push(false);

    m.writeVar("noop");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj58", "exports");

    m.writeVar("series");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "PassThrough");

    m.writeVar("PassThrough");

    m.push(false);

    m.writeVar("noBufferConcat");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj59", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("", 1, 1);

    m.initVar("proto");

    m.initVar("args");

    m.initVar("streamToUnemptyBuffer");

    m.initVar("types");

    m.push(false);

    m.writeVar("args");

    m.push(false);

    m.writeVar("streamToUnemptyBuffer");

    m.readVar("proto");

    m.readVar("args");

    m.push(false);

    m.functionCall("args", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.writeProperty("obj5", "in");

    m.readVar("proto");

    m.readVar("args");

    m.push(false);

    m.functionCall("args", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.writeProperty("obj5", "out");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "_preprocessor");

    m.readVar("proto");

    m.readVar("args");

    m.push(false);

    m.functionCall("args", 1, 1);

    m.initVar("prop");

    m.push(false);

    m.writeProperty("obj5", "preprocessor");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "write");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "stream");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "toBuffer");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "_preprocess");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "_exec");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "_spawn");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "args");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "addSrcFormatter");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "src");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj60", "webp");

    m.writeProperty("obj60", "bmp");

    m.writeProperty("obj60", "tiff");

    m.writeProperty("obj60", "gif");

    m.writeProperty("obj60", "png");

    m.writeProperty("obj60", "jpg");

    m.push(false);

    m.writeVar("types");

    m.readVar("types");

    m.readVar("types");

    m.readProperty("obj60", "jpg");

    m.writeProperty("obj60", "jpeg");

    m.readVar("types");

    m.readVar("types");

    m.readProperty("obj60", "tiff");

    m.writeProperty("obj60", "tif");

    m.readVar("types");

    m.readVar("types");

    m.readProperty("obj60", "bmp");

    m.writeProperty("obj60", "dib");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "inputIs");

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

    m.initVar("utils");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj42", "exec");

    m.writeVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("utils");

    m.readVar("module");

    m.push(false);

    m.writeVar("exports");

    m.writeProperty("obj61", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("exports", 1, 1);

    m.initVar("proto");

    m.initVar("compare");

    m.push(false);

    m.writeVar("compare");

    m.readVar("proto");

    m.unaryOp();

    m.readVar("proto");

    m.readVar("compare");

    m.writeProperty("obj5", "compare");

    m.readVar("compare");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("utils");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("utils");

    m.readVar("module");

    m.push(false);

    m.writeVar("exports");

    m.writeProperty("obj62", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("exports", 1, 1);

    m.initVar("proto");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "composite");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("utils");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("utils");

    m.readVar("module");

    m.push(false);

    m.writeVar("exports");

    m.writeProperty("obj63", "exports");

    m.readVar("gm");

    m.readProperty("obj3", "prototype");

    m.functionCall("exports", 1, 1);

    m.initVar("proto");

    m.readVar("proto");

    m.push(false);

    m.writeProperty("obj5", "montage");

    m.readVar("module");

    m.readVar("gm");

    m.writeVar("exports");

    m.writeProperty("obj64", "exports");

    m.readVar("module");

    m.readProperty("obj64", "exports");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeProperty("obj3", "utils");

    m.readVar("module");

    m.readProperty("obj64", "exports");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.functionCall("exports", 1, 0);

    m.initVar("proto");

    m.initVar("compare");

    m.push(false);

    m.writeVar("compare");

    m.readVar("proto");

    m.readVar("compare");

    m.writeProperty("obj3", "compare");

    m.readVar("module");

    m.readProperty("obj64", "exports");

    m.readVar("JSON");

    m.readProperty("obj65", "parse");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj66", "readFileSync");

    m.readVar("__dirname");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.functionCall("readFileSync", 2, 2);

    m.functionCall("parse", 2, 1);

    m.readProperty("obj67", "version");

    m.writeProperty("obj3", "version");

    m.writeVar("gm");

    m.readVar("gm");

    m.readProperty("obj3", "compare");

    m.push(false);

    m.push(false);

    m.readVar("payload");

    m.binaryOp();

    m.push(false);

    m.functionCall("compare", 4, 3);

    m.initVar("orig");

    m.initVar("compareTo");

    m.initVar("options");

    m.initVar("cb");

    m.initVar("isImageMagick");

    m.initVar("bin");

    m.initVar("execCmd");

    m.initVar("tolerance");

    m.initVar("highlightColorOption");

    m.initVar("highlightStyleOption");

    m.initVar("diffFilename");

    m.initVar("diffOpt");

    m.readVar("utils");

    m.readProperty("obj19", "escape");

    m.readVar("orig");

    m.functionCall("escape", 1, 1);

    m.initVar("arg");

    m.push(false);

    m.readVar("String");

    m.readVar("arg");

    m.functionCall("String", 1, 1);

    m.readProperty("obj68", "trim");

    m.functionCall("trim", 0, 0);

    m.readProperty("obj68", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("orig");

    m.readVar("utils");

    m.readProperty("obj19", "escape");

    m.readVar("compareTo");

    m.functionCall("escape", 1, 1);

    m.initVar("arg");

    m.push(false);

    m.readVar("String");

    m.readVar("arg");

    m.functionCall("String", 1, 1);

    m.readProperty("obj69", "trim");

    m.functionCall("trim", 0, 0);

    m.readProperty("obj70", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("compareTo");

    m.readProperty("obj3", "_options");

    m.writeVar("isImageMagick");

    m.readVar("isImageMagick");

    m.push(false);

    m.writeVar("bin");

    m.readVar("bin");

    m.push(false);

    m.binaryOp();

    m.readVar("orig");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("compareTo");

    m.binaryOp();

    m.writeVar("execCmd");

    m.push(false);

    m.writeVar("tolerance");

    m.readVar("options");

    m.readVar("isImageMagick");

    m.readVar("options");

    m.unaryOp();

    m.readVar("options");

    m.writeVar("cb");

    m.readVar("exec");

    m.readVar("execCmd");

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.initVar("err");

    m.initVar("stdout");

    m.initVar("stderr");

    m.initVar("regex");

    m.initVar("match");

    m.initVar("equality");

    m.readVar("isImageMagick");

    m.readVar("err");

    m.readVar("cb");

    m.readVar("err");

    m.functionCall("", 0, 1);

    m.readVar("console");

    m.readProperty("obj71", "log");

    m.push(false);

    m.readVar("payload");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj71", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

