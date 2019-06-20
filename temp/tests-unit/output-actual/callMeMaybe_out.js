// 1: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:1:1:25:4)
// 2: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:1:2:25:2)
// 3: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:18:9:18:16)
// 4: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:13:1:16:2)
// 5: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:20:3:20:8)
// 6: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:9:1:11:2)
// 7: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:10:3:10:11)
// 8: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:1:63:3:2)
// 9: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:21:3:21:8)
// 10: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:5:1:7:2)
// 11: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:24:1:24:20)
digraph {
  GraalVM -> 1;
  GraalVM -> 2;
  3 -> 4;
  5 -> 6;
  7 -> 8;
  7 -> 10;
  9 -> 8;
  9 -> 10;
}
