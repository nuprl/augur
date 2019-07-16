'use strict';

var _ = require('../lib/proto')
    , assert = require('assert')
    , perfTest = require('./perf');


describe('Array functions', function() {
    it('should define appendArray function', function() {
        var arr = [1, 2, 3];

        _.appendArray(arr, [4, 5, 6, 7]);

        assert.deepEqual(arr, [1, 2, 3, 4, 5, 6, 7]);
    });


    it('should define prependArray function', function() {
        var arr = [1, 2, 3];

        _.prependArray(arr, [4, 5, 6, 7]);

        assert.deepEqual(arr, [4, 5, 6, 7, 1, 2, 3]);
    });


    it('should define spliceItem function', function() {
        var arr = ['a', 'b', 'c'];

        var result = _.spliceItem(arr, 'b');

        assert.deepEqual(arr, ['a', 'c']);
        assert.equal(result, arr);
    });


    it('should define toArray function', function() {
        var arrayLikeObject = {};
        arrayLikeObject[0] = 2;
        arrayLikeObject[1] = 5;
        arrayLikeObject[2] = 8;
        arrayLikeObject.length = 3;

        var arr = _.toArray(arrayLikeObject);

        assert(Array.isArray(arr), 'should convert arrayLikeObject to array');
        assert.deepEqual(arr, [2, 5, 8], 'should convert arrayLikeObject to array');
    });


    it('should allow toArray, appendArray and prependArray chaining', function() {
        var arrLike = { 0: 3, 1: 4, 2: 5, length: 3 };

        var arr = _(arrLike)
            .toArray()
            .prependArray([1, 2])
            .appendArray([6, 7, 8])
            ._();

        assert(Array.isArray(arr), 'should be real array');
        assert.deepEqual(arr, [1, 2, 3, 4, 5, 6, 7, 8],
            'should add to the end and to the beginning of the array');

        perfTest(
            function(){
                var arr = _(arrLike)
                    .toArray()
                    .prependArray([1, 2])
                    .appendArray([6, 7, 8])
                    ._();
            },
            function() {
                var arr = _.toArray(arrLike);
                _.prependArray(arr, [1, 2]);
                _.appendArray(arr, [6, 7, 8]);
            }
        );
    });


    it('should allow chaining of Proto functions together with native array methods', function() {
        var myMap = {
            prop0: 0,
            prop1: 1,
            prop2: 2,
            prop3: 3
        };

        var newMap = {}

        var result = _(myMap)
                        .allKeys()
                        .map(function(prop) { return prop + '_test'; })
                        .appendArray(['prop4', 'prop5'])
                        .filter(function(prop) { return prop != 'prop1_test'; })
                        .slice(1)
                        .object()
                        .mapKeys(function(value, key) { return key + '_test2' })
                        ._();

        assert.deepEqual(result, {
            prop2_test: 'prop2_test_test2',
            prop3_test: 'prop3_test_test2',
            prop4: 'prop4_test2',
            prop5: 'prop5_test2',
        });
    });


    it('should define object function', function() {
        var arr = ['a', 'b', 'c'];

            assert.deepEqual(_.object(arr), {a: undefined, b: undefined, c: undefined});
            assert.deepEqual(_.object(arr, 1), {a: 1, b: 1, c: 1});
            assert.deepEqual(_.object(arr, [1, 2, 3]), {a: 1, b: 2, c: 3});
    });


    it('should define mapToObject function', function() {
        var arr = ['a', 'b', 'c'];
        var thisArg = {};
        function callback(value, index, array) {
            assert.equal(array, arr);
            assert.equal(this, thisArg);
            return value + index;
        }

        var result = _.mapToObject(arr, callback, thisArg);

        assert.deepEqual(result, { a: 'a0', b: 'b1', c: 'c2' });
    });


    it('should define find function', function() {
        var arr = [, 2, , 6, 7, 10, 12]
            , thisArg = {};

        function callback(value, index, array) {
            assert.equal(this, thisArg);
            assert.equal(array, arr);
            return value != index * 2;
        }

        function callback2(value, index, array) {
            return value > 20;
        }

        function callback3(value, index, array) {
            if (value == index * 2)
                return false;
            else
                throw new Error;
        }

        assert.equal(_.find(arr, callback, thisArg), 7);
        assert.equal(_.find(arr, callback2, thisArg), undefined);
        assert.throws(function() {
            var value = _.find(arr, callback3, thisArg)
        });
    });


    it('should define findIndex function', function() {
        var arr = [, 2, , 6, 7, 10, 12]
            , thisArg = {};

        function callback(value, index, array) {
            assert.equal(this, thisArg);
            assert.equal(array, arr);
            return value != index * 2;
        }

        function callback2(value, index, array) {
            return value > 20;
        }

        assert.equal(_.findIndex(arr, callback, thisArg), 4);
        assert.equal(_.findIndex(arr, callback2, thisArg), -1);
    });


    it('should define unique function', function() {
        var arr = [1, 2, 2, 3, 3, 4];

        var result = _.unique(arr);

        assert.deepEqual(result, [1, 2, 3, 4]);


        var arr = [ {a: 1}, {a: 2}, {a: 2}, {a: 3}];

        var result = _.unique(arr, function(x, y) {
            return x.a == y.a;
        });

        assert.deepEqual(result, [ {a: 1}, {a: 2}, {a: 3}]);
    });


    it('should define deepForEach function', function() {
        var arr = [0, [1, 2], [3, [4, 5], 6], 7, [8, 9, 10]]
            , result = []
            , thisArg = {};

        _.deepForEach(arr, function(value, index, array) {
            assert.equal(this, thisArg);
            assert.equal(array, arr);
            assert.equal(value, index);
            result.push(value);
        }, thisArg);

        assert.deepEqual(result, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
