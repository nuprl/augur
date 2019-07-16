'use strict';

var _ = require('../lib/proto')
    , assert = require('assert');


describe('String functions', function() {
    it('should define firstUpperCase function', function() {
        var upper = 'UPPERCASE'
            , lower = 'lowercase';

        assert.equal(_.firstUpperCase(upper), 'UPPERCASE');
        assert.equal(_.firstUpperCase(lower), 'Lowercase');
    });


    it('should define firstLowerCase function', function() {
        var upper = 'UPPERCASE'
            , lower = 'lowercase';

        assert.equal(_.firstLowerCase(upper), 'uPPERCASE');
        assert.equal(_.firstLowerCase(lower), 'lowercase');
    });


    it('should define toRegExp function', function() {
        var pattern = /ab+c/i
            , patternStr = pattern.toString();

        assert.equal(patternStr, '/ab+c/i');

        var regex = _.toRegExp(patternStr);
        assert.equal(patternStr, regex.toString());
        assert(regex instanceof RegExp);
        assert(regex.test('ABBC'));
    });


    it('should define toFunction function', function() {
        function myFunc() { return 1234; }
        var funcStr = myFunc.toString();

        assert.equal(funcStr, 'function myFunc() { return 1234; }');

        var func = _.toFunction(funcStr);
        assert.equal(funcStr, func.toString());
        assert.equal(typeof func, 'function');
        assert.equal(func(), 1234);
    });


    it('should define toQueryString function', function() {
        var params = {name: 'Jason', age: 30};

        var str = _.toQueryString(params);
        assert.equal(str, 'name=Jason&age=30');
    });


    it('should define fromQueryString function', function() {
        var str = 'name=Jason&age=30'; ;

        var params = _.fromQueryString(str);
        assert.deepEqual(params, {name: 'Jason', age: 30});
    });


    it('should define toDate function', function() {
        assert.equal(_.toDate(null), undefined);
        assert.equal(_.toDate(undefined), undefined);
        assert.equal(_.toDate(''), undefined);
        assert.equal(_.toDate('abc'), undefined);
        assert.equal(_.toDate('2014-19-02'), undefined);
        assert.equal(_.toDate('2014-02-19').toString(), new Date('2014-02-19').toString());
    });


    it('should define jsonParse', function() {
        var json = '{"test":1, "name":"milo"}'
            , badJson = '{"test:1';

        assert.deepEqual(_.jsonParse(json), { test: 1, name: 'milo' });
        assert.equal(_.jsonParse(badJson), undefined);
        assert.throws(function() {
            JSON.parse(badJson);
        });        
    });


    it('should define hashCode function', function() {
        var result1 = _.hashCode('This was no small decision. Four generations of Orr men had been Eagles, including Ron and Andrew\'s older brother. Andrew had spent years working toward Scouting\'s highest rank, and was just months from reaching it.');
        assert.equal(typeof result1, 'number');
        var result2 = _.hashCode('But the Boy Scouts had decided to admit gays, and Ron Orr, a tall, soft-spoken man with a firm handshake, is clear about his Christian faith and what it says about homosexuality: It is a sin that cannot be tolerated.');
        assert.equal(typeof result2, 'number');
        assert(result1 != result2);
    });


    it('should define unPrefix function', function() {
        assert.equal(_.unPrefix('root_string', 'root_'), 'string');
        assert.equal(_.unPrefix('other_string', 'root_'), undefined);
    });


    it('should define format function', function() {
        assert.equal(_.format('foo$1and$2bar$1', 'x', 'y'), 'fooxandybarx')
        assert.equal(_.format('this $1 is a $$ test', 'yo'), 'this yo is a $ test')
    });
});
