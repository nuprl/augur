// function foo(a){
//   return a;
// }

// function bar(b){
//   return b;
// }

// function baz(c) {
//   this.f();
// }

// function T() {
//   this.f = foo;
//   this.r = baz;
// }

// var t = new T();
// for(var i = 0; i < 2; i++) {
//   t.r();
//   t.f();
//   t.f = bar;
// }

function countThisFun() {
    return 1+2;
}

for (let i=0; i<10; i++) {
    countThisFun();
}