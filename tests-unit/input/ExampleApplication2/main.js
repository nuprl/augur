/**
 * File: main.js
 */

import { exponent } from "./basicmath.js"
import * as arrayMath from "./arraymath.js";
import { assert } from "./util/Assert.js";

const res = exponent(4, 5);
assert(1024, res);

(function(v) {
  let test = function (lib, inArr){
    var math = arrayMath;
    assert(12, math.add(inArr));
    assert(60, math.multiply(inArr));
  }
  test(v, [3, 4, 5]);
})(arrayMath);
