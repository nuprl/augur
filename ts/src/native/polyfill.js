// polyfill promises using bluebird
// @ts-ignore
// Promise = require("bluebird");

const debug = false;

// Names are argument order are critical.
function augur_getResolveFor(p, augur_v) {
    if (debug) console.log('augur_getResolveFor');
}

// Names and argument order are critical.
function augur_getRejectFor(p, augur_v) {
    if (debug) console.log('augur_getRejectFor');
}

function augur_executingReaction(count, augur_v) {
    if (debug) console.log('augur_executingReaction');
    return augur_v;
}

function augur_executingRejection(count, augur_v) {
    if (debug) console.log('augur_executingRejection');
    return augur_v;
}

function augur_executingFinally(count, augur_v) {
    if (debug) console.log('augur_executingFinally');
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
            if (debug) console.log('[Promise wrappedResolve]');
            augur_getResolveFor(thisPromiseId, augur_v);
            resolve(augur_v);
        }
        let wrappedReject = function(err){
            if (debug) console.log('[Promise wrappedReject]');
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
    if (debug) console.log('[Promise.resolve]');
    return new Promise(res => res(val));
}

Promise.reject = function(val) {
    if (debug) console.log('[Promise.reject]');
    return new Promise((res, rej) => rej(val));
}

Promise.all = function promiseAllIterative(values) {
    if (debug) console.log('[Promise.all]');
    let responses = [];
    let errorResp = [];
    return new Promise((resolve, reject) => {
      /** Loop over promises array **/
      if (promises.length > 0) {
          promises.forEach(async (singlePromise, i) => {
            try {
              /** wait for resolving 1 promise **/
              let res = await singlePromise;
              responses.push(res);
              if (i === promises.length - 1) {
                if (errorResp.length > 0) {
                  reject(errorResp);
                } else {
                  resolve(responses);
                }
              }
            } catch (err) {
              errorResp.push(err);
              reject(err);
            }
          });
      } else {
          resolve([]);
      }
    });
}

Promise.allSettled = function(iterable) {
    if (debug) console.log('[Promise.allSettled]');
    return Promise.all(iterable.map(p => p
        .then(value => ({ status: 'fulfilled', value})).
        catch(reason => ({ status: 'rejected', reason }))));
}

Promise.any = function(iterable) {
    if (debug) console.log('[Promise.any]');
    return new Promise((resolve, reject) => {

        let hasResolved = false;
        let promiseLikes = [];
        let iterableCount = 0;
        let rejectionReasons = [];

        function resolveOnce(value) {
            if (!hasResolved) {
                hasResolved = true;
                resolve(value);
            }
        }

        function rejectionCheck(reason) {
            rejectionReasons.push(reason);
            if (rejectionReasons.length >= iterableCount) reject(rejectionReasons);
        }
        for (let value of iterable) {
            iterableCount++;
            promiseLikes.push(value);
        }
        for (let promiseLike of promiseLikes) {
            if (promiseLike.then !== undefined ||
            promiseLike.catch !== undefined) {
                promiseLike.then((result) => resolveOnce(result)).catch((error) => undefined);
                promiseLike.catch((reason) => rejectionCheck(reason));
            } else resolveOnce(promiseLike);
        }
    });
}

Promise.race = function(iterable) {
    if (debug) console.log('[Promise.race]');
    return new Promise((resolve, reject) => {

        let hasResolved = false;
        let promiseLikes = [];
        let iterableCount = 0;
        let rejectionReasons = [];

        function resolveOnce(value) {
            if (!hasResolved) {
                hasResolved = true;
                resolve(value);
            }
        }

        for (let value of iterable) {
            iterableCount++;
            promiseLikes.push(value);
        }
        for (let promiseLike of promiseLikes) {
            if (promiseLike.then !== undefined ||
                promiseLike.catch !== undefined) {
                promiseLike.then((result) => resolveOnce(result)).catch((error) => undefined);
                promiseLike.catch((reason) => reject(reason));
            } else resolveOnce(promiseLike);
        }
    });
}

function PromiseWrapper(p, currPromiseId){
    let realThen = p.then;
    let realCatch = p.catch;
    let realFinally = p.finally;
    // The return of this function must have all of the methods that promises
    // should have.
    return {
        then: (f) => {
            if (debug) console.log('[Promise.then]');
            return new Promise((resolve, reject) => {
                realThen.call(p, (augur_v) => {
                    resolve(f(augur_executingReaction(currPromiseId, augur_v)));
                });
            });
        },
        catch: (f) => {
            if (debug) console.log('[Promise.catch]');
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
            if (debug) console.log('[Promise.finally]');
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

// Array.slice
Array.prototype.slice = function(start, end) {
    // If args weren't given, use defaults
    if (!start) {
        start = 0;
    }
    if (!end) {
        end = this.length;
    }

    // If given indices are negative, convert them to positive equivalences
    if (start < 0) {
        start = this.length + start;
    }
    if (end < 0) {
        end = this.length + end;
    }

    // Is it a valid slice?
    if (start > end) {
        throw `Array.prototype.slice: start (${start}) > end (${end})!`;
    }

    // Slice and dice
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }

    return result;
}