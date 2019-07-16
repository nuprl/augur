(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');


/**
 * [__Prototype functions__](proto_prototype.js.html)
 *
 * - [extendProto](proto_prototype.js.html#extendProto)
 * - [createSubclass](proto_prototype.js.html#createSubclass)
 * - [makeSubclass](proto_prototype.js.html#makeSubclass)
 * - [newApply](proto_prototype.js.html#newApply)
 */
var prototypeMethods = require('./proto_prototype');


/**
 * [__Object functions__](proto_object.js.html)
 *
 * - [extend](proto_object.js.html#extend)
 * - [clone](proto_object.js.html#clone)
 * - [defineProperty](proto_object.js.html#defineProperty)
 * - [defineProperties](proto_object.js.html#defineProperties)
 * - [deepExtend](proto_object.js.html#deepExtend)
 * - [deepClone](proto_object.js.html#deepClone)
 * - [keys](proto_object.js.html#keys)
 * - [allKeys](proto_object.js.html#allKeys)
 * - [values](proto_object.js.html#values)
 * - [keyOf](proto_object.js.html#keyOf)
 * - [allKeysOf](proto_object.js.html#allKeysOf)
 * - [eachKey](proto_object.js.html#eachKey)
 * - [mapKeys](proto_object.js.html#mapKeys)
 * - [reduceKeys](proto_object.js.html#reduceKeys)
 * - [filterKeys](proto_object.js.html#filterKeys)
 * - [someKey](proto_object.js.html#someKey)
 * - [everyKey](proto_object.js.html#everyKey)
 * - [findValue](proto_object.js.html#findValue)
 * - [findKey](proto_object.js.html#findKey)
 * - [pickKeys](proto_object.js.html#pickKeys)
 * - [omitKeys](proto_object.js.html#omitKeys)
 * - [isEqual](proto_object.js.html#isEqual)
 * - [isNot](proto_object.js.html#isNot)
 */
var objectMethods = require('./proto_object');


/**
 * [__Array functions__](proto_array.js.html)
 *
 * - [find](proto_array.js.html#find)
 * - [findIndex](proto_array.js.html#findIndex)
 * - [appendArray](proto_array.js.html#appendArray)
 * - [prependArray](proto_array.js.html#prependArray)
 * - [spliceItem](proto_array.js.html#spliceItem)
 * - [toArray](proto_array.js.html#toArray)
 * - [object](proto_array.js.html#object)
 * - [mapToObject](proto_array.js.html#mapToObject)
 * - [unique](proto_array.js.html#unique)
 * - [deepForEach](proto_array.js.html#deepForEach)
 *
 * Functions that Array [implements natively](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods) are also added - they can be used with array-like objects and for chaining (native functions are always called).
 */
var arrayMethods = require('./proto_array');


/**
 * [__Function functions__](proto_function.js.html)
 *
 * - [makeFunction](proto_function.js.html#makeFunction)
 * - [partial](proto_function.js.html#partial)
 * - [partialRight](proto_function.js.html#partialRight)
 * - [memoize](proto_function.js.html#memoize)
 * - [delay](proto_function.js.html#delay)
 * - [defer](proto_function.js.html#defer)
 * - [delayed](proto_function.js.html#delayed)
 * - [deferred](proto_function.js.html#deferred)
 * - [deferTicks](proto_function.js.html#deferTicks)
 * - [delayMethod](proto_function.js.html#delayMethod)
 * - [deferMethod](proto_function.js.html#deferMethod)
 * - [debounce](proto_function.js.html#debounce)
 * - [throttle](proto_function.js.html#throttle)
 * - [once](proto_function.js.html#once)
 * - [waitFor](proto_function.js.html#waitFor)
*/
var functionMethods = require('./proto_function');


/**
 * [__String functions__](proto_string.js.html)
 *
 * - [firstUpperCase](proto_string.js.html#firstUpperCase)
 * - [firstLowerCase](proto_string.js.html#firstLowerCase)
 * - [toRegExp](proto_string.js.html#toRegExp)
 * - [toFunction](proto_string.js.html#toFunction)
 * - [toDate](proto_string.js.html#toDate)
 * - [toQueryString](proto_string.js.html#toQueryString)
 * - [fromQueryString](proto_string.js.html#fromQueryString)
 * - [jsonParse](proto_string.js.html#jsonParse)
 * - [hashCode](proto_string.js.html#hashCode)
 * - [unPrefix](proto_string.js.html#unPrefix)
 */
var stringMethods = require('./proto_string');


/**
 * [__Number functions__](proto_number.js.html)
 *
 * - [isNumeric](proto_number.js.html#isNumeric)
 */
var numberMethods = require('./proto_number');


/**
 * [__Utility functions__](proto_util.js.html)
 *
 * - [times](proto_util.js.html#times)
 * - [repeat](proto_util.js.html#repeat)
 * - [tap](proto_util.js.html#tap)
 * - [result](proto_util.js.html#result)
 * - [identity](proto_util.js.html#identity)
 * - [property](proto_util.js.html#property)
 * - [compareProperty](proto_util.js.html#compareProperty)
 * - [noop](proto_util.js.html#noop)
 */
var utilMethods = require('./proto_util');


/**
 * Chaining
 * ========
 *
 * `_` can be used to create a wrapped value (object, function, array, etc.) to allow chaining of Proto functions.
 * To unwrap, `_` method of a wrapped value should be used.
 * Usage:
 * ```
 * var arr = _({ 0: 3, 1: 4, 2: 5, length: 3})
 *              .toArray()
 *              .prependArray([1, 2])
 *              .appendArray([6, 7, 8])
 *              ._();
 * ```
 * A wrapped object is an instance of `_` (`Proto` class).
 *
 * Chaining is implemented for development convenience, but it has performance overhead, not only to wrap and unwrap values but in each function call.
 * Although all Proto functions are implemented as methods operating on this and the overhead to redefine them as functions is very small, the overhead to redefine them as methods of wrapped value is slightly higher - chaining is 15-25% slower than using functions (properties of _ that take the first parameter).
 * In cases when performance is critical, you may want to avoid using chaining.
 *
 * @param {Any} self A value to be wrapped
 * @return {Proto}
 */
function Proto(self) {
    // wrap passed parameter in _ object
    var wrapped = Object.create(Proto.prototype);
    wrapped.self = self;
    return wrapped;
};

var _ = Proto;


// store raw methods from different modules in __ object (double "_")
var __ = {};

objectMethods.extend.call(__, objectMethods);
__.extend.call(__, prototypeMethods);
__.extend.call(__, arrayMethods);
__.extend.call(__, stringMethods);
__.extend.call(__, numberMethods);
__.extend.call(__, functionMethods);
__.extend.call(__, utilMethods);


// add __ as property of Proto, so they can be used as mixins in other classes
__.defineProperty(Proto, '__', __);


// add _ method to unwrap wrapped value (Proto instance)
function unwrapProto() { return this.self; }
__.extendProto.call(Proto, { _: unwrapProto });

// add constants (functions will be overwritten)
__.extend.call(Proto, objectMethods._constants);

// add functions that take first parameter instead of "this" to Proto
var protoFuncs = __.mapKeys.call(__, utils.makeProtoFunction, true);
__.extend.call(Proto, protoFuncs);

// add Proto wrapped value instance methods to Proto prototype
var protoInstanceMethods = __.mapKeys.call(__, utils.makeProtoInstanceMethod, true);
__.extendProto.call(Proto, protoInstanceMethods);


/**
 * In windows environment, a global `_` value is preserved in `_.underscore`
 */
if (typeof window == 'object') {
    // preserve existing _ object
    if (window._)
        Proto.underscore = window._

    // expose global _ and Proto
    window._ = Proto;
}

if (typeof module == 'object' && module.exports)
    // export for node/browserify
    module.exports = Proto;

},{"./proto_array":2,"./proto_function":3,"./proto_number":4,"./proto_object":5,"./proto_prototype":6,"./proto_string":7,"./proto_util":8,"./utils":9}],2:[function(require,module,exports){
'use strict';

var __ = require('./proto_object')
    , utils = require('./utils');


/**
 * - [find](#find)
 * - [findIndex](#findIndex)
 * - [appendArray](#appendArray)
 * - [prependArray](#prependArray)
 * - [spliceItem](#spliceItem)
 * - [toArray](#toArray)
 * - [object](#object)
 * - [mapToObject](#mapToObject)
 * - [unique](#unique)
 * - [deepForEach](#deepForEach)
 *
 * These methods can be [chained](proto.js.html#Proto).
 */
var arrayMethods = module.exports = {
    // find: see below
    // findIndex: see below
    appendArray: appendArray,
    prependArray: prependArray,
    toArray: toArray,
    object: object,
    mapToObject: mapToObject,
    unique: unique,
    deepForEach: deepForEach,
    spliceItem: spliceItem
};


/**
 * Functions that Array [implements natively](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods) are also included for convenience - they can be used with array-like objects and for chaining (native functions are always called).
 * These methods can be [chained](proto.js.html#Proto) too.
 */
var nativeArrayMethodsNames = [ 'join', 'pop', 'push', 'concat',
    'reverse', 'shift', 'unshift', 'slice', 'splice',
    'sort', 'filter', 'forEach', 'some', 'every',
    'map', 'indexOf', 'lastIndexOf', 'reduce', 'reduceRight'];

var nativeArrayMethods = mapToObject.call(nativeArrayMethodsNames,
        function(methodName) {
            return Array.prototype[methodName];
        });

__.extend.call(arrayMethods, nativeArrayMethods);


/**
 * Implementation of ES6 [Array __find__ method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) (native method is used if available).
 * Returns array element that passes callback test.
 *
 * @param {Array} self array to search in
 * @param {Function} callback should return `true` for item to pass the test, passed `value`, `index` and `self` as parameters
 * @param {Object} thisArg optional context (`this`) of callback call
 * @return {Any}
 */
arrayMethods.find = Array.prototype.find
    || utils.makeFindMethod(arrayMethods.forEach, 'value');


/**
 * Implementation of ES6 [Array __findIndex__ method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) (native method is used if available).
 * Returns the index of array element that passes callback test. Returns `-1` if not found.
 *
 * @param {Array} self array to search in
 * @param {Function} callback should return `true` for item to pass the test, passed `value`, `index` and `self` as parameters
 * @param {Object} thisArg optional context (`this`) of callback call
 * @return {Integer}
 */
arrayMethods.findIndex = Array.prototype.findIndex
    || utils.makeFindMethod(arrayMethods.forEach, 'index');


/**
 * Appends `arrayToAppend` to the end of array `self` in place (can be an instance of Array or array-like object).
 * Changes the value of `self` (it uses `Array.prototype.splice`) and returns `self`.
 *
 * @param {Array} self An array that will be modified
 * @param {Array|Array-like} arrayToAppend An array that will be appended
 * @return {Array}
 */
function appendArray(arrayToAppend) {
    if (! arrayToAppend.length) return this;
    if (! Array.isArray(arrayToAppend))
        arrayToAppend = toArray.call(arrayToAppend);
    
    var args = [this.length, 0].concat(arrayToAppend);
    arrayMethods.splice.apply(this, args);

    return this;
}


/**
 * Prepends `arrayToPrepend` to the beginnig of array `self` in place (can be an instance of Array or array-like object).
 * Changes the value of `self` (it uses `Array.prototype.splice`) and returns `self`.
 *
 * @param {Array} self An array that will be modified
 * @param {Array|Array-like} arrayToAppend An array that will be prepended
 * @return {Array}
 */
function prependArray(arrayToPrepend) {
    if (! arrayToPrepend.length) return this;
    if (! Array.isArray(arrayToPrepend))
        arrayToPrepend = toArray.call(arrayToPrepend);

    var args = [0, 0].concat(arrayToPrepend);
    arrayMethods.splice.apply(this, args);

    return this;
}


/**
 * Removes item from array that is found using indexOf (i.e. '===')
 * Modifies original array and returns the reference to it.
 * 
 * @param {Array} self An array that will be modified
 * @param  {Any} item item to be removed
 * @return {Array}
 */
function spliceItem(item) {
    var index = this.indexOf(item);
    if (index >= 0) this.splice(index, 1);
    return this;
}


/**
 * Returns new array created from array-like object (e.g., `arguments` pseudo-array).
 *
 * @param {Array-like} self Object with numeric property length
 * @return {Array}
 */
function toArray() {
    return arrayMethods.slice.call(this);
}


/**
 * Returns an object created from the array of `keys` and optional array of `values`.
 *
 * @param {Array} self Array of keys
 * @param {Array|any} values Optional array of values or the value to be assigned to each property.
 * @return {Object}
 */
function object(values) {
    var obj = {}
        , valuesIsArray = Array.isArray(values);
    arrayMethods.forEach.call(this, function(key, index) {
        obj[key] = valuesIsArray ? values[index] : values;
    });

    return obj;
}


/**
 * Maps array to object.
 * Array elements become keys, value are taken from `callback`.
 * 
 * @param {Array} self An array which values will become keys of the result
 * @param {Function} callback Callback is passed `value`, `index` and `self` and should return value that will be included in the result.
 * @param {Object} thisArg An optional context of iteration (the valueof `this`), will be undefined if this parameter is not passed.
 * @return {Object}
 */
function mapToObject(callback, thisArg) {
    var result = {};
    Array.prototype.forEach.call(this, function(value, index) {
        result[value] = callback.call(thisArg, value, index, this);
    }, this);
    return result;
}


/**
 * Returns array without duplicates. Does not modify original array.
 *
 * @param {Array} self original array
 * @param {Function} callback comparison function, should return true for equal items, "===" is used if not passed.
 * @return {Array}
 */
function unique(callback) {
    var filtered = [];
    if (! callback)
        itemIndex = itemIndexOf;

    this.forEach(function(item) {
        var index = itemIndex(item);
        if (index == -1)
            filtered.push(item);
    });

    return filtered;


    function itemIndex(item) {
        return arrayMethods.findIndex.call(filtered, function(it) {
            return callback(item, it);
        });
    }

    function itemIndexOf(item) {
        return filtered.indexOf(item);
    }
}


/**
 * Iterates array and elements that are arrays calling callback with each element that is not an array. Can be used to iterate over arguments list to avoid checking whether array or list of parameters is passed.
 *
 * @param {Array|Array-like} self array of elements and arraysto iterate.
 * @param {Function} callback called for each item that is not an array. Callback is passed item, index and original array as parameters.
 * @param {Any} thisArg optional callback envocation context
 */
function deepForEach(callback, thisArg) {
    var index = 0, arr = this;
    _deepForEach.call(this);

    function _deepForEach() {
        arrayMethods.forEach.call(this, function(value) {
            if (Array.isArray(value))
                _deepForEach.call(value);
            else
                callback.call(thisArg, value, index++, arr);
        });
    }
}

},{"./proto_object":5,"./utils":9}],3:[function(require,module,exports){
'use strict';


var makeProtoFunction = require('./utils').makeProtoFunction
    , repeat = require('./proto_util').repeat;


/**
 * - [makeFunction](#makeFunction)
 * - [partial](#partial)
 * - [partialRight](#partialRight)
 * - [memoize](#memoize)
 * - [delay](#delay)
 * - [defer](#defer)
 * - [delayed](#delayed)
 * - [deferred](#deferred)
 * - [deferTicks](#deferTicks)
 * - [delayMethod](#delayMethod)
 * - [deferMethod](#deferMethod)
 * - [debounce](#debounce)
 * - [throttle](#throttle)
 * - [once](#once)
 * - [waitFor](#waitFor)
 * - [not](#not)
 *
 * These methods can be [chained](proto.js.html#Proto)
 */
var functionMethods = module.exports = {
    makeFunction: makeFunction,
    partial: partial,
    partialRight: partialRight,
    memoize: memoize,
    delay: delay,
    defer: defer,
    delayed: delayed,
    deferred: deferred,
    deferTicks: deferTicks,
    delayMethod: delayMethod,
    deferMethod: deferMethod,
    debounce: debounce,
    throttle: throttle,
    once: once,
    waitFor: waitFor,
    not: not
};


var slice = Array.prototype.slice;


/**
 * Similarly to Function constructor creates a function from code.
 * Unlike Function constructor, the first argument is a function name
 *
 * @param {String} name new function name
 * @param {String} arg1, arg2, ... the names of function parameters
 * @param {String} funcBody function body
 * @return {Function}
 */
function makeFunction(arg1, arg2, funcBody) {
    var name = this
        , count = arguments.length - 1
        , funcBody = arguments[count]
        , func
        , code = '';
    for (var i = 0; i < count; i++)
        code += ', ' + arguments[i];
    code = ['func = function ', name, '(', code.slice(2), ') {\n'
                , funcBody, '\n}'].join('');
    eval(code);
    return func;
}


/**
 * Creates a function as a result of partial function application with the passed parameters.
 *
 * @param {Function} self Function to be applied
 * @param {List} arguments Arguments after self will be prepended to the original function call when the partial function is called.
 * @return {Function}
 */
function partial() { // , ... arguments
    var func = this;
    var args = slice.call(arguments);
    return function() {
        return func.apply(this, args.concat(slice.call(arguments)));
    };
}


/**
 * Creates a function as a result of partial function application with the passed parameters, but parameters are appended on the right.
 *
 * @param {Function} self Function to be applied
 * @param {List} arguments Arguments after self will be appended on the right to the original function call when the partial function is called.
 * @return {Function}
 */
function partialRight() { // , ... arguments
    var func = this;
    var args = slice.call(arguments);
    return function() {
        return func.apply(this, slice.call(arguments).concat(args));
    };
}


/**
 * Creates a memoized version of the function using supplied hash function as key. If the hash is not supplied, uses its first parameter as the hash.
 * 
 * @param {Function} self function to be memoized
 * @param {Function} hashFunc optional hash function that is passed all function arguments and should return cache key.
 * @param {Integer} limit optional maximum number of results to be stored in the cache. 1000 by default.
 * @return {Function} memoized function
 */
function memoize(hashFunc, limit) {
    var func = this;
    var cache = {}, keysList = [];
    limit = limit || 1000;

    return function() {
        var key = hashFunc ? hashFunc.apply(this, arguments) : arguments[0];
        if (cache.hasOwnProperty(key))
            return cache[key];

        var result = cache[key] = func.apply(this, arguments);
        keysList.push(key);

        if (keysList.length > limit)
            delete cache[keysList.shift()];

        return result;
    };
}


/**
 * Delays function execution by a given time in milliseconds.
 * The context in function when it is executed is set to `null`.
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Number} wait approximate dalay time in milliseconds
 * @param {List} arguments optional arguments that will be passed to the function
 */
function delay(wait) { // , arguments
    var args = slice.call(arguments, 1);
    return _delay(this, wait, args);
}
 

/**
 * Defers function execution (executes as soon as execution loop becomes free)
 * The context in function when it is executed is set to `null`.
 *
 * @param {Function} self function that execution has to be delayed
 * @param {List} arguments optional arguments that will be passed to the function
 */
function defer() { // , arguments
    return _delay(this, 1, arguments);
}

function _delay(func, wait, args, context) {
    return setTimeout(func.apply.bind(func, context || null, args), wait);
}

/**
 * Same as _.defer, takes first argument as the function to be deferred
 */
var deferFunc = makeProtoFunction(defer);

/**
 * Defers function execution for `times` ticks (executes after execution loop becomes free `times` times)
 * The context in function when it is executed is set to `null`.
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Integer} ticks number of times to defer execution
 * @param {List} arguments optional arguments that will be passed to the function
 */
function deferTicks(ticks) { // , arguments
    if (ticks < 2) return defer.apply(this, arguments);
    var args = repeat.call(deferFunc, ticks - 1);
    args = args.concat(this, slice.call(arguments, 1)); 
    return deferFunc.apply(null, args);
}


/**
 * Works like _.delay but allows to defer method call of `self` which will be the first _.delayMethod parameter
 *
 * @param {Object} self object to delay method call of
 * @param {Function|String} funcOrMethodName function or name of method
 * @param {Number} wait approximate dalay time in milliseconds
 * @param {List} arguments arguments to pass to method
 */
function delayMethod(funcOrMethodName, wait) { // , ... arguments
    var args = slice.call(arguments, 2);
    return _delayMethod(this, funcOrMethodName, wait, args);
}


/**
 * Works like _.defer but allows to defer method call of `self` which will be the first _.deferMethod parameter
 *
 * @param {Object} self object to defer method call of
 * @param {Function|String} funcOrMethodName function or name of method
 * @param {List} arguments arguments to pass to method
 */
function deferMethod(funcOrMethodName) { // , ... arguments
    var args = slice.call(arguments, 1);
    return _delayMethod(this, funcOrMethodName, 1, args);
}

function _delayMethod(object, funcOrMethodName, wait, args) {
    return setTimeout(function() {
        var func = typeof funcOrMethodName == 'string'
                    ? object[funcOrMethodName]
                    : funcOrMethodName;
        func.apply(object, args);
    }, wait);
}


/**
 * Returns function that will execute the original function `wait` ms after it has been called
 * The context in function when it is executed is set to `null`.
 * Arguments passed to the function are appended to the arguments passed to delayed.
 *
 * @param {Function} self function which execution has to be deferred
 * @param {Number} wait approximate dalay time in milliseconds
 * @param {List} arguments optional arguments that will be passed to the function
 * @return {Function}
 */
function delayed(wait) { //, ... arguments
    var func = this
        , args = slice.call(arguments, 1);
    return function() { // ... arguments
        var passArgs = args.concat(slice.call(arguments));
        return _delay(func, wait, passArgs, this);
    };
}


/**
 * Returns function that will execute the original function on the next tick once it has been called
 * The context in function when it is executed is set to `null`.
 * Arguments passed to the function are appended to the arguments passed to deferred.
 *
 * @param {Function} self function which execution has to be deferred
 * @param {List} arguments optional arguments that will be passed to the function
 * @return {Function}
 */
function deferred() { //, ... arguments
    var func = this
        , args = slice.call(arguments);
    return function() { // ... arguments
        var passArgs = args.concat(slice.call(arguments));
        return _delay(func, 1, passArgs, this);
    };
}


/**
 * Creates a function that will call original function once it has not been called for a specified time
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Number} wait approximate dalay time in milliseconds
 * @param {Boolean} immediate true to invoke funciton immediately and then ignore following calls for wait milliseconds
 * @return {Function}
 */
function debounce(wait, immediate) {
    var func = this; // first parameter of _.debounce
    var timeout, args, context, timestamp, result;
    return function() {
        context = this; // store original context
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && ! timeout;
        if (! timeout)
            timeout = setTimeout(later, wait);
        if (callNow)
            result = func.apply(context, args);
        return result;

        function later() {
            var last = Date.now() - timestamp;
            if (last < wait)
                timeout = setTimeout(later, wait - last);
            else {
                timeout = null;
                if (! immediate)
                    result = func.apply(context, args);
            }
        }
    };
}


/**
 * Returns a function, that, when invoked, will only be triggered at most once during a given window of time. 
 *
 * @param {Function} self function that execution has to be delayed
 * @param {Number} wait approximate delay time in milliseconds
 * @param {Object} options `{leading: false}` to disable the execution on the leading edge
 * @return {Function}
 */
function throttle(wait, options) {
    var func = this; // first parameter of _.throttle
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});

    return function() {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        } else if (!timeout && options.trailing !== false)
            timeout = setTimeout(later, remaining);

        return result;
    };

    function later() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
    }
}


/**
 * Call passed function only once
 * @return {Function} self
 */
function once() {
    var func = this
        , ran = false
        , memo;
    return function() {
        if (ran) return memo;
        ran = true;
        memo = func.apply(this, arguments);
        func = null;
        return memo;
    };
}


/**
 * Execute a function when the condition function returns a truthy value
 * it runs the condition function every `checkInterval` milliseconds (default 50)
 *
 * @param {Function} self function: if it returns true the callback is executed
 * @param {Function} callback runs when the condition is true
 * @param {Number} maxTimeout timeout before giving up (time in milliseconds)
 * @param {Function} timedOutFunc a function called if timeout is reached
 * @param {Number} checkInterval time interval when you run the condition function (time in milliseconds), default 50 ms
 */
function waitFor(callback, maxTimeout, timedOutFunc, checkInterval){
    var start = Date.now();
    var condition = this;
    checkInterval = checkInterval || 50;
    var interval = setInterval(testCondition, checkInterval);

    function testCondition() {
        if (condition()) callback();
        else if (Date.now() - start >= maxTimeout)
            timedOutFunc && timedOutFunc();
        else return;
        clearInterval(interval);
    };
}


/**
 * returns the function that negates (! operator) the result of the original function
 * @param {Function} self function to negate
 * @return {Function}
 */
function not() {
    var func = this;
    return function() {
        return !func.apply(this, arguments);
    };
}

},{"./proto_util":8,"./utils":9}],4:[function(require,module,exports){
'use strict';

/**
 * - [isNumeric](#isNumeric)
 */
var numberMethods = module.exports = {
    isNumeric: isNumeric
};


/**
 * Function to test if a value is numeric
 *
 * @param {Any} self value to be tested
 * @return {Boolean} true if it is a numeric value
 */
function isNumeric() {
    return !isNaN(parseFloat(this)) && isFinite(this);
};

},{}],5:[function(require,module,exports){
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
objectMethods.findValue = utils.makeFindMethod(eachKey, 'value');


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
objectMethods.findKey = utils.makeFindMethod(eachKey, 'key');


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
 * @return {Object}
 */
function deepExtend(obj, onlyEnumerable) {
    return _extendTree(this, obj, onlyEnumerable, []);
}


function _extendTree(selfNode, objNode, onlyEnumerable, objTraversed) {
    if (objTraversed.indexOf(objNode) >= 0) return; // node already traversed, obj has recursion

    // store node to recognise recursion
    objTraversed.push(objNode);

    var loop = Array.isArray(objNode) ? Array.prototype.forEach : eachKey;

    loop.call(objNode, function(value, prop) {
        var descriptor = Object.getOwnPropertyDescriptor(objNode, prop);
        if (typeof value == 'object' && value != null
                && ! (value instanceof RegExp) && ! (value instanceof Date)) {
            if (! (selfNode.hasOwnProperty(prop)
                    && typeof selfNode[prop] == 'object' && selfNode[prop] != null))
                selfNode[prop] = (Array.isArray(value)) ? [] : {};
            _extendTree(selfNode[prop], value, onlyEnumerable, objTraversed);
        } else
            Object.defineProperty(selfNode, prop, descriptor);
    }, this, onlyEnumerable);

    return selfNode;
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

},{"./utils":9}],6:[function(require,module,exports){
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

},{"./proto_function":3,"./proto_object":5}],7:[function(require,module,exports){
'use strict';


var __ = require('./proto_object');


/**
 * - [firstUpperCase](#firstUpperCase)
 * - [firstLowerCase](#firstLowerCase)
 * - [toRegExp](#toRegExp)
 * - [toFunction](#toFunction)
 * - [toDate](#toDate)
 * - [toQueryString](#toQueryString)
 * - [fromQueryString](#fromQueryString)
 * - [jsonParse](#jsonParse)
 * - [hashCode](#hashCode)
 * - [unPrefix](#unPrefix)
 */
 var stringMethods = module.exports = {
    firstUpperCase: firstUpperCase,
    firstLowerCase: firstLowerCase,
    toRegExp: toRegExp,
    toFunction: toFunction,
    toDate: toDate,
    toQueryString: toQueryString,
    fromQueryString: fromQueryString,
    jsonParse: jsonParse,
    hashCode: hashCode,
    unPrefix: unPrefix
};


/**
 * Returns string with the first character changed to upper case.
 *
 * @param {String} self A string that will have its first character replaced
 */
function firstUpperCase() {
    return this ? this[0].toUpperCase() + this.slice(1) : this;
}


/**
 * Returns string with the first character changed to lower case.
 *
 * @param {String} self A string that will have its first character replaced
 */
function firstLowerCase() {
    return this ? this[0].toLowerCase() + this.slice(1) : this;
}


/**
 * Converts string created by `toString` method of RegExp back to RegExp
 *
 * @param {String} self string containing regular expression including enclosing "/" symbols and flags
 * @return {RegExp}
 */
function toRegExp() {
    var rx = this.match(regexpStringPattern);
    if (rx) return new RegExp(rx[1], rx[2]);
}
var regexpStringPattern = /^\/(.*)\/([gimy]*)$/;


/**
 * Converts string created by `toString` method of function back to function
 *
 * @param {String} self string containing full function code
 * @return {Function}
 */
function toFunction() {
    var func;
    var code = 'func = ' + this + ';';
    try {
        eval(code);
        return func;
    } catch(e) {
        return;
    }
}


/**
 * Converts string to date in a safe way so that the resiult is undefined if date is invalid
 *
 * @param {String|Date} self string or date object to convert to VALID date
 * @return {[type]} [description]
 */
function toDate() {
    if (! this) return;
    try {
        var date = new Date(this);
    } catch (e) {}
    if (date && date.getTime && !isNaN(date.getTime()))
        return date;
}


/**
 * Convert params object to a url style query string (without "?")
 * 
 * @param {Object} self The object hash to be converted
 * @param {Function} encode optional function used to encode data, encodeURIComponent is used if not specified
 * @return {String} the resulting query string
 */
function toQueryString(encode) {
    var qs = ''
        , params = this || {}
        , encode = encode || encodeURIComponent;

    __.eachKey.call(params, function(value, key) {
        qs += key + '=' + encode(value) + '&';
    });
    
    return qs.slice(0, -1);
}


/**
 * Convert url style query string (without "?") into object hash
 * 
 * @param {String} self The string to be converted
 * @param {Function} decode optional decode function, decodeURIComponent will be used if not supplied
 * @return {Object} The resulting object hash
 */
function fromQueryString(decode) {
    var pairs = this.split('&')
        , results = {}
        , decode = decode || decodeURIComponent;

    pairs.forEach(function(pair) {
        var splitPair = pair.split('=');
        if (splitPair.length < 2) return;
        var key = splitPair[0]
            , value = decode(splitPair[1] || '');
        if (!key) return;
        results[key] = value;
    });

    return results;
}


/**
 * Safe JSON.parse, returns undefined if JSON.parse throws an exception
 *
 * @param {String} self JSON string representation of object
 * @return {Object|undefined}
 */
function jsonParse() {
    try {
        return JSON.parse(this);
    } catch (e) {}
}


/**
 * Dan Bernstein's algorythm to create hash from string
 *
 * @param {String} self string to convert to hash
 * @return {Number}
 */
function hashCode() {
    var hash = 5381
        , str = this
        , len = str.length;
    for (var i = 0; i < len; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash;
}


/**
 * Removes given prefix from the string. If string does not begin from the prefix, returns undefined
 * 
 * @param {String} self
 * @return {String}
 */
function unPrefix(str) {
    if (this.indexOf(str) == 0)
        return this.replace(str, '');
}

},{"./proto_object":5}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

var utils = module.exports = {
    makeProtoInstanceMethod: makeProtoInstanceMethod,
    makeProtoFunction: makeProtoFunction,
    makeFindMethod: makeFindMethod
}


function makeProtoInstanceMethod(method) {
    return function() {
        this.self = method.apply(this.self, arguments);
        return this;
    };
}


function makeProtoFunction(method) {
    return function() {
        // when the method is executed, the value of "this" will be arguments[0],
        // other arguments starting from #1 will passed to method as parameters.
        return method.call.apply(method, arguments);
    };
}


var _error = new Error;

/**
 * Returns `find` or `findIndex` method, depending on parameter
 *
 * @param {Function} eachMethod - method to use for iteration (forEach for array or eachKey for object)
 * @param {String} findWhat 'value' - returns find method of Array (implemented in ES6) or findValue method of Object, anything else = returns findIndex/findKey methods.
 * @return {Function}
 */
function makeFindMethod(eachMethod, findWhat) {
    var argIndex = findWhat == 'value' ? 0 : 1;

    return function findValueOrIndex(callback, thisArg, onlyEnumerable) {
        var caughtError;
        try {
            eachMethod.call(this, testItem, thisArg, onlyEnumerable);
        } catch (found) {
            if (found === _error) throw caughtError;
            else return found;
        }
        // if looking for index and not found, return -1
        if (argIndex && eachMethod == Array.prototype.forEach)
            return -1; 

        function testItem(value, index, self) {
            var test;
            try {
                test = callback.call(this, value, index, self);
            } catch(err) {
                caughtError = err;
                throw _error;
            }
            if (test)
                throw arguments[argIndex];
        }
    }
}

},{}]},{},[1])