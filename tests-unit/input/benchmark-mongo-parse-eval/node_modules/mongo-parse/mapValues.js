
var singleValueOperators = {$gt:1, $gte:1, $lt:1, $lte:1, $ne:1, $not:1} // note that $not is only this type if it has no 'parts'
var arrayOperators = {$nin:1, $all:1, $in:1}
//var specialSingleValueOperators = {$geoIntersects:1, $geoWithin:1} // treating as noValueOperators
//var noValueIndependentOperators = {$where:1, $comment:1}
//var noValueFieldOperators = {$mod:1, $exists:1, $regex:1, $size:1, $nearSphere:1, $near:1}

var mapValues = module.exports = function(parts, callback, prefix) {
    var result = {}
    parts.forEach(function(part) {
        if(part.field !== undefined) {
            if(prefix !== undefined) {
                var field = prefix+'.'+part.field
            } else {
                var field = part.field
            }
        } else {
            var field = prefix
        }

        if(part.parts.length === 0) {
            if(part.operator === undefined) { // equality
                if(part.operand instanceof Array) {
                    result[part.field] = part.operand.map(function(v) {
                        return callback(field, v)
                    })
                } else {
                    result[part.field] = callback(field, part.operand)
                }

            } else {                          // some operator
                if(part.operator in singleValueOperators) {
                    if(part.field !== undefined) { // normal situation
                        addOperator(result,part.field, part.operator, callback(field, part.operand))
                    } else { // if its inside an $elemMatch query
                        result[part.operator] =  callback(field, part.operand)
                    }
                } else if(part.operator in arrayOperators) {
                    addOperator(result,part.field, part.operator, part.operand.map(function(v) {
                        return callback(part.field, v)
                    }))

                } else if(part.operator === '$text') {
                    result.$text = {$search: callback(field, part.operand.$search)}
                    if(part.operand.$language !== undefined) {
                        result.$text.$language = part.operand.$language
                    }
                } else { // independent operators with no value
                    // don't map anything
                    if(part.field !== undefined) {
                        addOperator(result,part.field, part.operator, part.operand)
                    } else {
                        result[part.operator] = part.operand
                    }
                }
            }
        } else {
            if(part.operator === '$elemMatch') {
                var mappedValue = mapValues(part.parts, callback, field)
                addOperator(result,part.field, part.operator, mappedValue)

            } else if(part.operator === '$not') {
                result[part.operator] = mapValues(part.parts, callback, field)

            } else {
                var operands = []
                part.parts.forEach(function(innerPart) {
                    operands.push(mapValues(innerPart.parts, callback))
                })
                result[part.operator] = operands
            }
        }
    })

    return result
}

// builds an object immediate where keys can be expressions
function obj(/*key,value, key,value ...*/) {
    var result = {}
    for(var n=0; n<arguments.length; n+=2) {
        result[arguments[n]] = arguments[n+1]
    }
    return result
}

// adds an operator to a field, handling the case where there is already another operator there
function addOperator(obj, field, operator, operand) {
    if(obj[field] === undefined) {
        obj[field] = {}
    }

    obj[field][operator] = operand
}