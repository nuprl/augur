/**
 * File: util/assert.js
 */
function assert(expected, actual){
   if (actual !== expected){
     console.log("expected " + expected + " but got " + actual);
   }
}

export { assert };
