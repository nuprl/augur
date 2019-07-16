var assert = require('assert');
var ostb = require('..')

describe('os-toolbox', function() {
    this.timeout(10000);
    describe('#uptime()', function() {
        it('should return uptime', function(done) {
            var value = ostb.uptime();
            if (value) {
                done();
            } else {
                done(new Error("Error getting uptime"));
            }
        });
    });

    describe('#platform()', function() {
        it('should return platform', function(done) {
            var value = ostb.platform();
            if (value) {
                done();
            } else {
                done(new Error("Error getting platform"));
            }
        });
    });

    describe('#cpuLoad()', function() {
        it('should return cpu load', function(done) {
            ostb.cpuLoad().then(function(load) {
                if (load) {
                    done();
                } else {
                    done(new Error("Error getting cpu load"));
                }
            }, function(error) {
                done(new Error("Error getting cpu load"));
            });
        });
    });

    describe('#memoryUsage()', function() {
        it('should return memory usage', function(done) {
            ostb.memoryUsage().then(function(memusage) {
                if (memusage) {
                    done();
                } else {
                    done(new Error("Error getting memory usage"));
                }
            }, function(error) {
                done(new Error("Error getting memory usage"));
            });
        });
    });

    describe('#currentProcesses()', function() {
        it('should return current running processes', function(done) {
            ostb.currentProcesses().then(function(processes) {
                if (processes) {
                    done();
                } else {
                    done(new Error("Error getting current running processes"));
                }
            }, function(error) {
                done(new Error("Error getting current running processes"));
            });
        });

        it('should return current running processes order by cpu usage', function(done) {
            ostb.currentProcesses({ type: 'cpu', order: 'desc' }).then(function(processes) {
                if (processes) {
                    done();
                } else {
                    done(new Error("Error getting current running processes"));
                }
            }, function(error) {
                done(new Error("Error getting current running processes"));
            });
        });
    });

    describe('#services()', function() {
        it('should return services', function(done) {
            ostb.services().then(function(result) {
                if (result) {
                    done();
                } else {
                    done(new Error("Error getting current running processes"));
                }
            }, function(error) {
                done(new Error("Error getting current running processes"));
            });
        });

        it('should return filtered services', function(done) {
            ostb.services([{ name: 'apache2' }, { name: 'cron' }]).then(function(result) {
                if (result) {
                    done();
                } else {
                    done(new Error("Error getting current running processes"));
                }
            }, function(error) {
                done(new Error("Error getting current running processes"));
            });
        });
    });
});