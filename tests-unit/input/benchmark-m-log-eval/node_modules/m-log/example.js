var log  = require('m-log');

log.out('# usage');
log.out("A", {"hoge":"huga"});
log.silly("A", {"hoge":"fuga"});
log.info("A", {"hoge":"fuga"});
log.input("A", {"hoge":"fuga"});
log.verbose("A", {"hoge":"fuga"});
log.data("A", {"hoge":"fuga"});
log.help("A", {"hoge":"fuga"});
log.warn("A", {"hoge":"fuga"});
log.debug("A", {"hoge":"fuga"});
log.error("A", {"hoge":"fuga"});

log.out('# Switch Debuggable');
log.setDebuggable(false);
log.out("B", {"hoge":"huga"}); // <- Always output
log.silly("B", {"hoge":"fuga"});
log.info("B", {"hoge":"fuga"});
log.input("B", {"hoge":"fuga"});
log.verbose("B", {"hoge":"fuga"});
log.data("B", {"hoge":"fuga"});
log.help("B", {"hoge":"fuga"});
log.warn("B", {"hoge":"fuga"});
log.debug("B", {"hoge":"fuga"});
log.error("B", {"hoge":"fuga"});

log.out('# Switch Debuggable');
log.setDebuggable(true);
log.out("C", {"hoge":"huga"});
log.silly("C", {"hoge":"fuga"});
log.info("C", {"hoge":"fuga"});
log.input("C", {"hoge":"fuga"});
log.verbose("C", {"hoge":"fuga"});
log.data("C", {"hoge":"fuga"});
log.help("C", {"hoge":"fuga"});
log.warn("C", {"hoge":"fuga"});
log.debug("C", {"hoge":"fuga"});
log.error("C", {"hoge":"fuga"});
log.out();

log.out('# Change Theme');
var theme = log.getColorTheme();
log.out(theme);
log.silly("D", {"hoge":"fuga"});
log.setColorTheme({silly: ['magenta','underline']});
log.silly("D", {"hoge":"fuga"}); // <- changed magenta and underline
log.setColorTheme({silly: 'yellow'});
log.silly("C", {"hoge":"fuga"}); // <- changed Yellow
log.info("C", {"hoge":"fuga"});
log.input("C", {"hoge":"fuga"});
log.verbose("C", {"hoge":"fuga"});
log.data("C", {"hoge":"fuga"});
log.help("C", {"hoge":"fuga"});
log.warn("C", {"hoge":"fuga"});
log.debug("C", {"hoge":"fuga"});
log.error("C", {"hoge":"fuga"});

// Change DateTimeFormat
var format = log.getDateTimeformat();
log.out(format);
format = 'yyyy.mm.dd hh:mm:ss # ';
log.setDateTimeformat(format);

log.warn("a", {"hoge":"foo"});
