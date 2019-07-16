`mongo-parse`
============

A parser for mongo db queries and projections. You can use this to analyze, modify, and match against MongoDb queries, as well as test projections for inclusiveness or exclusiveness.

Example:

```javascript
var parser = require('mongo-parse')
var query = parser.parse({ "powerlevel": { $gt: 9000 }})
// query.parts contains: [{field: 'powerlevel', operator: '$gt', operand: 9000}]

var query2 = {$and:[{userId: "29g8j3h27fh382dh82ae23"},  {animal: {$in: ['beefalo', 'deerclops']}}]}
var newQuery = parser.parse(query2).mapValues(function(field, stringId) {
   if(field === 'userId')
       return ObjectId(stringId)  // change a string ID into an ObjectId when you need to
})
// newQuery is {$and:[{userId: ObjectId("29g8j3h27fh382dh82ae23")}, {animal: {$in: ['beefalo', 'deerclops']}}]}

newQuery.match({userId: ObjectId("29g8j3h27fh382dh82ae23"), animal: 'deerclops'}) // returns true
```

Install
=======

```
npm install mongo-parse
```

Usage
=====

```javascript
var parser = require('mongo-parse')
```

**`var queryObject = parser.parse(mongoQuery)`** - Returns an object that contains a list of query parts, and methods for interacting with the query.

**`queryObject.parts`** - A list of QueryPart objects.

**`queryObject.mapValues(function(field, value) {...})`** - Returns a new mongo query object with values mapped based on the passed in callback. The callback will be called for each leaf-node in the query. For example, in the query `{x:1, $and:[{y:2,z:3}]}`, the callback will be called 3 times. Query parts that don't relate to a field may not trigger the callback. The callback's parameters:

* `field` - The field the query part is for. E.g. for `{x:1}`, the field will be `"x"`. Can be `undefined` for certain query parts that don't relate to a specific field (e.g. the `$text` operator).
* `value` - the value that query part is querying with. E.g. for `{x:1`, the value will be `1`.

**`queryObject.matches(document)`** - returns true if the query matches the passed mongodb `document` object. The following mongo operators are supported: basic equality ({field:value}), $gt, $gte, $lt, $lte, $ne, $in, $nin, $all, $mod, $exists, $regex, $size, $elemMatch, $not, $and, $or, $nor, $where (and implicit where - passing a function), $comment. The following mongo operators are not yet supported $geoIntersects, $geoWithin, $nearSphere, $near, $text, projection operators ($, $meta, $slice)

**`parser.inclusive(mongoProjection)`** - Returns `true` if the projection is inclusive, `false` if it is exclusive, and `undefined` if it is neither. If it is neither, you may either add more exclusive terms or more inclusive terms. Note that fields using the `$elemMatch` or `$slice` [projection operators](https://docs.mongodb.org/v2.6/reference/operator/projection/) can be used with both inclusive and exclusive queries and so have no bearing on inclusiveness. See [here for more info on projections](https://docs.mongodb.org/v2.6/reference/method/db.collection.find/).

QueryPart
--------------

A QueryPart contains the following properties:

* **`field`** - The field a query part relates to. Can be `undefined` if the queryPart doesn't related to a specific field.
* **`operator`** - The operator of a query part. Will be `undefined` for the basic equality query.
* **`operand`** - The operand for a query part. This is the whole value or object contained for the given operation. For example, for `{x: 2}` the operand is `2`, for `{x: {$lt:3}}` the operand is `{$lt:3}`, and for {$and:[{x:1},{y:2}]}, the operand is `[{x:1},{y:2}]`.
* **`parts`** - A list of QueryPart for parts contained within the given query part. For example, for `{a:{$not:{$lt: 4}}}` the parts contains the $lt operator, for `{$and:[{x:1},{y:2}]}` there are two elements in `parts`: one for `{x:1}` and one for `{y:2}`.
* **`implicitField`** - If false, it means that the `parts` of this $elemMatch query part contains normal query parts. If true, it means that the `parts` of this $elemMatch query part contains field operators (like $gt or $in) that will have `undefined` `field` properties. `implicitField` will be `undefined` for any QueryPart object who's `operator` is not `"$elemMatch"`.

DotNotationPointers
--------------------

**`var pointers = parser.DotNotationPointers(rootObject, field)`** - A function that returns a list of DotNotationPointer objects, which allow you to get and set a nested property inside a mongo document object using dot notation.

* `rootObject` - an object that may have the given `field`
* `field` - a fieldname, which can be expressed in dot notation (e.g. 'x' and 'x.y.0.z' are both valid for `field`)

Note that this returns a list because a single `field` path can map to many actual properties because of how mongo fans out the matching paths for arrays. For example, `DotNotationPointers({a:[{b:1},{b:2}]},"a.b")` will return two pointers, one pointing to "a.0.b" and one pointing to "a.1.b".

DotNotationPointer
------------------

A pointer that can get and set a nested property within a mongo document object using dot notation. The object has the following properties:

**`pointer.val`** - a getter/setter value that can be used to both get and set the value selected by the `field` passed into the `DotNotationPointers` function.

**`pointer.property`** - an array representing the `field`, split by '.'. For example, for `'a'` this will hold `['a']`, and for `'a.b'` this will hold `['a','b']`.

**`pointer.propertyInfo`** - an object with the following properties:

* `obj` - an object reference for use in getting or setting the value pointed to.
* `last` - the property within `obj` that holds the value pointed to.

Todo
====

* document projection method (and projection operators)
* Support crazier mongo operators ($geoIntersects, $near, etc)

Changelog
========

* 1.0.5 - Fixing bug where {_id:1} was returning undefined rather than true for `inclusive`
* 1.0.4 - Adding the `inclusive` method.
* 1.0.3 - Merging in create propety fix by Toby Ealden
* 1.0.2 - Removing dependency on proto, since this library doesn't really need much object orientedness
* 1.0.1 - Fixing bug in $exists matching
* 1.0.0
    * Adding query matching
    * Adding DotNotationPointers document traversal utility
    * Adding implicitField property for $elemMatch parts
    * Fixing a couple bugs in mapValues
* 0.0.1 - first version

How to Contribute!
============

Anything helps:

* Creating issues (aka tickets/bugs/etc). Please feel free to use issues to report bugs, request features, and discuss changes
* Updating the documentation: ie this readme file. Be bold! Help create amazing documentation!
* Submitting pull requests.

How to submit pull requests:

1. Please create an issue and get my input before spending too much time creating a feature. Work with me to ensure your feature or addition is optimal and fits with the purpose of the project.
2. Fork the repository
3. clone your forked repo onto your machine and run `npm install` at its root
4. If you're gonna work on multiple separate things, its best to create a separate branch for each of them
5. edit!
6. If it's a code change, please add to the unit tests (at test/grapetreeTest.js) to verify that your change
7. When you're done, run the unit tests and ensure they all pass
8. Commit and push your changes
9. Submit a pull request: https://help.github.com/articles/creating-a-pull-request

License
=======
Released under the MIT license: http://opensource.org/licenses/MIT
