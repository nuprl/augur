// polyfill promises using bluebird
// @ts-ignore
// Promise = require("bluebird");

const RealPromise = Promise;

let promiseCount = 1;

(<any> Promise) = function(fun: any){
    console.log("Promise " + promiseCount + " Created");
    let wrappedFun = function(resolve: any,reject: any){
        let wrappedResolve = function(augur_v: any){
            console.log("entering wrapped resolve for promise: " + promiseCount);
            augur_getResolveFor(augur_v, promiseCount);
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

function PromiseWrapper(p: any, currPromiseId: any){
    let realThen = p.then;
    return {
        then: (f: any) => {
            promiseCount++
            let nextPromiseId = promiseCount;
            return PromiseWrapper(realThen.call(p,(augur_v: any) => {
                augur_v = augur_getTaintFor(p, currPromiseId, augur_v);
                let result = f(augur_v);
                augur_getResolveFor(result, nextPromiseId) // TODO: Fix
                return result;
            }), nextPromiseId);
        }
    };
}

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

function augur_getResolveFor(augur_v: any, p: any) { }

function augur_getTaintFor(p: any, count: number, augur_v: any) {
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

