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

    m.initVar("pid");

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

    m.initVar("os");

    m.initVar("stats");

    m.initVar("wrapper");

    m.initVar("pusage");

    m.initVar("platform");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("os");

    m.initVar("fs");

    m.initVar("p");

    m.initVar("exec");

    m.initVar("spawn");

    m.initVar("helpers");

    m.initVar("format");

    m.initVar("stats");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("p");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "exec");

    m.writeVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "spawn");

    m.writeVar("spawn");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("os");

    m.initVar("exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj0", "exec");

    m.writeVar("exec");

    m.readVar("module");

    m.push(false);

    m.push(false);

    m.writeProperty("obj1", "cpu");

    m.writeProperty("obj1", "getconf");

    m.push(false);

    m.writeProperty("obj2", "exports");

    m.writeVar("helpers");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj3", "format");

    m.writeVar("format");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj4", "win");

    m.writeProperty("obj4", "ps");

    m.writeProperty("obj4", "proc_calc");

    m.writeProperty("obj4", "proc");

    m.writeProperty("obj4", "cpu");

    m.writeProperty("obj4", "history");

    m.push(false);

    m.writeVar("stats");

    m.readVar("module");

    m.readVar("stats");

    m.writeProperty("obj5", "exports");

    m.writeVar("stats");

    m.push(false);

    m.writeVar("wrapper");

    m.readVar("wrapper");

    m.push(false);

    m.functionCall("wrapper", 1, 1);

    m.initVar("stat_type");

    m.push(false);

    m.readVar("wrapper");

    m.push(false);

    m.functionCall("wrapper", 1, 1);

    m.initVar("stat_type");

    m.push(false);

    m.readVar("wrapper");

    m.push(false);

    m.functionCall("wrapper", 1, 1);

    m.initVar("stat_type");

    m.push(false);

    m.readVar("wrapper");

    m.push(false);

    m.functionCall("wrapper", 1, 1);

    m.initVar("stat_type");

    m.push(false);

    m.readVar("wrapper");

    m.push(false);

    m.functionCall("wrapper", 1, 1);

    m.initVar("stat_type");

    m.push(false);

    m.readVar("wrapper");

    m.push(false);

    m.functionCall("wrapper", 1, 1);

    m.initVar("stat_type");

    m.push(false);

    m.readVar("wrapper");

    m.push(false);

    m.functionCall("wrapper", 1, 1);

    m.initVar("stat_type");

    m.push(false);

    m.push(false);

    m.writeProperty("obj6", "unsupported");

    m.writeProperty("obj6", "aix");

    m.writeProperty("obj6", "linux");

    m.writeProperty("obj6", "win");

    m.writeProperty("obj6", "netbsd");

    m.writeProperty("obj6", "freebsd");

    m.writeProperty("obj6", "sunos");

    m.writeProperty("obj6", "darwin");

    m.push(false);

    m.writeVar("pusage");

    m.readVar("os");

    m.readProperty("obj7", "platform");

    m.functionCall("platform", 0, 0);

    m.writeVar("platform");

    m.readVar("platform");

    m.readProperty("obj8", "match");

    m.push(false);

    m.functionCall("match", 1, 1);

    m.readVar("platform");

    m.writeVar("platform");

    m.readVar("pusage");

    m.readVar("platform");

    m.readProperty("obj6", "linux");

    m.readVar("platform");

    m.writeVar("platform");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj9", "stat");

    m.readVar("exports");

    m.push(false);

    m.writeProperty("obj9", "unmonitor");

    m.readVar("exports");

    m.readVar("stats");

    m.readProperty("obj4", "history");

    m.writeProperty("obj9", "_history");

    m.writeVar("pid");

    m.readVar("pid");

    m.readProperty("obj9", "stat");

    m.push(false);

    m.readVar("payload");

    m.binaryOp();

    m.push(false);

    m.functionCall("", 0, 2);

    m.initVar("arguments");

    m.readVar("pusage");

    m.readVar("platform");

    m.readProperty("obj6", "linux");

    m.readProperty("obj10", "apply");

    m.readVar("stats");

    m.push(false);

    m.readProperty("obj11", "slice");

    m.readProperty("obj12", "call");

    m.readVar("arguments");

    m.functionCall("call", 1, 1);

    m.functionCall("apply", 2, 2);

    m.initVar("pid");

    m.initVar("options");

    m.initVar("cb");

    m.readVar("options");

    m.readVar("options");

    m.writeVar("cb");

    m.push(false);

    m.writeVar("options");

    m.readVar("stats");

    m.readVar("stat_type");

    m.readProperty("obj4", "proc");

    m.readVar("pid");

    m.readVar("options");

    m.readVar("cb");

    m.functionCall("proc", 3, 3);

    m.initVar("pid");

    m.initVar("options");

    m.initVar("done");

    m.initVar("self");

    m.writeVar("self");

    m.readProperty("obj4", "cpu");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("helpers");

    m.readProperty("obj1", "cpu");

    m.push(false);

    m.functionCall("cpu", 1, 1);

    m.initVar("next");

    m.initVar("self");

    m.writeVar("self");

    m.readVar("self");

    m.readProperty("obj1", "getconf");

    m.push(false);

    m.push(false);

    m.writeProperty("obj13", "default");

    m.push(false);

    m.push(false);

    m.functionCall("getconf", 3, 3);

    m.initVar("keyword");

    m.initVar("options");

    m.initVar("next");

    m.readVar("options");

    m.readVar("exec");

    m.push(false);

    m.readVar("keyword");

    m.binaryOp();

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.initVar("error");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("error");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.readVar("stdout");

    m.functionCall("parseInt", 2, 1);

    m.writeVar("stdout");

    m.readVar("isNaN");

    m.readVar("stdout");

    m.functionCall("isNaN", 1, 1);

    m.readVar("next");

    m.push(false);

    m.readVar("stdout");

    m.functionCall("", 2, 2);

    m.initVar("err");

    m.initVar("clock_tick");

    m.readVar("self");

    m.readProperty("obj1", "getconf");

    m.push(false);

    m.push(false);

    m.writeProperty("obj14", "default");

    m.push(false);

    m.push(false);

    m.functionCall("getconf", 3, 3);

    m.initVar("keyword");

    m.initVar("options");

    m.initVar("next");

    m.readVar("options");

    m.readVar("exec");

    m.push(false);

    m.readVar("keyword");

    m.binaryOp();

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.initVar("error");

    m.initVar("stdout");

    m.initVar("stderr");

    m.readVar("error");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.readVar("stdout");

    m.functionCall("parseInt", 2, 1);

    m.writeVar("stdout");

    m.readVar("isNaN");

    m.readVar("stdout");

    m.functionCall("isNaN", 1, 1);

    m.readVar("next");

    m.push(false);

    m.readVar("stdout");

    m.functionCall("", 2, 2);

    m.initVar("err");

    m.initVar("pagesize");

    m.readVar("next");

    m.push(false);

    m.readVar("clock_tick");

    m.readVar("os");

    m.readProperty("obj7", "uptime");

    m.functionCall("getUptime", 0, 0);

    m.readVar("pagesize");

    m.writeProperty("obj15", "pagesize");

    m.writeProperty("obj15", "uptime");

    m.writeProperty("obj15", "clock_tick");

    m.push(false);

    m.functionCall("", 2, 2);

    m.initVar("err");

    m.initVar("cpu");

    m.readVar("err");

    m.readVar("self");

    m.readVar("cpu");

    m.writeProperty("obj4", "cpu");

    m.readVar("self");

    m.readProperty("obj4", "proc_calc");

    m.readVar("pid");

    m.readVar("options");

    m.readVar("done");

    m.functionCall("proc_calc", 3, 3);

    m.initVar("pid");

    m.initVar("options");

    m.initVar("done");

    m.initVar("history");

    m.initVar("cpu");

    m.initVar("self");

    m.readProperty("obj4", "history");

    m.readVar("pid");

    m.readProperty("obj16", "1 && $(touch ./xyzzy) ");

    m.push(false);

    m.writeVar("history");

    m.readProperty("obj4", "cpu");

    m.writeVar("cpu");

    m.writeVar("self");

    m.readVar("fs");

    m.readProperty("obj17", "readFile");

    m.readVar("p");

    m.readProperty("obj18", "join");

    m.push(false);

    m.push(false);

    m.readVar("pid");

    m.binaryOp();

    m.push(false);

    m.functionCall("join", 0, 3);

    m.push(false);

    m.push(false);

    m.functionCall("readFile", 3, 3);

    m.initVar("err");

    m.initVar("infos");

    m.initVar("index");

    m.initVar("stat");

    m.initVar("childrens");

    m.initVar("total");

    m.initVar("seconds");

    m.readVar("err");

    m.readVar("done");

    m.readVar("err");

    m.push(false);

    m.functionCall("", 2, 2);

    m.initVar("err");

    m.initVar("stat");

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj19", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

