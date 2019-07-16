'use strict';

var assert = require('assert'),
    dnsSync = require('../index');

describe('dns sync', function () {

    it('should resolve dns', function () {
        assert.ok(dnsSync.resolve('www.paypal.com'));
        assert.ok(dnsSync.resolve('www.google.com'));
        assert.ok(dnsSync.resolve('www.yahoo.com'));
    });

    it('should fail to resolve dns', function () {
        assert.ok(!dnsSync.resolve('www.paypal.con'));
        assert.ok(!dnsSync.resolve('www.not-google.first'));
        assert.ok(!dnsSync.resolve('www.hello-yahoo.next'));
    });
});
