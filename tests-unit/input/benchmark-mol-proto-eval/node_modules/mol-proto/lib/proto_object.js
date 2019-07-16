'use strict';


var utils = require('./utils');


/**
 * - [extend](#extend)
 * - [clone](#clone)
 * - [defineProperty](#defineProperty)
 * - [defineProperties](#defineProperties)
 * - [deepExtend](#deepExtend)
 * - [deepClone](#deepClone)
 * - [keys](#keys)
 * - [allKeys](#allKeys)
 * - [values](#values)
 * - [keyOf](#keyOf)
 * - [allKeysOf](#allKeysOf)
 * - [eachKey](#eachKey)
 * - [mapKeys](#mapKeys)
 * - [reduceKeys](#reduceKeys)
 * - [filterKeys](#filterKeys)
 * - [someKey](#someKey)
 * - [everyKey](#everyKey)
 * - [findValue](#findValue)
 * - [findKey](#findKey)
 * - [pickKeys](#pickKeys)
 * - [omitKeys](#omitKeys)
 * - [isEqual](#isEqual)
 * - [isNot](#isNot)
 *
 * All these methods can be [chained](proto.js.html#Proto)
 */
var objectMethods = module.exports = {
    extend: extend,
    clone: clone,
    defineProperty: defineProperty,
    defineProperties: defineProperties,
    deepExtend: deepExtend,
    deepClone: deepClone,
    keys: keys,
    allKeys: allKeys,
    values: values,
    keyOf: keyOf,
    allKeysOf: allKeysOf,
    eachKey: eachKey,
    mapKeys: mapKeys,
    reduceKeys: reduceKeys,
    filterKeys: filterKeys,
    someKey: someKey,
    everyKey: everyKey,
    pickKeys: pickKeys,
    omitKeys: omitKeys,
    isEqual: isEqual,
    isNot: isNot
};


/**
 * ####Property descriptor constants####
 * The sum of these constants can be used as last parameter of defineProperty and defineProperties to determine types of properties.
 */
var constants = {
    ENUMERABLE: 1,
    ENUM: 1,
    CONFIGURABLE: 2,
    CONF: 2,
    WRITABLE: 4,
    WRIT: 4
};

defineProperty.call(objectMethods, '_constants', constants);


/**
 * Analogue of ES6 [Array __find__ method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
 * Returns the value of object property that passes callback test.
 *
 * @param {Object} self object to search in
 * @param {Function} callback should return `true` for item to pass the test, passed `value`, `key` and `self` as parameters
 * @param {Object} thisArg optional context (`this`) of callback call
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 * @return {Any}
 */
objectMethods.findValue = utils.makeFindMethod(someKey, 'value');


/**
 * Analogue of ES6 [Array __findIndex__ method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).
 * Returns the key of object property that passes callback test. Returns `undefined` if not found (unlike `findIndex`, that returns -1 in this case).
 *
 * @param {Object} self object to search in
 * @param {Function} callback should return `true` for item to pass the test, passed `value`, `key` and `self` as parameters
 * @param {Object} thisArg optional context (`this`) of callback call
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 * @return {Integer}
 */
objectMethods.findKey = utils.makeFindMethod(someKey, 'key');


/**
 * Extends object `self` with the properties of the object `obj` copying all own properties (not those inherited via prototype chain), including non-enumerable properties (unless `onlyEnumerable` is truthy).
 * Created properties will have the same descriptors as the propertis of `obj`.
 * Returns `self` to allow chaining with other functions.
 * Can be used with functions, to copy class methods, e.g.
 *
 * @param {Object} self An object to be extended
 * @param {Object} obj An object which properties will be copied to self
 * @param {Boolean} onlyEnumerable Optional flag to prevent copying non-enumerable properties, `false` by default
 * @return {Object}
 */
function extend(obj, onlyEnumerable) {
    var descriptors = {};

    eachKey.call(obj, function(value, prop) {
        descriptors[prop] = Object.getOwnPropertyDescriptor(obj, prop);
    }, this, onlyEnumerable);

    Object.defineProperties(this, descriptors);

    return this;
}


/**
 * Makes a shallow clone of object `obj` creating an instance of the same class; the properties will have the same descriptors.
 * To clone an array use
 * ```
 * var clonedArray = [].concat(arr);
 * ```
 * This function should not be used to clone an array, because it is inefficient.
 *
 * @param {Object} self An object to be cloned
 * @return {Object}
 */
function clone() {
    if (Array.isArray(this)) return this.slice();
    if (this instanceof Date) return new Date(this);
    if (this instanceof RegExp) return new RegExp(this);
    var clonedObject = Object.create(this.constructor.prototype);
    extend.call(clonedObject, this);
    return clonedObject;
}


/**
 * Syntax sugar to shorten usage of `Object.defineProperty`.
 * The simplest usage (to add non-enumerable, non-configurable, non-writable property):
 * ```
 * _.defineProperty(obj, 'key', value);
 * ```
 *
 * To define some other properties use sum of the flags `_.ENUMERABLE` (or `_.ENUM`), `_.CONFIGURABLE` (or `_.CONF`) and `_.WRITABLE` (or `_.WRIT`):
 * ```
 * _.defineProperty(obj, 'key', value, _.ENUM + _.WRIT);
 * ```
 * Returns `self`.
 *
 * @param {Object} self An object to add a property to
 * @param {String} propertyName the name of the property that will be added
 * @param {Any} value the value of added property
 * @param {Integer} decriptorFlags bit mask of property descriptor properties composed from `_.ENUMERABLE` (or `_.ENUM`), `_.CONFIGURABLE` (or `_.CONF`) and `_.WRITABLE` (or `_.WRIT`)
 * @return {Object}
 */
function defineProperty(propertyName, value, decriptorFlags) {
    Object.defineProperty(this, propertyName,
        _getDescriptor(value, decriptorFlags));
    return this;
}


function _getDescriptor(value, decriptorFlags) {
    var descriptor = { value: value };
    if (decriptorFlags)
        extend.call(descriptor, {
            enumerable: !! (decriptorFlags & constants.ENUMERABLE),
            configurable: !! (decriptorFlags & constants.CONFIGURABLE),
            writable: !! (decriptorFlags & constants.WRITABLE)
        });

    return descriptor;
}


/**
 * Syntax sugar to shorten usage of `Object.defineProperties`.
 * The simplest usage (to add non-enumerable, non-configurable, non-writable properties):
 * ```
 * _.defineProperties(obj, {
 *     key1: value1,
 *     key2: value2
 * });
 * ```
 * To define some other properties use sum of the flags `_.ENUMERABLE` (or `_.ENUM`), `_.CONFIGURABLE` (or `_.CONF`) and `_.WRITABLE` (or `_.WRIT`):
 * ```
 * _.defineProperties(obj, {
 *     key1: value1,
 *     key2: value2
 * }, _.ENUM + _.WRIT);
 * ```
 * Returns `self`.
 *
 * @param {Object} self An object to add a property to
 * @param {Object} propertyValues A map of keys and values of properties thatwill be added. The descriptors of properties will be defined by the following parameters.
 * @param {Integer} decriptorFlags bit mask of property descriptor properties composed from `_.ENUMERABLE` (or `_.ENUM`), `_.CONFIGURABLE` (or `_.CONF`) and `_.WRITABLE` (or `_.WRIT`)
 * @return {Object}
 */
function defineProperties(propertyValues, decriptorFlags) {
    var descriptors = mapKeys.call(propertyValues, function(value) {
        return _getDescriptor(value, decriptorFlags);
    }, true);
    Object.defineProperties(this, descriptors);
    return this;
}


/**
 * Extends object `self` with properties of `obj` to any depth, without overwrtiting existing object properties of `self` with object properties of `obj`.
 * Scalar properties of `obj` will overwrite properties of `self`. Scalar porperties of `self` will also be overwritten.
 * Correctly works with recursive objects.
 * Usage:
 * ```
 * var obj = {
 *     inner: {
 *         a: 1
 *     }
 * };
 *
 * _.deepExtend(obj, {
 *     inner: {
 *         b: 2
 *     }
 * });
 *
 * assert.deepEqual(obj, {
 *     inner: {
 *         a: 1,
 *         b: 2
 *     }
 * }); // assert passes
 * ```
 * Returns `self`.
 *
 * @param {Object} self An object to be extended
 * @param {Object} obj An object with properties to copy to
 * @param {Boolean} onlyEnumerable Optional `true` to use only enumerable properties
 * @param {Boolean} preserveStructure if true will throw at the attempt to overwrite object with scalar value (including Date and Regex) and vice versa
 * @return {Object}
 */
function deepExtend(obj, onlyEnumerable, preserveStructure) {
    return _extendTree(this, obj, onlyEnumerable, preserveStructure, []);
}


function _extendTree(selfNode, objNode, onlyEnumerable, preserveStructure, objTraversed) {
    if (objTraversed.indexOf(objNode) >= 0) return; // node already traversed, obj has recursion

    // store node to recognise recursion
    objTraversed.push(objNode);

    var loop = Array.isArray(objNode) ? Array.prototype.forEach : eachKey;

    loop.call(objNode, function(value, prop) {
        var hasProp = selfNode.hasOwnProperty(prop)
            , isSelfObj = isNormalObject(selfNode[prop])
            , isValueObj = isNormalObject(value);

        if (preserveStructure && hasProp && isSelfObj != isValueObj)
            throw new Error('deepExtend');

        if (isValueObj) {
            if (!hasProp || !isSelfObj)
                selfNode[prop] = (Array.isArray(value)) ? [] : {};

            _extendTree(selfNode[prop], value, onlyEnumerable, preserveStructure, objTraversed);
        } else {
            var descriptor = Object.getOwnPropertyDescriptor(objNode, prop);
            Object.defineProperty(selfNode, prop, descriptor);
        }
    }, this, onlyEnumerable);

    return selfNode;
}


function isNormalObject(value) {
    return typeof value == 'object' && value != null
            && !(value instanceof RegExp) && !(value instanceof Date)
}


/**
 * Clones all object tree. Class of original object is not preserved. Returns `self`
 *
 * @param {Object} self An object to be extended
 * @param {Boolean} onlyEnumerable Optional `true` to use only enumerable properties
 * @return {Object}
 */
function deepClone(onlyEnumerable) {
    if (this instanceof Date) return new Date(this);
    if (this instanceof RegExp) return new RegExp(this);
    var clonedObject = Array.isArray(this) ? [] : {};
    deepExtend.call(clonedObject, this, onlyEnumerable);
    return clonedObject;
}


/**
 * Returns array of enumerable properties of the object
 *
 * @param {Object} self object to return keys of
 * @return {Array}
 */
function keys() {
    return Object.keys(this);
}


/**
 * Returns array of values of the object's keys
 *
 * @param {Object} self object to return values from
 * @return {Array}
 */
function values(onlyEnumerable) {
    var properties = onlyEnumerable
                ? Object.keys(this)
                : allKeys.call(this);

    return properties.map(function(prop) {
        return this[prop];
    }, this);
}


/**
 * Returns array of all property names of an object `self` (including non-enumerbale).
 * To get only enumerable properties, use `Object.keys()`.
 *
 * @param {Object} self An object to get all properties of.
 * @return {Array}
 */
 function allKeys() {
    return Object.getOwnPropertyNames(this);
 }


/**
 * An analogue of `indexOf` method of Array prototype.
 * Returns the `key` of `searchElement` in the object `self`.
 * As object keys are unsorted, if there are several keys that hold `searchElement` any of them can be returned. Use `allKeysOf` to return all keys.
 * All own properties are searched (not those inherited via prototype chain), including non-enumerable properties (unless `onlyEnumerable` is truthy).
 *
 * @param {Object} self An object to search a value in
 * @param {Any} searchElement An element that will be searched. An exact equality is tested, so `0` is not the same as `'0'`.
 * @param {Boolean} onlyEnumerable An optional true to search among enumerable properties only.
 * @return {String}
 */
function keyOf(searchElement, onlyEnumerable) {
    var properties = onlyEnumerable
                        ? Object.keys(this)
                        : allKeys.call(this);

    for (var i = 0; i < properties.length; i++)
        if (searchElement === this[properties[i]])
            return properties[i];

    return undefined;
}


/**
 * Works similarly to the previous function, but returns the array of keys holding `searchElement` as their value.
 *
 * @param {Object} self An object to search a value in
 * @param {Any} searchElement An element that will be searched. An exact equality is tested, so `0` is not the same as `'0'`.
 * @param {Boolean} onlyEnumerable An optional true to search among enumerable properties only.
 * @return {Array[String]}
 */
function allKeysOf(searchElement, onlyEnumerable) {
    var properties = onlyEnumerable
                        ? Object.keys(this)
                        : allKeys.call(this);

    var keys = properties.filter(function(prop) {
        return searchElement === this[prop];
    }, this);

    return keys;
}


/**
 * An analogue of [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method of Array prototype.
 * Iterates all own properties of `self` (or only enumerable own properties if `onlyEnumerable` is truthy) calling callback for each key.
 * This method should not be used with arrays, it will include `length` property in iteration.
 * To iterate array-like objects (e.g., `arguments` pseudo-array) use:
 * ```
 * _.forEach(arguments, callback, thisArg);
 * ```
 * Function returns `self` to allow [chaining](proto.js.html)
 *
 * @param {Object} self An object which properties will be iterated
 * @param {Function} callback Callback is passed `value`, `key` and `self`, its return value is not used.
 * @param {Object} thisArg An optional context of iteration (the valueof `this`), will be undefined if this parameter is not passed.
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 */
function eachKey(callback, thisArg, onlyEnumerable) {
    var properties = onlyEnumerable
                        ? Object.keys(this)
                        : allKeys.call(this);

    properties.forEach(function(prop) {
        callback.call(thisArg, this[prop], prop, this);
    }, this);

    return this;
}


/**
 * An analogue of [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method of Array prototype.
 * Returns the object that is the result of the application of callback to values in all own properties of `self` (or only enumerable own properties if `onlyEnumerable` is truthy).
 * The returned object will be the instance of the same class as `self`.
 * Property descriptors of the returned object will have the same `enumerable`, `configurable` and `writable` settings as the properties of `self`.
 * This method should not be used with arrays, it will include `length` property in iteration.
 * To map array-like objects use:
 * ```
 * var result = _.map(arguments, callback, thisArg);
 * ```
 *
 * @param {Object} self An object which properties will be iterated
 * @param {Function} callback Callback is passed `value`, `key` and `self` and should return value that will be included in the map.
 * @param {Object} thisArg An optional context of iteration (the valueof `this`), will be undefined if this parameter is not passed.
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 * @return {Object}
 */
function mapKeys(callback, thisArg, onlyEnumerable) {
    var descriptors = {};
    eachKey.call(this, mapProperty, thisArg, onlyEnumerable);
    return Object.create(this.constructor.prototype, descriptors);

    function mapProperty(value, key, self) {
        descriptors[key] = Object.getOwnPropertyDescriptor(self, key);
        descriptors[key].value = callback.call(this, value, key, self);
    }
}


/**
 * An analogue of [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method of Array prototype.
 * This method reduces the object to a single value. Iteration order is impossible to control with object.
 * This method should not be used with arrays, it will include `length` property in iteration.
 * To reduce array-like objects use:
 * ```
 * var result = _.reduce(arguments, callback, initialValue, thisArg);
 * ```
 *
 * @param {Object} self An object which properties will be iterated
 * @param {Function} callback Callback is passed `previousValue`, `value`, `key` and `self` and should return value that will be used as the `previousValue` for the next `callback` call.
 * @param {Any} initialValue The initial value passed to callback as the first parameter on the first call.
 * @param {Object} thisArg An optional context of iteration (the valueof `this`), will be undefined if this parameter is not passed.
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 * @return {Any}
 */
function reduceKeys(callback, initialValue, thisArg, onlyEnumerable) {
    var properties = onlyEnumerable
                        ? Object.keys(this)
                        : allKeys.call(this);

    var memo = initialValue;

    properties.forEach(function(prop) {
        memo = callback.call(thisArg, memo, this[prop], prop, this);
    }, this);

    return memo;
}


/**
 * An analogue of [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method of Array prototype.
 * Returns the new object with keys for which callback returns true.
 * Property descriptors of the returned object will have the same `enumerable`, `configurable` and `writable` settings as the properties of `self`.
 * To filter array-like objects use:
 * ```
 * var result = _.filter(arguments, callback, thisArg);
 * ```
 *
 * @param {Object} self An object which properties will be iterated
 * @param {Function} callback Callback is passed `value`, `key` and `self`. If it returns truthy value, the key/value will be included in the resulting object.
 * @param {Object} thisArg An optional context of iteration (the valueof `this`), will be undefined if this parameter is not passed.
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 * @return {Object}
 */
function filterKeys(callback, thisArg, onlyEnumerable) {
    var descriptors = {};
    eachKey.call(this, filterProperty, thisArg, onlyEnumerable);
    return Object.create(this.constructor.prototype, descriptors);;

    function filterProperty(value, key, self) {
        if (callback.call(this, value, key, self))
            descriptors[key] = Object.getOwnPropertyDescriptor(self, key);
    }
}


var _passed = {}
    , _didNotPass = {};

/**
 * An analogue of [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) method of Array prototype.
 *
 * @param {Object} self An object which properties will be iterated
 * @param {Function} callback Callback is passed `value`, `key` and `self`. If it returns truthy value, the function immeaditely returns `true`.
 * @param {Object} thisArg An optional context of iteration (the valueof `this`), will be undefined if this parameter is not passed.
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 * @return {Boolean}
 */
function someKey(callback, thisArg, onlyEnumerable) {
    try {
        eachKey.call(this, testProperty, thisArg, onlyEnumerable);
    } catch (test) {
        if (test === _passed) return true;
        else throw test;
    }
    return false;

    function testProperty(value, key, self) {
        if (callback.call(this, value, key, self))
            throw _passed;
    }
}


/**
 * An analogue of [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method of Array prototype.
 *
 * @param {Object} self An object which properties will be iterated
 * @param {Function} callback Callback is passed `value`, `key` and `self`. If it returns falsy value, the function immeaditely returns `false`.
 * @param {Object} thisArg An optional context of iteration (the valueof `this`), will be undefined if this parameter is not passed.
 * @param {Boolean} onlyEnumerable An optional `true` to iterate enumerable properties only.
 * @return {Boolean}
 */
function everyKey(callback, thisArg, onlyEnumerable) {
    try {
        eachKey.call(this, testProperty, thisArg, onlyEnumerable);
    } catch (test) {
        if (test === _didNotPass) return false;
        else throw test;
    }
    return true;

    function testProperty(value, key, self) {
        if (! callback.call(this, value, key, self))
            throw _didNotPass;
    }
}


var ArrayProto = Array.prototype
    , concat = ArrayProto.concat;
/**
 * Returns object of the same class with only specified keys, that are passed as string parameters or array(s) of keys.
 *
 * @param {Object} self an object to pick keys from
 * @param {List[String|Array]} arguments list of keys (or array(s) of keys)
 * @return {Object}
 */
function pickKeys() { // , ... keys
    var keys = concat.apply(ArrayProto, arguments)
        , obj = Object.create(this.constructor.prototype);
    keys.forEach(function(key) {
        if (this.hasOwnProperty(key))
            obj[key] = this[key];
    }, this);
    return obj;
}


/**
 * Returns object of the same class without specified keys, that are passed as string parameters or array(s) of keys.
 *
 * @param {Object} self an object to omit keys in
 * @param {List[String|Array]} arguments list of keys (or array(s) of keys)
 * @return {Object}
 */
function omitKeys() { // , ... keys
    var keys = concat.apply(ArrayProto, arguments)
        , obj = clone.call(this);
    keys.forEach(function(key){
        delete obj[key];
    }, this);
    return obj;
}


/**
 * Performs deep equality test of the object. Does not work with recursive objects
 * @param  {Any} self object to compare
 * @param  {Any} obj object to compare
 * @return {Boolean}
 */
function isEqual(obj) {
    if (this === obj) return this !== 0 || 1/this == 1/obj; // 0 and -0 are considered not equal, although 0 === -0 is true
    if (this == null || obj == null) return false;
    var className = this.constructor.name;
    if (className != obj.constructor.name) return false;
    switch (className) {
        case 'String':
            return this == String(obj);
        case 'Number':
            return this != +this ? obj != +obj : (this == 0 ? 1/this == 1/obj : this == +obj);
        case 'Date':
        case 'Boolean':
            return +this == +obj;
        case 'RegExp':
            return this.source == obj.source
                    && this.global == obj.global
                    && this.multiline == obj.multiline
                    && this.ignoreCase == obj.ignoreCase;
    }
    if (typeof this != 'object' || typeof obj != 'object') return false;

    if (Array.isArray(this))
        return this.length == obj.length
                && this.every(function(item, index) {
                    return isEqual.call(item, obj[index]);
                });
    else {
        return allKeys.call(this).length == allKeys.call(obj).length
                && everyKey.call(this, function(value, key) {
                    return isEqual.call(value, obj[key]);
                });
    }
}


/**
 * The opposite of isEqual
 * @param  {Any} self object to compare
 * @param  {Any} obj object to compare
 * @return {Boolean}
 */
function isNot(obj) {
    return !isEqual.call(this, obj);
}
