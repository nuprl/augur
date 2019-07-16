
var DotNotationPointers = require("./DotNotationPointers")

// simple equality {a: 'a'}
// simple operator queries {b: {$gt: '3'}}
// basic and {c: 'c', d: 'd')}
// dot notation: {'e.x': 'ab'}
// array equality: {array: [1,2,3]}
// object equality: {obj: {x:1,y:2}} // order matters
// array contains: {array: 2}
// dot notation with array index: {'array.1.x': 'ab'}
// any obj embedded in array: {'array.x': 'ab'}
// combination of operators {e: {$gt: 3, $lt: 4}}
// function or string - equivalent of the $where operator
    // function using obj or this

// operators:
    // field operators
        // single-value
            // $gt, $gte, $lt, $lte, $ne
            // special (multiple operands)
                // $geoIntersects, $geoWithin
        // array
            // $nin, $all, $in,
        // no-value
            // $mod, $exists, $regex, $size, $nearSphere, $near
        // special
            // $elemMatch, $not
    // field-independant operators
        // no-value
           // $and, $or, $nor, $where, $comment
        // has value
            // $text
    // projection-operators
        // $, $elemMatch, $meta, $slice

var simpleComparators = {
    $gt: function(a,b) {return a>b},
    $gte:function(a,b) {return a>=b},
    $lt:function(a,b) {return a<b},
    $lte:function(a,b) {return a<=b},
    $ne:function(a,b) {return a!==b},

    $mod:function(docValue,operand) {return docValue%operand[0] === operand[1]},
    $regex:function(docValue,operand) {return typeof(docValue) === 'string' && docValue.match(RegExp(operand)) !== null},

    $exists:function(docValue,operand) {return (docValue !== undefined) === operand},

    $in:function(docVal,operand) {
        return operand.indexOf(docVal) !== -1
    },
    $nin:function(docVal,operand) {
        return operand.indexOf(docVal) === -1
    },
    $all:function(docVal,operand) {
        return docVal instanceof Array && docVal.reduce(function(last,cur) {
            return last && operand.indexOf(cur) !== -1
        },true)
    },
}

var compoundOperatorComparators = {
    $and: function(document, parts) {
        for(var n=0;  n<parts.length; n++) {
            if(!matches(parts[n].parts, document)) {
                return false
            }
        }
        // else
        return true
    },
    $or: function(document, parts) {
        for(var n=0;  n<parts.length; n++) {
            if(matches(parts[n].parts, document)) {
                return true
            }
        }
        // else
        return false
    },
    $nor: function(document, parts) {
        for(var n=0;  n<parts.length; n++) {
            if(matches(parts[n].parts, document)) {
                return false
            }
        }
        // else
        return true
    }
}

var matches = module.exports = function(parts, document) {
    validateDocumentObject(document)

    for(var n=0; n<parts.length; n++) {
        var part = parts[n]
        if(!partMatches(part, document))
            return false
    }
    // else

    return true

}

function partMatches(part, document) {
    var pointers = DotNotationPointers(document, part.field)
    for(var p=0; p<pointers.length; p++) {
        var pointer = pointers[p]

        if(part.operator === undefined) { // equality
            if(!valueTest(pointer.val, part.operand, mongoEqual)) {
                continue; // this part doesn't match
            }
        } else if(part.operator in simpleComparators) {
            var test = valueTest(pointer.val, part.operand, simpleComparators[part.operator])
            if(!test)
                continue; // this part doesn't match
        } else if(part.operator in compoundOperatorComparators) {
            if(!compoundOperatorComparators[part.operator](document, part.parts)) {
                continue; // this part doesn't match
            }
        } else if(part.operator === '$not') {
            if(part.parts.length > 0) {
                if(matches(part.parts, document)) {
                    continue; // this part doesn't match
                }
            } else {
                if(valueTest(pointer.val, part.operand, mongoEqual) === true)
                    continue; // this part doesn't match
            }
        } else if(part.operator === '$size') {
            return pointer.val instanceof Array && pointer.val.length === part.operand

        } else if(part.operator === '$elemMatch') {
            var documentField = pointer.val
            if(documentField === undefined)
                continue; // this part doesn't match

            if(part.implicitField) {
                for(var n=0; n<part.parts.length; n++) {
                    part.parts[n].field = 'x' // some fake field so it can be tested against
                }
            }

            var anyMatched = false
            for(var n=0; n<documentField.length; n++) {
                if(part.implicitField) {
                    var documentToMatch = {x:documentField[n]}
                } else {
                    var documentToMatch = documentField[n]
                }

                if(matches(part.parts, documentToMatch)) {
                    anyMatched = true
                    break;
                }
            }
            if(!anyMatched)
                continue; // this part doesn't match

        } else if(part.operator === '$where') {
            if(part.field !== undefined) {
                var objectContext = pointer.val
            } else {
                var objectContext = document
            }

            if(!part.operand.call(objectContext))
                continue; // this part doesn't match
        } else if(part.operator === '$comment') {
            return true // ignore it

        } else {
            throw new Error("Unsupported operator: "+parts.operator)
        }
        // else
        return true
    }
    // else
    return false
}


// tests a document value against a query value, using a comparison function
// this handles array-contains behavior
function valueTest(documentValue, queryOperand, compare) {
    if(documentValue instanceof Array) {
        if(queryOperand instanceof Array) {
            if(!compare(documentValue, queryOperand)) return false
        } else {
            var test = documentValue.reduce(function(last, cur) {
                return last || compare(cur, queryOperand)
            },false)

            if(!test) return false
        }
    } else {
        return compare(documentValue, queryOperand)
    }
    // else
    return true
}

// matches any value, with mongo's special brand of very strict object equality and weird null matching
function mongoEqual(documentValue,queryOperand) {
    if(documentValue instanceof Array) {
        if(!(queryOperand instanceof Array))
            return false
        if(documentValue.length !== queryOperand.length) {
            return false
        } else {
            return documentValue.reduce(function(previousValue, currentValue, index) {
                return previousValue && mongoEqual(currentValue,queryOperand[index])
            }, true)
        }
    } else if(documentValue instanceof Object) {
        if(!(queryOperand instanceof Object))
            return false

        var aKeys = Object.keys(documentValue)
        var bKeys = Object.keys(queryOperand)

        if(aKeys.length !== bKeys.length) {
            return false
        } else {
            for(var n=0; n<aKeys.length; n++) {
                if(aKeys[n] !== bKeys[n]) return false

                var key = aKeys[n]
                var aVal = documentValue[key]
                var bVal = queryOperand[key]

                if(!mongoEqual(aVal,bVal)) {
                    return false
                }
            }
            // else
            return true
        }
    } else {
        if(queryOperand === null) {
            return documentValue === undefined || documentValue === null
        } else {
            return documentValue===queryOperand
        }
    }
}

function validateDocumentObject(document) {
    for(var key in document) {
        if(key[0] === '$')
            throw new Error("Field names can't start with $")
        else if(key.indexOf('.') !== -1)
            throw new Error("Field names can't contain .")
        else if(document[key] instanceof Object) {
            validateDocumentObject(document[key])
        }
    }
}