'use strict';

var dns = require('dns'),
    name = process.argv[2],
    debug = require('debug')('dns-sync');

dns.lookup(name, function (err, ip) {
    if (err) {
        process.exit(1);
        debug(err);
    } else {
        debug(name, 'resolved to', ip);
        process.stdout.write(ip);
    }
});
