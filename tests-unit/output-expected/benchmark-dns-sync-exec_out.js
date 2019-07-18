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

    m.initVar("dnsSync");

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

    m.initVar("net");

    m.initVar("util");

    m.initVar("path");

    m.initVar("shell");

    m.initVar("debug");

    m.push(false);

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("net");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("util");

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

    m.initVar("common");

    m.initVar("_cd");

    m.initVar("_pwd");

    m.initVar("_ls");

    m.initVar("_find");

    m.initVar("_cp");

    m.initVar("_rm");

    m.initVar("_mv");

    m.initVar("_mkdir");

    m.initVar("_test");

    m.initVar("_cat");

    m.initVar("_to");

    m.initVar("_toEnd");

    m.initVar("_sed");

    m.initVar("_grep");

    m.initVar("_which");

    m.initVar("_echo");

    m.initVar("_dirs");

    m.initVar("_pushd");

    m.initVar("_popd");

    m.initVar("_exec");

    m.initVar("_chmod");

    m.initVar("_tempDir");

    m.initVar("_error");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("log");

    m.initVar("error");

    m.initVar("ShellString");

    m.initVar("parseOptions");

    m.initVar("expand");

    m.initVar("unlinkSync");

    m.initVar("randomFileName");

    m.initVar("extend");

    m.initVar("wrap");

    m.initVar("os");

    m.initVar("fs");

    m.initVar("_ls");

    m.initVar("config");

    m.initVar("state");

    m.initVar("platform");

    m.push(false);

    m.writeVar("log");

    m.push(false);

    m.writeVar("error");

    m.push(false);

    m.writeVar("ShellString");

    m.push(false);

    m.writeVar("parseOptions");

    m.push(false);

    m.writeVar("expand");

    m.push(false);

    m.writeVar("unlinkSync");

    m.push(false);

    m.writeVar("randomFileName");

    m.push(false);

    m.writeVar("extend");

    m.push(false);

    m.writeVar("wrap");

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

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_ls");

    m.initVar("path");

    m.initVar("fs");

    m.initVar("common");

    m.initVar("_cd");

    m.initVar("_pwd");

    m.push(false);

    m.writeVar("_ls");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_cd");

    m.initVar("fs");

    m.initVar("common");

    m.push(false);

    m.writeVar("_cd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("module");

    m.readVar("_cd");

    m.writeProperty("obj0", "exports");

    m.writeVar("_cd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_pwd");

    m.initVar("path");

    m.initVar("common");

    m.push(false);

    m.writeVar("_pwd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("module");

    m.readVar("_pwd");

    m.writeProperty("obj1", "exports");

    m.writeVar("_pwd");

    m.readVar("module");

    m.readVar("_ls");

    m.writeProperty("obj2", "exports");

    m.writeVar("_ls");

    m.push(false);

    m.push(false);

    m.writeProperty("obj3", "fatal");

    m.writeProperty("obj3", "silent");

    m.push(false);

    m.writeVar("config");

    m.readVar("exports");

    m.readVar("config");

    m.writeProperty("obj4", "config");

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj5", "tempDir");

    m.writeProperty("obj5", "currentCmd");

    m.writeProperty("obj5", "error");

    m.push(false);

    m.writeVar("state");

    m.readVar("exports");

    m.readVar("state");

    m.writeProperty("obj4", "state");

    m.readVar("os");

    m.readProperty("obj6", "type");

    m.functionCall("checkError", 0, 0);

    m.readProperty("obj7", "match");

    m.push(false);

    m.functionCall("match", 1, 1);

    m.push(false);

    m.writeVar("platform");

    m.readVar("exports");

    m.readVar("platform");

    m.writeProperty("obj4", "platform");

    m.readVar("exports");

    m.readVar("log");

    m.writeProperty("obj4", "log");

    m.readVar("exports");

    m.readVar("error");

    m.writeProperty("obj4", "error");

    m.readVar("exports");

    m.readVar("ShellString");

    m.writeProperty("obj4", "ShellString");

    m.readVar("exports");

    m.readVar("parseOptions");

    m.writeProperty("obj4", "parseOptions");

    m.readVar("exports");

    m.readVar("expand");

    m.writeProperty("obj4", "expand");

    m.readVar("exports");

    m.readVar("unlinkSync");

    m.writeProperty("obj4", "unlinkSync");

    m.readVar("exports");

    m.readVar("randomFileName");

    m.writeProperty("obj4", "randomFileName");

    m.readVar("exports");

    m.readVar("extend");

    m.writeProperty("obj4", "extend");

    m.readVar("exports");

    m.readVar("wrap");

    m.writeProperty("obj4", "wrap");

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_cd");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_cd");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "cd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_pwd");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_pwd");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "pwd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_ls");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_ls");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "ls");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_find");

    m.initVar("fs");

    m.initVar("common");

    m.initVar("_ls");

    m.push(false);

    m.writeVar("_find");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_ls");

    m.readVar("module");

    m.readVar("_find");

    m.writeProperty("obj9", "exports");

    m.writeVar("_find");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_find");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "find");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("copyFileSync");

    m.initVar("cpdirSyncRecursive");

    m.initVar("_cp");

    m.initVar("fs");

    m.initVar("path");

    m.initVar("common");

    m.push(false);

    m.writeVar("copyFileSync");

    m.push(false);

    m.writeVar("cpdirSyncRecursive");

    m.push(false);

    m.writeVar("_cp");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("module");

    m.readVar("_cp");

    m.writeProperty("obj10", "exports");

    m.writeVar("_cp");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_cp");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "cp");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("rmdirSyncRecursive");

    m.initVar("isWriteable");

    m.initVar("_rm");

    m.initVar("common");

    m.initVar("fs");

    m.push(false);

    m.writeVar("rmdirSyncRecursive");

    m.push(false);

    m.writeVar("isWriteable");

    m.push(false);

    m.writeVar("_rm");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("module");

    m.readVar("_rm");

    m.writeProperty("obj11", "exports");

    m.writeVar("_rm");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_rm");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "rm");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_mv");

    m.initVar("fs");

    m.initVar("path");

    m.initVar("common");

    m.push(false);

    m.writeVar("_mv");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("module");

    m.readVar("_mv");

    m.writeProperty("obj12", "exports");

    m.writeVar("_mv");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_mv");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "mv");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("mkdirSyncRecursive");

    m.initVar("_mkdir");

    m.initVar("common");

    m.initVar("fs");

    m.initVar("path");

    m.push(false);

    m.writeVar("mkdirSyncRecursive");

    m.push(false);

    m.writeVar("_mkdir");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("module");

    m.readVar("_mkdir");

    m.writeProperty("obj13", "exports");

    m.writeVar("_mkdir");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_mkdir");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "mkdir");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_test");

    m.initVar("common");

    m.initVar("fs");

    m.push(false);

    m.writeVar("_test");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("module");

    m.readVar("_test");

    m.writeProperty("obj14", "exports");

    m.writeVar("_test");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_test");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "test");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_cat");

    m.initVar("common");

    m.initVar("fs");

    m.push(false);

    m.writeVar("_cat");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("module");

    m.readVar("_cat");

    m.writeProperty("obj15", "exports");

    m.writeVar("_cat");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_cat");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "cat");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_to");

    m.initVar("common");

    m.initVar("fs");

    m.initVar("path");

    m.push(false);

    m.writeVar("_to");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("module");

    m.readVar("_to");

    m.writeProperty("obj16", "exports");

    m.writeVar("_to");

    m.readVar("String");

    m.readProperty("obj17", "prototype");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_to");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj18", "to");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_toEnd");

    m.initVar("common");

    m.initVar("fs");

    m.initVar("path");

    m.push(false);

    m.writeVar("_toEnd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("module");

    m.readVar("_toEnd");

    m.writeProperty("obj19", "exports");

    m.writeVar("_toEnd");

    m.readVar("String");

    m.readProperty("obj17", "prototype");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_toEnd");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj18", "toEnd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_sed");

    m.initVar("common");

    m.initVar("fs");

    m.push(false);

    m.writeVar("_sed");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("module");

    m.readVar("_sed");

    m.writeProperty("obj20", "exports");

    m.writeVar("_sed");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_sed");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "sed");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_grep");

    m.initVar("common");

    m.initVar("fs");

    m.push(false);

    m.writeVar("_grep");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("module");

    m.readVar("_grep");

    m.writeProperty("obj21", "exports");

    m.writeVar("_grep");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_grep");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "grep");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("splitPath");

    m.initVar("_which");

    m.initVar("common");

    m.initVar("fs");

    m.initVar("path");

    m.push(false);

    m.writeVar("splitPath");

    m.push(false);

    m.writeVar("_which");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("module");

    m.readVar("_which");

    m.writeProperty("obj22", "exports");

    m.writeVar("_which");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_which");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "which");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_echo");

    m.initVar("common");

    m.push(false);

    m.writeVar("_echo");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("module");

    m.readVar("_echo");

    m.writeProperty("obj23", "exports");

    m.writeVar("_echo");

    m.readVar("exports");

    m.readVar("_echo");

    m.writeProperty("obj8", "echo");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_isStackIndex");

    m.initVar("_parseStackIndex");

    m.initVar("_actualDirStack");

    m.initVar("_pushd");

    m.initVar("_popd");

    m.initVar("_dirs");

    m.initVar("common");

    m.initVar("_cd");

    m.initVar("path");

    m.initVar("_dirStack");

    m.push(false);

    m.writeVar("_isStackIndex");

    m.push(false);

    m.writeVar("_parseStackIndex");

    m.push(false);

    m.writeVar("_actualDirStack");

    m.push(false);

    m.writeVar("_pushd");

    m.push(false);

    m.writeVar("_popd");

    m.push(false);

    m.writeVar("_dirs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_cd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.push(false);

    m.writeVar("_dirStack");

    m.readVar("exports");

    m.readVar("_pushd");

    m.writeProperty("obj24", "pushd");

    m.readVar("exports");

    m.readVar("_popd");

    m.writeProperty("obj24", "popd");

    m.readVar("exports");

    m.readVar("_dirs");

    m.writeProperty("obj24", "dirs");

    m.readProperty("obj24", "dirs");

    m.writeVar("_dirs");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_dirs");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "dirs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj24", "pushd");

    m.writeVar("_pushd");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_pushd");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "pushd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.readProperty("obj24", "popd");

    m.writeVar("_popd");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_popd");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "popd");

    m.readVar("exports");

    m.readVar("process");

    m.readProperty("obj25", "exit");

    m.writeProperty("obj8", "exit");

    m.readVar("exports");

    m.readVar("process");

    m.readProperty("obj25", "env");

    m.writeProperty("obj8", "env");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("execSync");

    m.initVar("execAsync");

    m.initVar("_exec");

    m.initVar("common");

    m.initVar("_tempDir");

    m.initVar("_pwd");

    m.initVar("path");

    m.initVar("fs");

    m.initVar("child");

    m.push(false);

    m.writeVar("execSync");

    m.push(false);

    m.writeVar("execAsync");

    m.push(false);

    m.writeVar("_exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("writeableDir");

    m.initVar("_tempDir");

    m.initVar("common");

    m.initVar("os");

    m.initVar("fs");

    m.push(false);

    m.writeVar("writeableDir");

    m.push(false);

    m.writeVar("_tempDir");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("os");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("module");

    m.readVar("_tempDir");

    m.writeProperty("obj26", "exports");

    m.writeVar("_tempDir");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_pwd");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("child");

    m.readVar("module");

    m.readVar("_exec");

    m.writeProperty("obj27", "exports");

    m.writeVar("_exec");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_exec");

    m.push(false);

    m.writeProperty("obj28", "notUnix");

    m.push(false);

    m.functionCall("wrap", 3, 3);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "exec");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("_chmod");

    m.initVar("common");

    m.initVar("fs");

    m.initVar("path");

    m.initVar("PERMS");

    m.push(false);

    m.writeVar("_chmod");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("fs");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("path");

    m.push(false);

    m.push(false);

    m.push(false);

    m.push(false);

    m.writeProperty("obj29", "READ");

    m.writeProperty("obj29", "WRITE");

    m.writeProperty("obj29", "EXEC");

    m.push(false);

    m.functionCall("", 1, 1);

    m.initVar("base");

    m.readVar("base");

    m.readProperty("obj29", "EXEC");

    m.readVar("base");

    m.readProperty("obj29", "WRITE");

    m.readVar("base");

    m.readProperty("obj29", "READ");

    m.readVar("base");

    m.readProperty("obj29", "EXEC");

    m.push(false);

    m.binaryOp();

    m.readVar("base");

    m.readProperty("obj29", "WRITE");

    m.push(false);

    m.binaryOp();

    m.readVar("base");

    m.readProperty("obj29", "READ");

    m.push(false);

    m.binaryOp();

    m.readVar("base");

    m.readProperty("obj29", "EXEC");

    m.push(false);

    m.binaryOp();

    m.readVar("base");

    m.readProperty("obj29", "WRITE");

    m.push(false);

    m.binaryOp();

    m.readVar("base");

    m.readProperty("obj29", "READ");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readVar("parseInt");

    m.push(false);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readVar("parseInt");

    m.push(false);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readVar("parseInt");

    m.push(false);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.writeProperty("obj30", "TYPE_MASK");

    m.writeProperty("obj30", "SETUID");

    m.writeProperty("obj30", "SETGID");

    m.writeProperty("obj30", "STICKY");

    m.writeProperty("obj30", "OWNER_READ");

    m.writeProperty("obj30", "OWNER_WRITE");

    m.writeProperty("obj30", "OWNER_EXEC");

    m.writeProperty("obj30", "GROUP_READ");

    m.writeProperty("obj30", "GROUP_WRITE");

    m.writeProperty("obj30", "GROUP_EXEC");

    m.writeProperty("obj30", "OTHER_READ");

    m.writeProperty("obj30", "OTHER_WRITE");

    m.writeProperty("obj30", "OTHER_EXEC");

    m.push(false);

    m.writeVar("PERMS");

    m.readVar("module");

    m.readVar("_chmod");

    m.writeProperty("obj31", "exports");

    m.writeVar("_chmod");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_chmod");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "chmod");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("_tempDir");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "wrap");

    m.push(false);

    m.readVar("_tempDir");

    m.functionCall("wrap", 3, 2);

    m.initVar("cmd");

    m.initVar("fn");

    m.initVar("options");

    m.push(false);

    m.writeProperty("obj8", "tempdir");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("error");

    m.initVar("common");

    m.push(false);

    m.writeVar("error");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("common");

    m.readVar("module");

    m.readVar("error");

    m.writeProperty("obj32", "exports");

    m.writeVar("_error");

    m.readVar("exports");

    m.readVar("_error");

    m.writeProperty("obj8", "error");

    m.readVar("exports");

    m.readVar("common");

    m.readProperty("obj4", "config");

    m.writeProperty("obj8", "config");

    m.writeVar("shell");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.push(false);

    m.initVar("exports");

    m.initVar("require");

    m.initVar("module");

    m.initVar("__filename");

    m.initVar("__dirname");

    m.initVar("color");

    m.initVar("humanize");

    m.initVar("debug");

    m.initVar("coerce");

    m.initVar("tty");

    m.initVar("names");

    m.initVar("skips");

    m.initVar("colors");

    m.initVar("prev");

    m.initVar("prevColor");

    m.initVar("isatty");

    m.push(false);

    m.writeVar("color");

    m.push(false);

    m.writeVar("humanize");

    m.push(false);

    m.writeVar("debug");

    m.push(false);

    m.writeVar("coerce");

    m.readVar("require");

    m.push(false);

    m.functionCall("require", 1, 1);

    m.writeVar("tty");

    m.readVar("module");

    m.readVar("debug");

    m.writeProperty("obj33", "exports");

    m.push(false);

    m.writeVar("names");

    m.push(false);

    m.writeVar("skips");

    m.readVar("process");

    m.readProperty("obj25", "env");

    m.readProperty("obj34", "DEBUG");

    m.push(false);

    m.readProperty("obj35", "split");

    m.push(false);

    m.functionCall("split", 2, 1);

    m.readProperty("obj36", "forEach");

    m.push(false);

    m.functionCall("forEach", 1, 1);

    m.initVar("name");

    m.readVar("name");

    m.readProperty("obj35", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.writeVar("name");

    m.readVar("name");

    m.push(false);

    m.readProperty("obj35", 0);

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("names");

    m.readProperty("obj37", "push");

    m.readVar("RegExp");

    m.push(false);

    m.readVar("name");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.functionCall("RegExp", 2, 1);

    m.functionCall("push", 1, 1);

    m.writeProperty("obj38", "5");

    m.writeProperty("obj38", "4");

    m.writeProperty("obj38", "3");

    m.writeProperty("obj38", "2");

    m.writeProperty("obj38", "1");

    m.writeProperty("obj38", "0");

    m.push(false);

    m.writeVar("colors");

    m.push(false);

    m.writeVar("prev");

    m.push(false);

    m.writeVar("prevColor");

    m.readVar("tty");

    m.readProperty("obj39", "isatty");

    m.push(false);

    m.functionCall("isatty", 1, 1);

    m.writeVar("isatty");

    m.push(false);

    m.functionCall("debug", 1, 1);

    m.initVar("name");

    m.initVar("disabled");

    m.initVar("colored");

    m.initVar("plain");

    m.initVar("match");

    m.initVar("c");

    m.push(false);

    m.writeVar("disabled");

    m.push(false);

    m.writeVar("colored");

    m.push(false);

    m.writeVar("plain");

    m.readVar("disabled");

    m.push(false);

    m.writeProperty("obj40", "enabled");

    m.readVar("skips");

    m.readProperty("obj41", "some");

    m.push(false);

    m.functionCall("some", 1, 1);

    m.writeVar("match");

    m.readVar("match");

    m.readVar("names");

    m.readProperty("obj37", "some");

    m.push(false);

    m.functionCall("some", 1, 1);

    m.initVar("re");

    m.readVar("re");

    m.readProperty("obj42", "test");

    m.readVar("name");

    m.functionCall("test", 1, 1);

    m.writeVar("match");

    m.readVar("match");

    m.readVar("disabled");

    m.writeVar("debug");

    m.readVar("module");

    m.push(false);

    m.writeProperty("obj43", "resolve");

    m.push(false);

    m.writeProperty("obj44", "exports");

    m.writeProperty("obj45", "exports");

    m.writeVar("exports");

    m.writeVar("dnsSync");

    m.readVar("dnsSync");

    m.readProperty("obj43", "resolve");

    m.readVar("payload");

    m.functionCall("resolve", 1, 1);

    m.initVar("hostname");

    m.initVar("output");

    m.initVar("nodeBinary");

    m.initVar("scriptPath");

    m.initVar("response");

    m.initVar("cmd");

    m.readVar("process");

    m.readProperty("obj25", "execPath");

    m.writeVar("nodeBinary");

    m.readVar("path");

    m.readProperty("obj46", "join");

    m.readVar("__dirname");

    m.push(false);

    m.functionCall("join", 0, 2);

    m.writeVar("scriptPath");

    m.readVar("util");

    m.readProperty("obj47", "format");

    m.push(false);

    m.readVar("nodeBinary");

    m.readVar("scriptPath");

    m.readVar("hostname");

    m.functionCall("format", 0, 4);

    m.writeVar("cmd");

    m.readVar("shell");

    m.readProperty("obj8", "exec");

    m.readVar("cmd");

    m.push(false);

    m.writeProperty("obj48", "silent");

    m.push(false);

    m.functionCall("", 0, 2);

    m.initVar("arguments");

    m.initVar("retValue");

    m.initVar("args");

    m.push(false);

    m.writeVar("retValue");

    m.readVar("state");

    m.readVar("cmd");

    m.writeProperty("obj5", "currentCmd");

    m.readVar("state");

    m.push(false);

    m.writeProperty("obj5", "error");

    m.push(false);

    m.readProperty("obj49", "slice");

    m.readProperty("obj50", "call");

    m.readVar("arguments");

    m.push(false);

    m.functionCall("call", 1, 2);

    m.writeVar("args");

    m.readVar("options");

    m.readVar("options");

    m.readProperty("obj28", "notUnix");

    m.unaryOp();

    m.readVar("fn");

    m.readProperty("obj51", "apply");

    m.readVar("args");

    m.functionCall("apply", 2, 2);

    m.initVar("command");

    m.initVar("options");

    m.initVar("callback");

    m.readVar("command");

    m.readVar("options");

    m.readVar("options");

    m.readVar("callback");

    m.readVar("common");

    m.readProperty("obj4", "extend");

    m.readVar("common");

    m.readProperty("obj4", "config");

    m.readProperty("obj3", "silent");

    m.push(false);

    m.writeProperty("obj52", "async");

    m.writeProperty("obj52", "silent");

    m.push(false);

    m.readVar("options");

    m.functionCall("extend", 1, 2);

    m.initVar("target");

    m.initVar("arguments");

    m.initVar("sources");

    m.push(false);

    m.readProperty("obj53", "slice");

    m.readProperty("obj50", "call");

    m.readVar("arguments");

    m.push(false);

    m.functionCall("call", 1, 2);

    m.writeVar("sources");

    m.readVar("sources");

    m.readProperty("obj54", "forEach");

    m.push(false);

    m.functionCall("forEach", 1, 1);

    m.initVar("source");

    m.initVar("key");

    m.readVar("source");

    m.writeVar("key");

    m.readVar("target");

    m.readVar("key");

    m.readVar("source");

    m.readVar("key");

    m.readProperty("obj48", "silent");

    m.writeProperty("obj52", "silent");

    m.readVar("target");

    m.writeVar("options");

    m.readVar("options");

    m.readProperty("obj52", "async");

    m.readVar("execSync");

    m.readVar("command");

    m.readVar("options");

    m.functionCall("execSync", 2, 2);

    m.initVar("cmd");

    m.initVar("opts");

    m.initVar("updateStdout");

    m.initVar("escape");

    m.initVar("xxx");

    m.initVar("tempDir");

    m.initVar("stdoutFile");

    m.initVar("codeFile");

    m.initVar("scriptFile");

    m.initVar("sleepFile");

    m.initVar("options");

    m.initVar("previousStdoutContent");

    m.initVar("script");

    m.initVar("code");

    m.initVar("stdout");

    m.initVar("obj");

    m.push(false);

    m.writeVar("updateStdout");

    m.push(false);

    m.writeVar("escape");

    m.readVar("console");

    m.readProperty("obj55", "log");

    m.push(false);

    m.readVar("cmd");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("cmd");

    m.writeVar("xxx");

    m.readVar("_tempDir");

    m.functionCall("_tempDir", 0, 0);

    m.initVar("state");

    m.readVar("common");

    m.readProperty("obj4", "state");

    m.writeVar("state");

    m.readVar("state");

    m.readProperty("obj5", "tempDir");

    m.readVar("state");

    m.readVar("writeableDir");

    m.readVar("os");

    m.readProperty("obj6", "tempDir");

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.readVar("process");

    m.readProperty("obj25", "env");

    m.push(false);

    m.readProperty("obj34", "TMPDIR");

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.readVar("process");

    m.readProperty("obj25", "env");

    m.push(false);

    m.readProperty("obj34", "TEMP");

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.readVar("process");

    m.readProperty("obj25", "env");

    m.push(false);

    m.readProperty("obj34", "TMP");

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.readVar("process");

    m.readProperty("obj25", "env");

    m.push(false);

    m.readProperty("obj34", "Wimp$ScrapDir");

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.push(false);

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("dir");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.push(false);

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("dir");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.push(false);

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("dir");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.push(false);

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("dir");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.push(false);

    m.readVar("writeableDir");

    m.push(false);

    m.functionCall("writeableDir", 1, 1);

    m.initVar("dir");

    m.initVar("testFile");

    m.readVar("dir");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("dir");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "statSync");

    m.readVar("dir");

    m.functionCall("statSync", 1, 1);

    m.readProperty("obj57", "isDirectory");

    m.functionCall("", 0, 0);

    m.readVar("dir");

    m.push(false);

    m.binaryOp();

    m.readVar("common");

    m.readProperty("obj4", "randomFileName");

    m.functionCall("randomFileName", 0, 0);

    m.initVar("randomHash");

    m.push(false);

    m.writeVar("randomHash");

    m.push(false);

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("hash");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj59", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj61", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj63", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj64", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj61", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj64", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj63", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj65", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj69", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.binaryOp();

    m.binaryOp();

    m.writeVar("testFile");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("testFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("common");

    m.readProperty("obj4", "unlinkSync");

    m.readVar("testFile");

    m.functionCall("unlinkSync", 1, 1);

    m.initVar("file");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "unlinkSync");

    m.readVar("file");

    m.functionCall("unlinkSync", 1, 1);

    m.readVar("dir");

    m.writeProperty("obj5", "tempDir");

    m.readVar("state");

    m.readProperty("obj5", "tempDir");

    m.writeVar("tempDir");

    m.readVar("path");

    m.readProperty("obj46", "resolve");

    m.readVar("tempDir");

    m.push(false);

    m.binaryOp();

    m.readVar("common");

    m.readProperty("obj4", "randomFileName");

    m.functionCall("randomFileName", 0, 0);

    m.initVar("randomHash");

    m.push(false);

    m.writeVar("randomHash");

    m.push(false);

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("hash");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj70", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj71", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj69", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj64", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj72", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj65", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj71", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj63", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj71", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj73", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj65", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj69", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj65", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj61", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj64", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj70", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.binaryOp();

    m.binaryOp();

    m.functionCall("resolve", 0, 1);

    m.writeVar("stdoutFile");

    m.readVar("path");

    m.readProperty("obj46", "resolve");

    m.readVar("tempDir");

    m.push(false);

    m.binaryOp();

    m.readVar("common");

    m.readProperty("obj4", "randomFileName");

    m.functionCall("randomFileName", 0, 0);

    m.initVar("randomHash");

    m.push(false);

    m.writeVar("randomHash");

    m.push(false);

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("hash");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj59", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj65", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj63", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj59", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj69", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj73", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj70", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj74", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj61", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj59", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj73", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.binaryOp();

    m.binaryOp();

    m.functionCall("resolve", 0, 1);

    m.writeVar("codeFile");

    m.readVar("path");

    m.readProperty("obj46", "resolve");

    m.readVar("tempDir");

    m.push(false);

    m.binaryOp();

    m.readVar("common");

    m.readProperty("obj4", "randomFileName");

    m.functionCall("randomFileName", 0, 0);

    m.initVar("randomHash");

    m.push(false);

    m.writeVar("randomHash");

    m.push(false);

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("hash");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj71", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj71", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj70", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj70", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj64", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj73", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj69", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj64", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj65", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj60", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj65", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.binaryOp();

    m.binaryOp();

    m.functionCall("resolve", 0, 1);

    m.writeVar("scriptFile");

    m.readVar("path");

    m.readProperty("obj46", "resolve");

    m.readVar("tempDir");

    m.push(false);

    m.binaryOp();

    m.readVar("common");

    m.readProperty("obj4", "randomFileName");

    m.functionCall("randomFileName", 0, 0);

    m.initVar("randomHash");

    m.push(false);

    m.writeVar("randomHash");

    m.push(false);

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.writeVar("hash");

    m.push(false);

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj63", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj62", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj71", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj72", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj64", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj74", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj67", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj66", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj63", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj71", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj68", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj72", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.readVar("randomHash");

    m.push(false);

    m.functionCall("randomHash", 1, 1);

    m.initVar("count");

    m.initVar("hash");

    m.initVar("i");

    m.readVar("count");

    m.push(false);

    m.binaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.readVar("Math");

    m.readProperty("obj58", "random");

    m.functionCall("random", 0, 0);

    m.binaryOp();

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.readProperty("obj72", "toString");

    m.push(false);

    m.functionCall("toString", 1, 1);

    m.binaryOp();

    m.writeVar("hash");

    m.readVar("i");

    m.push(false);

    m.binaryOp();

    m.writeVar("i");

    m.readVar("i");

    m.readVar("count");

    m.binaryOp();

    m.readVar("hash");

    m.binaryOp();

    m.binaryOp();

    m.functionCall("resolve", 0, 1);

    m.writeVar("sleepFile");

    m.readVar("common");

    m.readProperty("obj4", "extend");

    m.readVar("common");

    m.readProperty("obj4", "config");

    m.readProperty("obj3", "silent");

    m.writeProperty("obj75", "silent");

    m.push(false);

    m.readVar("opts");

    m.functionCall("extend", 1, 2);

    m.initVar("target");

    m.initVar("arguments");

    m.initVar("sources");

    m.push(false);

    m.readProperty("obj76", "slice");

    m.readProperty("obj50", "call");

    m.readVar("arguments");

    m.push(false);

    m.functionCall("call", 1, 2);

    m.writeVar("sources");

    m.readVar("sources");

    m.readProperty("obj77", "forEach");

    m.push(false);

    m.functionCall("forEach", 1, 1);

    m.initVar("source");

    m.initVar("key");

    m.readVar("source");

    m.writeVar("key");

    m.readVar("target");

    m.readVar("key");

    m.readVar("source");

    m.readVar("key");

    m.readProperty("obj52", "silent");

    m.writeProperty("obj75", "silent");

    m.writeVar("key");

    m.readVar("target");

    m.readVar("key");

    m.readVar("source");

    m.readVar("key");

    m.readProperty("obj52", "async");

    m.writeProperty("obj75", "async");

    m.readVar("target");

    m.writeVar("options");

    m.push(false);

    m.writeVar("previousStdoutContent");

    m.readVar("cmd");

    m.push(false);

    m.readVar("stdoutFile");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeVar("cmd");

    m.push(false);

    m.readVar("escape");

    m.readVar("cmd");

    m.functionCall("escape", 1, 1);

    m.initVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj78", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.readProperty("obj79", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("escape");

    m.readVar("codeFile");

    m.functionCall("escape", 1, 1);

    m.initVar("str");

    m.readVar("str");

    m.push(false);

    m.binaryOp();

    m.readProperty("obj80", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.readProperty("obj80", "replace");

    m.push(false);

    m.push(false);

    m.functionCall("replace", 2, 2);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.writeVar("script");

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("scriptFile");

    m.functionCall("existsSync", 1, 1);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("stdoutFile");

    m.functionCall("existsSync", 1, 1);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("scriptFile");

    m.readVar("script");

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("console");

    m.readProperty("obj55", "log");

    m.push(false);

    m.readVar("script");

    m.binaryOp();

    m.functionCall("bound log", 0, 1);

    m.readVar("child");

    m.readProperty("obj81", "exec");

    m.push(false);

    m.readVar("process");

    m.readProperty("obj25", "execPath");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.readVar("scriptFile");

    m.binaryOp();

    m.readVar("process");

    m.readProperty("obj25", "env");

    m.readVar("_pwd");

    m.functionCall("_pwd", 1, 0);

    m.initVar("options");

    m.initVar("pwd");

    m.readVar("path");

    m.readProperty("obj46", "resolve");

    m.readVar("process");

    m.readProperty("obj25", "cwd");

    m.functionCall("cwd", 0, 0);

    m.functionCall("resolve", 0, 1);

    m.writeVar("pwd");

    m.readVar("common");

    m.readProperty("obj4", "ShellString");

    m.readVar("pwd");

    m.functionCall("ShellString", 1, 1);

    m.initVar("str");

    m.readVar("str");

    m.push(false);

    m.writeProperty("obj82", "maxBuffer");

    m.writeProperty("obj82", "cwd");

    m.writeProperty("obj82", "env");

    m.push(false);

    m.functionCall("exec", 0, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("updateStdout");

    m.functionCall("updateStdout", 0, 0);

    m.initVar("stdoutContent");

    m.readVar("options");

    m.readProperty("obj75", "silent");

    m.readVar("fs");

    m.readProperty("obj56", "writeFileSync");

    m.readVar("sleepFile");

    m.push(false);

    m.functionCall("writeFileSync", 3, 2);

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("codeFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "existsSync");

    m.readVar("stdoutFile");

    m.functionCall("existsSync", 1, 1);

    m.unaryOp();

    m.readVar("parseInt");

    m.push(false);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.writeVar("code");

    m.readVar("isNaN");

    m.readVar("code");

    m.functionCall("isNaN", 1, 1);

    m.readVar("parseInt");

    m.readVar("fs");

    m.readProperty("obj56", "readFileSync");

    m.readVar("codeFile");

    m.push(false);

    m.functionCall("readFileSync", 2, 2);

    m.push(false);

    m.functionCall("parseInt", 2, 2);

    m.writeVar("code");

    m.readVar("isNaN");

    m.readVar("code");

    m.functionCall("isNaN", 1, 1);

    m.readVar("fs");

    m.readProperty("obj56", "readFileSync");

    m.readVar("stdoutFile");

    m.push(false);

    m.functionCall("readFileSync", 2, 2);

    m.writeVar("stdout");

    m.unaryOp();

    m.readVar("common");

    m.readProperty("obj4", "unlinkSync");

    m.readVar("scriptFile");

    m.functionCall("unlinkSync", 1, 1);

    m.initVar("file");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "unlinkSync");

    m.readVar("file");

    m.functionCall("unlinkSync", 1, 1);

    m.unaryOp();

    m.readVar("common");

    m.readProperty("obj4", "unlinkSync");

    m.readVar("stdoutFile");

    m.functionCall("unlinkSync", 1, 1);

    m.initVar("file");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "unlinkSync");

    m.readVar("file");

    m.functionCall("unlinkSync", 1, 1);

    m.unaryOp();

    m.readVar("common");

    m.readProperty("obj4", "unlinkSync");

    m.readVar("codeFile");

    m.functionCall("unlinkSync", 1, 1);

    m.initVar("file");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "unlinkSync");

    m.readVar("file");

    m.functionCall("unlinkSync", 1, 1);

    m.unaryOp();

    m.readVar("common");

    m.readProperty("obj4", "unlinkSync");

    m.readVar("sleepFile");

    m.functionCall("unlinkSync", 1, 1);

    m.initVar("file");

    m.unaryOp();

    m.readVar("fs");

    m.readProperty("obj56", "unlinkSync");

    m.readVar("file");

    m.functionCall("unlinkSync", 1, 1);

    m.readVar("code");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("common");

    m.readProperty("obj4", "error");

    m.push(false);

    m.push(false);

    m.functionCall("error", 2, 2);

    m.initVar("msg");

    m.initVar("_continue");

    m.readVar("state");

    m.readProperty("obj5", "error");

    m.push(false);

    m.binaryOp();

    m.unaryOp();

    m.readVar("state");

    m.push(false);

    m.writeProperty("obj5", "error");

    m.readVar("state");

    m.readVar("state");

    m.readProperty("obj5", "error");

    m.readVar("state");

    m.readProperty("obj5", "currentCmd");

    m.push(false);

    m.binaryOp();

    m.readVar("msg");

    m.binaryOp();

    m.push(false);

    m.binaryOp();

    m.binaryOp();

    m.writeProperty("obj5", "error");

    m.readVar("msg");

    m.readProperty("obj35", "length");

    m.push(false);

    m.binaryOp();

    m.readVar("config");

    m.readProperty("obj3", "fatal");

    m.readVar("_continue");

    m.readVar("code");

    m.readVar("stdout");

    m.writeProperty("obj83", "output");

    m.writeProperty("obj83", "code");

    m.push(false);

    m.writeVar("obj");

    m.readVar("obj");

    m.writeVar("retValue");

    m.readVar("state");

    m.push(false);

    m.writeProperty("obj5", "currentCmd");

    m.readVar("retValue");

    m.writeVar("response");

    m.readVar("response");

    m.readVar("response");

    m.readProperty("obj83", "code");

    m.push(false);

    m.binaryOp();

    m.readVar("debug");

    m.push(false);

    m.push(false);

    m.readVar("hostname");

    m.binaryOp();

    m.functionCall("disabled", 0, 2);

    m.push(false);

    m.push(false);

    m.readVar("done");

    m.functionCall("done", 0, 0);

    m.unaryOp();

    m.readVar("console");

    m.readProperty("obj55", "log");

    m.push(false);

    m.functionCall("bound log", 0, 1);

    m.endExecution();

};

