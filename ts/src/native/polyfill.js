// polyfill promises using bluebird
// @ts-ignore
// Promise = require("bluebird");

// Names are argument order are critical.
function augur_getResolveFor(p, augur_v) { }

// Names and argument order are critical.
function augur_getRejectFor(p, augur_v) { }

function augur_executingReaction(count, augur_v) {
    return augur_v;
}

function augur_executingRejection(count, augur_v) {
    return augur_v;
}

function augur_executingFinally(count, augur_v) {
    return augur_v;
}

const RealPromise = Promise;

let promiseCount = 0;

/*
    Promise Redefinitions
*/

Promise = function(fun) {
    const thisPromiseId = promiseCount++;
    let wrappedFun = function(resolve, reject){
        let wrappedResolve = function(augur_v){
            augur_getResolveFor(thisPromiseId, augur_v);
            resolve(augur_v);
        }
        let wrappedReject = function(err){
            augur_getRejectFor(thisPromiseId, augur_v);
            reject(err);
        }
        fun(wrappedResolve, wrappedReject);
    }
    let p = new RealPromise(wrappedFun);
    let returnMe = PromiseWrapper(p, thisPromiseId);
    Object.defineProperty(returnMe, "augur_pid", {
        enumerable: false,
        writable: true
    });
    returnMe.augur_pid = thisPromiseId;
    return returnMe;
}

/*
    Static Promise Methods
*/

Promise.resolve = function(val) {
    return new Promise(res => res(val));
}

Promise.reject = function(val) {
    return new Promise((res, rej) => rej(val));
}

Promise.all = function promiseAllIterative(values) {
    return new Promise((resolve, reject) => {
       let results = [];
       let completed = 0;
       
       values.forEach((value, index) => {
            Promise.resolve(value).then(result => {
                results[index] = result;
                completed += 1;
                
                if (completed == values.length) {
                    resolve(results);
                }
            }).catch(err => reject(err));
       });
    });
}

Promise.allSettled = function(iterable) {
    return RealPromise.allSettled(iterable);
}

Promise.any = function(iterable) {
    return RealPromise.any(iterable);
}

Promise.race = function(iterable) {
    return RealPromise.race(iterable);
}

function PromiseWrapper(p, currPromiseId){
    let realThen = p.then;
    let realCatch = p.catch;
    let realFinally = p.finally;
    // The return of this function must have all of the methods that promises
    // should have.
    return {
        then: (f) => {
            return new Promise((resolve, reject) => {
                realThen.call(p, (augur_v) => {
                    resolve(f(augur_executingReaction(currPromiseId, augur_v)));
                });
            });
            // promiseCount++
            // let nextPromiseId = promiseCount;
            // return PromiseWrapper(realThen.call(p, (augur_v) => {
            //     augur_v = augur_executingReaction(currPromiseId, augur_v);
            //     console.log('========== Executing')
            //     let result = f(augur_v);
            //     augur_getResolveFor(nextPromiseId, result)
            //     return result;
            // }), nextPromiseId);
        },
        catch: (f) => {
            promiseCount++
            let nextPromiseId = promiseCount;
            return PromiseWrapper(realCatch.call(p, (augur_v) => {
                augur_v = augur_executingRejection(currPromiseId, augur_v);
                let result = f(augur_v);
                // TODO change to getRejectFor
                augur_getResolveFor(nextPromiseId, result)
                return result;
            }), nextPromiseId);
        },
        finally: (f) => {
            promiseCount++
            let nextPromiseId = promiseCount;
            return PromiseWrapper(realFinally.call(p, (augur_v) => {
                augur_v = augur_executingFinally(currPromiseId, augur_v);
                let result = f(augur_v);
                // TODO change to getFinallyFor ...?
                augur_getResolveFor(nextPromiseId, result)
                return result;
            }), nextPromiseId);
        }
        /*
        then: (f) => {
            promiseCount++
            let nextPromiseId = promiseCount;
            return PromiseWrapper(realThen.call(p, (augur_v) => {
                augur_v = augur_executingReaction(currPromiseId, augur_v);
                console.log('========== Executing')
                let result = f(augur_v);
                augur_getResolveFor(nextPromiseId, result)
                return result;
            }), nextPromiseId);
        },
        */
    };
}

// Names are argument order are critical.
// function augur_getTaintFor(count, augur_v) {
//     return augur_v;
// }

Array.prototype.forEach = function (fun /*, thisp */) {
    if (this === void 0 || this === null) { throw TypeError(); }

    var t = this;
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw TypeError(); }

    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
        if (i in t) {
            fun.call(thisp, t[i], i, t);
        }
    }
};

/*
    Old code, for posterity.
*/

// function PromiseWrapper(p: any, count: any){
//     let realThen = p.then;
//     return {
//         then: (f: any) => {
//             console.log("entering reaction for promise: " + count);
//             let thenResult = realThen.call(p, (augur_v: any) => {
//                 augur_v = augur_getTaintFor(p, count, augur_v);
//                 return f(augur_v);
//             });
//             // Should invoke our patch.
//             return new Promise((res, rej) => {
//                 res(thenResult);
//             });
//         }
//     };
// }

/*

(<any> Promise) = function(fun: any) : any {
    console.log("Promise " + promiseCount + " Created");
    let wrappedFun = function(resolve: any,reject: any){
        let wrappedResolve = function(augur_v: any){
            console.log("entering wrapped resolve for promise: " + promiseCount);
            augur_getResolveFor(promiseCount, augur_v);
            resolve(augur_v);
        }
        let wrappedReject = function(err: any){
            reject(err);
        }
        fun(wrappedResolve, wrappedReject);
    }
    let p = new RealPromise(wrappedFun);
    return PromiseWrapper(p, promiseCount++);
}

(<any> Promise).resolve = function<T>(val : T) : Promise<T> {
    console.log('Here!');
    return new Promise((res, rej) => res(val));
}

*/

// Example shit.
// const p = new Promise((res, rej) => {
//     res(2);
// });