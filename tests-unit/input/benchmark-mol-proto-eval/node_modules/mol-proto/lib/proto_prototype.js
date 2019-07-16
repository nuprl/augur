'use strict';

/**
 * - [extendProto](#extendProto)
 * - [createSubclass](#createSubclass)
 * - [makeSubclass](#makeSubclass)
 * - [newApply](#newApply)
 *
 * These methods can be [chained](proto.js.html#Proto)
 */
var prototypeMethods = module.exports = {
    extendProto: extendProto,
    createSubclass: createSubclass,
    makeSubclass: makeSubclass,
    newApply: newApply
};


var __ = require('./proto_object');

__.extend.call(__, require('./proto_function'));


/**
 * Adds non-enumerable, non-configurable and non-writable properties to the prototype of constructor function.
 * Usage:
 * ```
 * function MyClass() {}
 * _.extendProto(MyClass, {
 *     method1: function() {},
 *     method2: function() {}
 * });
 * ```
 * To extend class via object:
 * ```
 * _.extendProto(obj.constructor, methods);
 * ```
 * Returns passed constructor, so functions _.extendProto, [_.extend](object.js.html#extend) and _.makeSubclass can be [chained](proto.js.html). 
 *
 * @param {Function} self constructor function
 * @param {Object} methods a map of functions, keys will be instance methods (properties of the constructor prototype)
 * @return {Function}
 */
function extendProto(methods) {
    var propDescriptors = {};

    __.eachKey.call(methods, function(method, name) {
        propDescriptors[name] = {
            enumerable: false,
            configurable: false,
            writable: false,
            value: method
        };
    });

    Object.defineProperties(this.prototype, propDescriptors);
    return this;
}


/**
 * Makes a subclass of class `thisClass`.
 * The returned function will have specified `name` if supplied.
 * The constructor of superclass will be called in subclass constructor by default unless `applyConstructor === false` (not just falsy).
 * Copies `thisClass` class methods to created subclass. For them to work correctly they should use `this` to refer to the class rather than explicit superclass name.
 *
 * @param {Function} thisClass A class to make subclass of
 * @param {String} name Optional name of subclass constructor function
 * @param {Boolean} applyConstructor Optional false value (not falsy) to prevent call of inherited constructor in the constructor of subclass
 * @return {Function}
 */
function createSubclass(name, applyConstructor) {
    var thisClass = this;
    var subclass;

    // name is optional
    name = name || '';

    // apply superclass constructor
    var constructorCode = applyConstructor === false
            ? ''
            : 'thisClass.apply(this, arguments);';

    eval('subclass = function ' + name + '(){ ' + constructorCode + ' }');

    makeSubclass.call(subclass, thisClass);

    // copy class methods
    // - for them to work correctly they should not explictly use superclass name
    // and use "this" instead
    __.deepExtend.call(subclass, thisClass, true);

    return subclass;
}


/**
 * Sets up prototype chain to change `thisClass` (a constructor function) so that it becomes a subclass of `Superclass`.
 * Returns `thisClass` so it can be [chained](proto.js.html) with _.extendProto and [_.extend](object.js.html#extend).
 *
 * @param {Function} thisClass A class that will become a subclass of Superclass
 * @param {Function} Superclass A class that will become a superclass of thisClass
 * @return {Function}
 */
function makeSubclass(Superclass) {
    // prototype chain
    this.prototype = Object.create(Superclass.prototype);
    
    // subclass identity
    extendProto.call(this, {
        constructor: this
    });
    return this;
}


/**
 * Calls constructor `this` with arguments passed as array
 * 
 * @param {Function} thisClass A class constructor that will be called
 * @return {Array|Array-like} args Array of arguments that will be passed to constructor
 */
function newApply(args) {
    if (! Array.isArray(args))
        args = Array.prototype.slice.call(args);
    // "null" is context to pass to class constructor, first parameter of bind
    var args = [null].concat(args);
    return new (Function.prototype.bind.apply(this, args));
}
