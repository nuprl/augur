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
 * - [format](proto_string.js.html#format)
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
