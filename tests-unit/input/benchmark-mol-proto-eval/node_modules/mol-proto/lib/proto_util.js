'use strict';

/**
 * - [times](#times)
 * - [repeat](#repeat)
 * - [tap](#tap)
 * - [result](#result)
 * - [identity](#identity)
 * - [property](#property)
 * - [compareProperty](#compareProperty)
 * - [noop](#noop)
 */
var utilMethods = module.exports = {
    times: times,
    repeat: repeat,
    tap: tap,
    result: result,
    identity: identity,
    property: property,
    compareProperty: compareProperty,
    noop: noop
};


/**
 * Calls `callback` `self` times with `thisArg` as context. Callback is passed iteration index from 0 to `self-1`
 * 
 * @param {Integer} self
 * @param {Function} callback
 * @param {Any} thisArg
 * @return {Array}
 */
function times(callback, thisArg) {
    var arr = Array(Math.max(0, this));
    for (var i = 0; i < this; i++)
        arr[i] = callback.call(thisArg, i);
    return arr;
}


/**
 * Returns array with the first argument repeated `times` times
 * @param  {Any} self
 * @param  {Integer} times
 * @return {Array[Any]}
 */
function repeat(times) {
    var arr = Array(Math.max(0, times));;
    for (var i = 0; i < times; i++)
        arr[i] = this;
    return arr;
}


/**
 * Function to tap into chained methods and to inspect intermediary result
 *
 * @param {Any} self value that's passed between chained methods
 * @param {Function} func function that will be called with the value (both as context and as the first parameter)
 * @return {Any}
 */
function tap(func) {
    func.call(this, this);
    return this;
};


/**
 * Calls function `self` (first parameter of _.result) with given context and arguments
 * 
 * @param {Function|Any} self
 * @param {Any} thisArg context
 * @param {List} arguments extra arguments
 * @return {Any}
 */
function result(thisArg) { //, arguments
    var args = Array.prototype.slice.call(arguments, 1);
    return typeof this == 'function'
            ? this.apply(thisArg, args)
            : this;
}


/**
 * Returns self. Useful for using as an iterator if the actual value needs to be returned. Unlike in underscore and lodash, this function is NOT used as default iterator.
 *
 * @param {Any} self 
 * @return {Any}
 */
function identity() {
    return this;
}


/**
 * Returns function that picks the property from the object
 *
 * @param {String} self
 * @return {Function}
 */
function property() {
    var key = this;
    return function(obj) {
        return obj[key];
    };
}


/**
 * Returns function that can be used in array sort to sort by a given property
 *
 * @param {String} self
 * @return {Function}
 */
function compareProperty() {
    var key = this;
    return function(a, b) {
        return a[key] < b[key]
            ? -1
            : a[key] > b[key]
                ? 1
                : 0;
    };
}


/**
 * Function that does nothing
 */
function noop() {}
