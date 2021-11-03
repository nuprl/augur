// polyfill promises using bluebird
// @ts-ignore
// Promise = require("bluebird");

// Names are argument order are critical.
function augur_getResolveFor(p, augur_v) { 
    console.log('augur_getResolveFor');
}

// Names and argument order are critical.
function augur_getRejectFor(p, augur_v) {
    console.log('augur_getRejectFor');
}

function augur_executingReaction(count, augur_v) {
    console.log('augur_executingReaction');
    return augur_v;
}

function augur_executingRejection(count, augur_v) {
    console.log('augur_executingRejection');
    return augur_v;
}

function augur_executingFinally(count, augur_v) {
    console.log('augur_executingFinally');
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
        console.log('[Promise wrappedResolve]');
        let wrappedResolve = function(augur_v){
            augur_getResolveFor(thisPromiseId, augur_v);
            resolve(augur_v);
        }
        let wrappedReject = function(augur_v){
            console.log('[Promise wrappedReject]');
            augur_getRejectFor(thisPromiseId, augur_v);
            reject(augur_v);
        }
        fun(wrappedResolve, wrappedReject);
    }
    let p = new RealPromise(wrappedFun);
    let returnMe = PromiseWrapper(p, thisPromiseId);
    Object.defineProperty(returnMe, "augur_pid", {
        value: thisPromiseId,
        enumerable: false,
        writable: true
    });
    return returnMe;
}

/*
    Static Promise Methods
*/

Promise.resolve = function(val) {
    console.log('[Promise.resolve]');
    return new Promise(res => res(val));
}

Promise.reject = function(val) {
    console.log('[Promise.reject]');
    return new Promise((res, rej) => rej(val));
}

Promise.all = (promises) => {
    console.log('[Promise.all]')
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
              if (i == promises.length - 1) {
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
  };

Promise.allSettled = function(iterable) {
    console.log('[Promise.allSettled]');
    return RealPromise.allSettled(iterable);
}

Promise.any = function(iterable) {
    console.log('[Promise.any]');
    return RealPromise.any(iterable);
}

Promise.race = function(iterable) {
    console.log('[Promise.race]');
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
            console.log('[Promise.then]');
            return new Promise((resolve, reject) => {
                realThen.call(p, (augur_v) => {
                    resolve(f(augur_executingReaction(currPromiseId, augur_v)));
                });
            });
        },
        catch: (f) => {
            console.log('[Promise.catch]');
            return new Promise((resolve, reject) => {
                realCatch.call(p, (augur_v) => {
                    resolve(f(augur_executingRejection(currPromiseId, augur_v)));
                });
            });
        },
        finally: (f) => {
            console.log('[Promise.finally]');
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