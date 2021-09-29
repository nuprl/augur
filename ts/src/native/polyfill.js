// polyfill promises using bluebird
// @ts-ignore
// Promise = require("bluebird");

const RealPromise = Promise;

let promiseCount = 1;

/*
    Promise Redefinitions
*/

Promise = function(fun) {
    let wrappedFun = function(resolve, reject){
        let wrappedResolve = function(augur_v){
            augur_getResolveFor(promiseCount, augur_v);
            resolve(augur_v);
        }
        let wrappedReject = function(err){
            reject(err);
        }
        fun(wrappedResolve, wrappedReject);
    }
    let p = new RealPromise(wrappedFun);
    return PromiseWrapper(p, promiseCount++);
}

Promise.resolve = function(val) {
    return new Promise(res => res(val));
}

Promise.reject = function(val) {
    return new Promise((res, rej) => rej(val));
}

function PromiseWrapper(p, currPromiseId){
    let realThen = p.then;
    return {
        then: (f) => {
            promiseCount++
            let nextPromiseId = promiseCount;
            return PromiseWrapper(realThen.call(p,(augur_v) => {
                augur_v = augur_getTaintFor(currPromiseId, augur_v);
                let result = f(augur_v);
                augur_getResolveFor(nextPromiseId, result)
                return result;
            }), nextPromiseId);
        }
    };
}

// Names are argument order are critical.
function augur_getResolveFor(p, augur_v) { }

// Names are argument order are critical.
function augur_getTaintFor(count, augur_v) {
    return augur_v;
}

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
