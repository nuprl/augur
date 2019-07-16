'use strict';

var _ = require('../lib/proto')
    , assert = require('assert');


function throwError() { throw new Error(); }
function doNothing() {}


describe('Prototype functions', function() {
    it('should define extendProto function', function() {
        function TestObject() {
            this.property = 1;
        }

        _.extendProto(TestObject, {
            method: throwError,
            method2: doNothing
        });

            assert.throws(TestObject.prototype.method, 'prototype should be extended');
            assert.doesNotThrow(TestObject.prototype.method2, 'prototype should be extended');

            assert.doesNotThrow(function(){
                for (var p in TestObject.prototype)
                    throw new Error;
            }, 'properties should be non-enumerable');

        var obj = new TestObject;

            assert.throws(obj.method, 'object methods can be called');
            assert.doesNotThrow(obj.method2, 'object methods can be called');

            assert.doesNotThrow(function() {
                for (var p in obj)
                    if (p != 'property')
                        throw new Error;
            }, 'methods should be non-enumerable');
    });


    it('should define createSubclass function', function() {
        function TestObject() { this.property = 1; };
        TestObject.method = throwError;
        TestObject.classMethod = throwError;

        var TestSubclass = _.createSubclass(TestObject, 'TestSubclass');

            assert(TestSubclass.prototype instanceof TestObject);
            assert.throws(TestSubclass.method, 'class method of superclass should be copied');
            assert.equal(TestSubclass.name, 'TestSubclass');

        var obj = new TestSubclass;

            assert(obj instanceof TestObject, 'objects should be instances of ancestor class');
            assert.equal(obj.property, 1, 'constructor of superclass should be called');
            assert.throws(obj.method, 'instance method of superclass should be available');

        var TestSubclass2 = _.createSubclass(TestObject, '', false);

            assert.equal(TestSubclass2.name, '');

        var obj2 = new TestSubclass2;

            assert(obj2 instanceof TestObject, 'objects should be instances of ancestor class');
            assert.equal(obj2.property, undefined, 'constructor of superclass should NOT be called');

        var TestSubclass3 = _.createSubclass(TestObject);
        
        var obj3 = new TestSubclass3;

            assert(obj3 instanceof TestObject, 'objects should be instances of ancestor class');
            assert.equal(obj3.property, 1, 'constructor of superclass should be called');
    });


    it('should define makeSubclass method', function() {
        function TestObject() { this.property = 1; };
        TestObject.method = throwError;
        TestObject.classMethod = throwError;

        function TestSubclass() {};
        _.makeSubclass(TestSubclass, TestObject)

            assert(TestSubclass.prototype instanceof TestObject);
            assert.throws(TestSubclass.method, 'class method of superclass should be copied');
            assert.equal(TestSubclass.name, 'TestSubclass');

        var obj = new TestSubclass;

            assert(obj instanceof TestObject, 'objects should be instances of ancestor class');
            assert.throws(obj.method, 'instance method of superclass should be available');

        var TestSubclass2 = _.createSubclass(TestObject, '', false);

            assert.equal(TestSubclass2.name, '');

        var obj2 = new TestSubclass2;

            assert(obj2 instanceof TestObject, 'objects should be instances of ancestor class');
            assert.equal(obj2.property, undefined, 'constructor of superclass should NOT be called');

        var TestSubclass3 = _.createSubclass(TestObject);
        
        var obj3 = new TestSubclass3;

            assert(obj3 instanceof TestObject, 'objects should be instances of ancestor class');
            assert.equal(obj3.property, 1, 'constructor of superclass should be called');
    });


    it('should define newApply method', function() {
        function MyClass(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }

        var obj1 = new MyClass(1, 2, 3);
        var obj2 = _.newApply(MyClass, [1, 2, 3]);

            assert.deepEqual(obj1, obj2);

        function createMyClass() {
            return _.newApply(MyClass, arguments);
        }

        var obj3 = createMyClass(1, 2, 3);

            assert.deepEqual(obj1, obj3);        
    });
});