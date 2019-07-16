

var mapValues = require("./mapValues")
var matches = require("./matches")

exports.DotNotationPointers = require("./DotNotationPointers")

// routerDefinition should be a function that gets a Route object as its `this` context
var Parse = function(mongoQuery) {
    this.parts = parseQuery(mongoQuery)
}
Parse.prototype = {}

// instance methods
Parse.prototype.mapValues = function(callback) {
    return mapValues(this.parts, callback)
}
Parse.prototype.matches = function(document) {
    return matches(this.parts, document)
}

exports.parse = function(mongoQuery) {
    return new Parse(mongoQuery)
}
exports.inclusive = function(mongoProjection) {
    return isInclusive(mongoProjection)
}

var complexFieldIndependantOperators = {$and:1, $or:1, $nor:1}
var simpleFieldIndependantOperators = {$text:1, $comment:1}

function isInclusive(projection) {
    for(var k in projection) {
        if(!projection[k]) {
            if(k !== '_id') {
                return false
            }
        } else if(k === '$meta') {
            return true
        } else if(projection[k]) {
            if(projection[k] instanceof Object && ('$elemMatch' in projection[k] || '$slice'  in projection[k])) {
                // ignore
            } else {
                return true
            }
        }
    }
}

function parseQuery(query) {
    if(query instanceof Function || typeof(query) === 'string') {
        if(query instanceof Function) {
            query = "("+query+").call(this)"
        }

        var normalizedFunction = eval("(function() {var obj=this; return "+query+"})")
        return [new Part(undefined, '$where', normalizedFunction)]
    }
    // else

    var parts = []
    for(var key in query) {
        if(key in complexFieldIndependantOperators) { // a field-independant operator
            var operator = key
            var operands = query[key]
            var innerParts = []
            operands.forEach(function(operand) {
                innerParts.push(new Part(undefined, '$and', [operand], parseQuery(operand)))
            })

            parts.push(new Part(undefined, operator, query[key], innerParts))
        } else if(key in simpleFieldIndependantOperators) {
            parts.push(new Part(undefined, key, query[key]))
        } else { // a field
            var field = key
            if(isObject(query[key]) && fieldOperand(query[key])) {
                for(var innerOperator in query[key]) {
                    var innerOperand = query[key][innerOperator]
                    parts.push(parseFieldOperator(field, innerOperator, innerOperand))
                }
            } else { // just a value
                parts.push(new Part(field, undefined, query[key]))
            }
        }
    }

    return parts
}

// returns a Part object
function parseFieldOperator(field, operator, operand) {
    if(operator === '$elemMatch') {
        var elemMatchInfo = parseElemMatch(operand)
        var innerParts = elemMatchInfo.parts
        var implicitField = elemMatchInfo.implicitField
    } else if(operator === '$not') {
        var innerParts = parseNot(field, operand)
    } else {
        var innerParts = []
    }
    return new Part(field, operator, operand, innerParts, implicitField)
}

// takes in the operand of the $elemMatch operator
// returns the parts that operand parses to, and the implicitField value
function parseElemMatch(operand) {
    if(fieldOperand(operand)) {
        var parts = []
        for(var operator in operand) {
            var innerOperand = operand[operator]
            parts.push(parseFieldOperator(undefined, operator, innerOperand))
        }
        return {parts: parts, implicitField: true}
    } else {          // non-field operators ( stuff like {a:5} or {$and:[...]} )
        return {parts: parseQuery(operand), implicitField: false}
    }
}

function parseNot(field, operand) {
    var parts = []
    for(var operator in operand) {
        var subOperand = operand[operator]
        parts.push(parseFieldOperator(field, operator, subOperand))
    }
    return parts
}

// returns true for objects like {$gt:5}, {$elemMatch:{...}}
// returns false for objects like {x:4} and {$or:[...]}
function fieldOperand(obj) {
    for(var key in obj) {
        return key[0] === '$' && !(key in complexFieldIndependantOperators) // yes i know this won't actually loop
    }
}

// returns true if the value is an object and *not* an array
function isObject(value) {
    return value instanceof Object && !(value instanceof Array)
}


var Part = function(field, operator, operand, parts, implicitField) {
    if(parts === undefined) parts = []

    this.field = field
    this.operator = operator
    this.operand = operand
    this.parts = parts
    this.implicitField = implicitField // only used for a certain type of $elemMatch part
}