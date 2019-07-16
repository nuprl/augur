
var DotNotationPointers = module.exports = function(rootObject, property) {
    if(property === undefined) {
        property = []
    } else if(!(property instanceof Array)) {
        property = property.split('.')
    }

    return createPointers(rootObject, property)
}

function createPointers(rootObject, propertyParts) {
    var initialObject = {dummy: rootObject}
    var curInfoObjects = [{obj: initialObject, last: 'dummy', propertyPath: []}]

    propertyParts.forEach(function(part) {
        var nextInfoObjects = []
        curInfoObjects.forEach(function(current) {
            var curValue = getValue(current.obj, current.last)
            if(curValue instanceof Array && !isInteger(part)) {
                curValue.forEach(function(property, index) {
                    nextInfoObjects.push({obj: getValue(curValue, index), propertyPath: current.propertyPath.concat(index, part), last: part})
                })
            } else {
                nextInfoObjects.push({obj: curValue, propertyPath: current.propertyPath.concat(part), last: part})
            }
        })

        curInfoObjects = nextInfoObjects
    })

    return curInfoObjects.map(function(current) {
        if(current.obj === initialObject) {
            var obj = current.obj.dummy
            var last = undefined
        } else {
            var obj = current.obj
            var last = current.last
        }
        return new DotNotationPointer(rootObject, current.propertyPath, {obj:obj, last: last})
    })
}

function getValue(object, key) {
    if(object === undefined)
        return undefined
    else
        return object[key]
}

// an object that is passed a dot-syntax property path and can manipulate the value at that path
// rootObject is the object in which a value will be pointed to
// property can either be:
    // a string, in which case it can have dot notation like "a.b.c"
    // an array, in which case, each member of the array is a property of the last property (e.g. ['a','b'] is the same thing as "a.b")
var DotNotationPointer = function(rootObject, property, propertyInfo) {
    this.root = rootObject
    if(property === undefined) {
        this.property = []
    } else if(property instanceof Array) {
        this.property = property
    } else {
        this.property = property.split('.')
    }

    if(propertyInfo !== undefined) {
        this.propertyInfo = propertyInfo
    }
}
DotNotationPointer.prototype = {}

// getter and setter for the value being pointed to
Object.defineProperty(DotNotationPointer.prototype, 'val', {
    get: function() {
        var info = this.propertyInfo
        if(info.obj === undefined) {
            return undefined
        } else {
            if(info.last !== undefined) {
                return info.obj[info.last]
            } else {
                return info.obj
            }
        }
    }, set: function(value) {
        if(this.propertyInfo.obj === undefined) { // create the path if it doesn't exist
            createProperty(this)
        }

        this.propertyInfo.obj[this.propertyInfo.last] = value
    }
})


function createProperty(that) {
    var result = that.root
    var lastIndex = that.property.length-1
    for(var n=0; n<lastIndex; n++) {
        var value = result[that.property[n]]
        if(value === undefined) {
            if(isInteger(that.property[n+1]))
                var newValue = []
            else
                var newValue = {}

            value = result[that.property[n]] = newValue
        }

        result = value
    }

    that.propertyInfo = {obj:result, last: that.property[lastIndex]}
}


function isInteger(v) {
    var number = parseInt(v)
    return !isNaN(number)
}