// 1: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:1:1:11:4)
// 2: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:1:2:11:2)
// 3: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:9:1:9:6)
// 4: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:5:1:7:2)
// 5: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:6:3:6:8)
// 6: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:1:63:3:2)
// 7: (/Users/franktip/WebstormProjects/NodeProf/tests-unit/input/test.js:10:1:10:6)
digraph {
  GraalVM -> 1;
  GraalVM -> 2;
  3 -> 4;
  5 -> 6;
  7 -> 6;
}
