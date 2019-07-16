'use strict';

var _ = require('../lib/proto')
    , assert = require('assert');


describe('Number functions', function() {
    it('should define isNumeric function', function() {
        assert(_.isNumeric(234));
        assert(_.isNumeric(345.2345));
        assert(_.isNumeric(0.000235345));
        assert(_.isNumeric(10/3));
        assert(_.isNumeric('234'));
        assert(_.isNumeric('234.045'));

        assert.equal(_.isNumeric(1/0), false);
        assert.equal(_.isNumeric(Infinity), false);
        assert.equal(_.isNumeric(NaN), false);
        assert.equal(_.isNumeric('eereg'), false);
        assert.equal(_.isNumeric('100g'), false);
        assert.equal(_.isNumeric(''), false);
        assert.equal(_.isNumeric(' '), false);
    });
});
