var MORE_DETAILS = " Type \033[1;36;1mcocos help\033[0m to see more details!"
module.exports = {
    ERR_PRE : "\033[1;31;1mERROR:\033[0m ",
    WARN_PRE : "\033[1;33;1mWARN:\033[0m ",
    VERSION : "\033[1;36;1m[%version%]\033[0m",

    BUILDING : "\033[1;36;1mBuilding...\033[0m",
    PUBLISHING : "\033[1;36;1mPublishing...\033[0m",
    INSTALLING : "\033[1;36;1mInstalling...\033[0m",
    UPDATING : "\033[1;36;1mUpdating...\033[0m",

    CMD_ERR : "command error, please check!" + MORE_DETAILS,
    CMD_OPTS_ERR : "options for command error, please check!" + MORE_DETAILS,
    CMD_HAS_NO_OPT : "command \033[36m[%command%]\033[0m has no option \033[31m[%opt%]\033[0m, please check!" + MORE_DETAILS,
    CMD_ARGS_ERR : "command args error, please check!" + MORE_DETAILS,
    FUNC_NAME_NULL : "function can not be null, please check!",
    PLUGIN_NOT_EXISTS : "plugin \033[31m[%name%]\033[0m not exists, please check!" + MORE_DETAILS,
    CMD_LENGTH : "length of arguments for \033[36m[%cmd%]\033[0m should be \033[31m[%length%]\033[0m, please check!",
    PUBLISH_FAILED : "publish failed, please check!",
    SUCCESS : "\033[32mSuccess!\033[0m",
    SUCCESS_PATH : "\033[32mSuccess! ---->\033[0m [%path%]",
    TEMPLATE_NOT_EXISTS : "[%tempDir%] not exists, please check!",
    PROJ_EXISTS : "[%projDir%] exists! Can not create again!",
    PATH_NOT_EXISTS : "[%path%] not exists!",
    NOT_A_DIR : "[%dir%] is not a directory!",
    GENERATING : "\033[36m[%target%]\033[0m generating...",
    PKG_NOT_EXISTS : "There is no package.json in \033[36m[%dir%]\033[0m, please check!!",
    RES_KEY_EXISTS : "key \033[36m[%key%]\033[0m for resource exists, please check!!",


    PROJ_NAME_NULL : "Project name can not be null, please check!",



    DESC_VERSION : ["Show the version of cocos-utils"],
    DESC_HELP : ["Show help for commands of cocos-utils"],
    DESC_NEW : [
        "Create a project",
        "e.g. cocos new helloworld",
        "The project name should not be null and have blank"
    ],
    DESC_BUILD : [
        "Build the project.",
        "When the current path is your project path, type cocos build",
        "Otherwise, cocos build your/project/path/",
        "Or, cocos build \"your project/path/\""
    ],
    DESC_PUBLISH : [
        "Publish the project",
        "When the current path is your project path, type cocos publish",
        "Otherwise, cocos publish your/project/path/",
        "Or, cocos publish \"your project/path/\""
    ],
    DESC_GEN_RES : [
        "Generate resources config for the project",
        "When the current path is your project path, type cocos genRes",
        "Otherwise, cocos genRes your/project/path/",
        "Or, cocos genRes \"your project/path/\""
    ],
    DESC_GEN_JS_RES : [
        "Generate js resources config for the project",
        "When the current path is your project path, type cocos genJsRes",
        "Otherwise, cocos genJsRes your/project/path/",
        "Or, cocos genJsRes \"your project/path/\""
    ],
    DESC_GEN_BASE_CFG : [
        "Generate base js list for the project",
        "When the current path is your project path, type cocos genBaseCfg",
        "Otherwise, cocos genBaseCfg your/project/path/",
        "Or, cocos genBaseCfg \"your project/path/\""
    ],

    DESC_OPT_O : [
        "Output path of generated file",
        "e.g.  -o FileName",
        "Or  -o \"File Name\""
    ],

    DESC_OPT_DIR_CFGS : [
        "DirCfgs to generate config, like dirCfgs in cocos.json",
        "e.g.  -dc res/Normal res/Music",
        "Or  -dc \"res/Normal->res/Normal\" \"res/Music->res/Music\""
    ],

    DESC_GEN_JS_RES_OPT_DIR_CFGS : [
        "DirCfgs to generate config, like dirCfgs in cocos.json",
        "e.g.  -dc src test",
        "Or  -dc \"src->src\" \"test->test\""
    ],

    DESC_OPT_DIR : [
        "Folder to put the project, p is short for path",
        "e.g.  -p a/b/c",
        "Or  -p \"a/b/c cc\""
    ],
    DESC_OPT_ENGINE_MODULES : [
        "Path of engine modules, m is short for engine modules",
        "e.g.  -m ../../a/b/node_modules",
        "Or  -m \"../../a/b/node_modules\""
    ],
    DESC_OPT_TEMP_NAME : [
        "Template name which you want to use to create project",
        "t is short for template",
        "e.g.  -t myTemp"
    ],

    DESC_INSTALL : [
        "Install all modules of cocos2d-html5 under current path",
        "Type cocos install"
    ],
    DESC_OPT_REGISTRY : [
        "Use registry, default to be \"http://registry.cnpmjs.org\"",
        "e.g.  -r",
        "Or  -r \"http://registry.cnpmjs.org\""
    ],

    DESC_OPT_VERSION : [
        "Use version, default to be \"*\"",
        "e.g.  -v 2.2.2",
        "Or  -r \"2.2.2\""
    ],

    DESC_UPDATE : [
        "Update all modules of cocos2d-html5 under current path",
        "Type cocos update."
    ]
};
