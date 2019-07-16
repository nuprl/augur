/*jslint
    white: true,
    nomen: true
*/
/*global
    __dirname,
    describe,
    it,
    expect,
    require
*/

var modulify = require('../src/modulify.js');

describe('modulify.file', function () {
    "use strict";
    var result = modulify.file(__dirname + '/../testSamples/sampleScript.js');
    it('should find vars in the top scope', function () {
        expect(result).toContain('module.exports.findVar');
        expect(result).toContain('module.exports.findVarFunc');
    });
    it('should find functions in the top scope', function () {
        expect(result).toContain('module.exports.findFunc');
    });
    it('should find new global properties', function () {
        expect(result).toContain('module.exports.findGlobal');
    });
});


