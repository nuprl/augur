// polyfill promises using bluebird
// @ts-ignore
// Promise = require("bluebird");

const RealPromise = Promise;

let promiseCount = 0;

(<any> Promise) = function(fun: any){

    let wrappedFun = function(resolve: any,reject: any){

        let wrappedResolve = function(v: any){
            // console.log("resolving promise " + promiseCount + " with " + v);
            resolve(v);
        }
        let wrappedReject = function(err: any){
            // console.log("rejecting promise " + promiseCount + " with " + err);
            reject(err);
        }
        fun(wrappedResolve, wrappedReject);
    }
    let p = new RealPromise(wrappedFun);
    return PromiseWrapper(p, promiseCount++);
}

function PromiseWrapper(p: any, count: any){
    let realThen = p.then;
    return {
        then: (f: any) => {
            // console.log("registering reaction " + f + " on promise " + count + "\n");
            return PromiseWrapper(realThen.call(p,(v: any) => {
                // console.log("executing reaction " + f + " on promise " + count + "\n");
                return f(v);
            }), promiseCount++);
        }
    };
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

