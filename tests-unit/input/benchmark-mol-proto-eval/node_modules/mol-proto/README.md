proto
=====

ES5-compatible object manipulation library for node and modern browsers

[![Build Status](https://travis-ci.org/milojs/proto.png?branch=master)](https://travis-ci.org/milojs/proto)
[![npm version](https://badge.fury.io/js/mol-proto.svg)](https://badge.fury.io/js/mol-proto)
[![Code Climate](https://codeclimate.com/github/milojs/proto/badges/gpa.svg)](https://codeclimate.com/github/milojs/proto)
[![Test Coverage](https://codeclimate.com/github/milojs/proto/badges/coverage.svg)](https://codeclimate.com/github/milojs/proto/coverage)

Documentation: http://milojs.github.io/proto/


Why not use underscore or lo-dash
---------------------------------

1. They do NOT use properties that are non-enumerable when they extend/clone/etc.
2. They DO use enumerable properties from prototypes when they extend/clone/etc.
3. When they clone, they create instances of Object rather than of the same class as cloned object.
4. They implement many methods that are already implemented natively.
5. They don't implement methods for inheritance and extention of prototypes.
6. They create confusion when you read code as you can't clearly differentiate
between arrays and objects (maps), e.g. when _each_ function is used.
7. Underscore has clumbersome chaining syntax, chaining in proto is more succinct.


Install
-------

    npm install mol-proto --save

To use and develop:

    git clone git@github.com:milojs/proto.git
    cd proto
    npm link
    cd ../<your project>
    npm link mol-proto


Use
---

Node/browserify:

    var _ = require('mol-proto');
    
Browser:

All functions are exported as properties of a global _ object when used with [milo](https://github.com/milojs/milo), there is no separate proto bundle yet (will be added shortly).


Functions
---------

* [__Prototype functions__](http://milojs.github.io/proto/proto_prototype.js.html)
   * [extendProto](http://milojs.github.io/proto/proto_prototype.js.html#extendProto)
   * [createSubclass](http://milojs.github.io/proto/proto_prototype.js.html#createSubclass)
   * [makeSubclass](http://milojs.github.io/proto/proto_prototype.js.html#makeSubclass)
   * [newApply](http://milojs.github.io/proto/proto_prototype.js.html#newApply)


* [__Object functions__](http://milojs.github.io/proto/proto_object.js.html)
  * [extend](http://milojs.github.io/proto/proto_object.js.html#extend)
  * [clone](http://milojs.github.io/proto/proto_object.js.html#clone)
  * [defineProperty](http://milojs.github.io/proto/proto_object.js.html#defineProperty)
  * [defineProperties](http://milojs.github.io/proto/proto_object.js.html#defineProperties)
  * [deepExtend](http://milojs.github.io/proto/proto_object.js.html#deepExtend)
  * [deepClone](http://milojs.github.io/proto/proto_object.js.html#deepClone)
  * [keys](http://milojs.github.io/proto/proto_object.js.html#keys)
  * [allKeys](http://milojs.github.io/proto/proto_object.js.html#allKeys)
  * [values](http://milojs.github.io/proto/proto_object.js.html#values)
  * [keyOf](http://milojs.github.io/proto/proto_object.js.html#keyOf)
  * [allKeysOf](http://milojs.github.io/proto/proto_object.js.html#allKeysOf)
  * [eachKey](http://milojs.github.io/proto/proto_object.js.html#eachKey)
  * [mapKeys](http://milojs.github.io/proto/proto_object.js.html#mapKeys)
  * [reduceKeys](http://milojs.github.io/proto/proto_object.js.html#reduceKeys)
  * [filterKeys](http://milojs.github.io/proto/proto_object.js.html#filterKeys)
  * [someKey](http://milojs.github.io/proto/proto_object.js.html#someKey)
  * [everyKey](http://milojs.github.io/proto/proto_object.js.html#everyKey)
  * [findValue](http://milojs.github.io/proto/proto_object.js.html#findValue)
  * [findKey](http://milojs.github.io/proto/proto_object.js.html#findKey)
  * [pickKeys](http://milojs.github.io/proto/proto_object.js.html#pickKeys)
  * [omitKeys](http://milojs.github.io/proto/proto_object.js.html#omitKeys)
  * [isEqual](http://milojs.github.io/proto/proto_object.js.html#isEqual)

* [__Array functions__](http://milojs.github.io/proto/proto_array.js.html)
  * [find](http://milojs.github.io/proto/proto_array.js.html#find)
  * [findIndex](http://milojs.github.io/proto/proto_array.js.html#findIndex)
  * [appendArray](http://milojs.github.io/proto/proto_array.js.html#appendArray)
  * [prependArray](http://milojs.github.io/proto/proto_array.js.html#prependArray)
  * [spliceItem](http://milojs.github.io/proto/proto_array.js.html/proto_array.js.html#spliceItem)
  * [toArray](http://milojs.github.io/proto/proto_array.js.html#toArray)
  * [object](http://milojs.github.io/proto/proto_array.js.html#object)
  * [mapToObject](http://milojs.github.io/proto/proto_array.js.html#mapToObject)
  * [unique](http://milojs.github.io/proto/proto_array.js.html#unique)
  * [deepForEach](http://milojs.github.io/proto/proto_array.js.html#deepForEach)
  * Functions that Array [implements natively](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods) are also added - they can be used with array-like objects and for chaining (native functions are always called).

* [__Function functions__](http://milojs.github.io/proto/proto_function.js.html)
  * [makeFunction](http://milojs.github.io/proto/proto_function.js.html#makeFunction)
  * [partial](http://milojs.github.io/proto/proto_function.js.html#partial)
  * [partialRight](http://milojs.github.io/proto/proto_function.js.html#partialRight)
  * [memoize](http://milojs.github.io/proto/proto_function.js.html#memoize)
  * [delay](http://milojs.github.io/proto/proto_function.js.html#delay)
  * [defer](http://milojs.github.io/proto/proto_function.js.html#defer)
  * [delayed](http://milojs.github.io/proto/proto_function.js.html#delayed)
  * [deferred](http://milojs.github.io/proto/proto_function.js.html#deferred)
  * [deferTicks](http://milojs.github.io/proto/proto_function.js.html#deferTicks)
  * [delayMethod](http://milojs.github.io/proto/proto_function.js.html#delayMethod)
  * [deferMethod](http://milojs.github.io/proto/proto_function.js.html#deferMethod)
  * [debounce](http://milojs.github.io/proto/proto_function.js.html#debounce)
  * [throttle](http://milojs.github.io/proto/proto_function.js.html#throttle) 
  * [once](http://milojs.github.io/proto/proto_function.js.html#once)
  * [waitFor](http://milojs.github.io/proto/proto_function.js.html#waitFor)


* [__String functions__](http://milojs.github.io/proto/proto_string.js.html)
  * [firstUpperCase](http://milojs.github.io/proto/proto_string.js.html#firstUpperCase)
  * [firstLowerCase](http://milojs.github.io/proto/proto_string.js.html#firstLowerCase)
  * [toRegExp](http://milojs.github.io/proto/proto_string.js.html#toRegExp)
  * [toFunction](http://milojs.github.io/proto/proto_string.js.html#toFunction)
  * [toDate](http://milojs.github.io/proto/proto_string.js.html#toDate)
  * [toQueryString](http://milojs.github.io/proto/proto_string.js.html#toQueryString)
  * [fromQueryString](http://milojs.github.io/proto/proto_string.js.html#fromQueryString)
  * [jsonParse](http://milojs.github.io/proto/proto_string.js.html#jsonParse)
  * [hashCode](http://milojs.github.io/proto/proto_string.js.html#hashCode)
  * [unPrefix](http://milojs.github.io/proto/proto_string.js.html#unPrefix)
  * [format](http://milojs.github.io/proto/proto_string.js.html#format)

* [__Number functions__](http://milojs.github.io/proto/proto_number.js.html)
  * [isNumeric](http://milojs.github.io/proto/proto_number.js.html#isNumeric)


* [__Utility functions__](http://milojs.github.io/proto/proto_util.js.html)
  * [times](http://milojs.github.io/proto/proto_util.js.html#times)
  * [repeat](http://milojs.github.io/proto/proto_util.js.html#repeat)
  * [tap](http://milojs.github.io/proto/proto_util.js.html#tap)
  * [result](http://milojs.github.io/proto/proto_util.js.html#result)
  * [identity](http://milojs.github.io/proto/proto_util.js.html#identity)
  * [property](http://milojs.github.io/proto/proto_util.js.html#property)
  * [compareProperty](http://milojs.github.io/proto/proto_util.js.html#compareProperty)
  * [noop](http://milojs.github.io/proto_util.js.html#noop)
