J$.iids = {"9":[1,9,1,10],"17":[1,9,1,10],"25":[1,9,1,10],"33":[2,10,2,11],"41":[2,13,2,14],"49":[2,16,2,17],"57":[2,9,2,18],"65":[2,9,2,18],"73":[2,9,2,18],"81":[3,9,3,10],"89":[3,9,3,10],"97":[3,9,3,10],"105":[5,15,5,16],"113":[6,9,6,10],"121":[6,9,6,10],"129":[6,5,6,11],"137":[1,1,7,2],"145":[1,1,7,2],"153":[1,1,7,2],"161":[1,1,7,2],"169":[1,1,7,2],"177":[1,1,7,2],"185":[1,1,7,2],"nBranches":0,"originalCodeFileName":"/Users/emily/dev/priv/TaintAnalysis/tests/sanity-es/tainted/for-of/test.js","instrumentedCodeFileName":"/Users/emily/dev/priv/TaintAnalysis/tests/sanity-es/tainted/for-of/test_jalangi_.js","code":"var a = 1;\nvar b = [1, 2, a]\nvar z = 0;\n\nfor (var k of b) {\n    z = k;\n}"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(137, '/Users/emily/dev/priv/TaintAnalysis/tests/sanity-es/tainted/for-of/test_jalangi_.js', '/Users/emily/dev/priv/TaintAnalysis/tests/sanity-es/tainted/for-of/test.js');
            J$.N(145, 'a', a, 0);
            J$.N(153, 'b', b, 0);
            J$.N(161, 'z', z, 0);
            J$.N(169, 'k', k, 0);
            var a = J$.X1(25, J$.W(17, 'a', J$.T(9, 1, 22, false), a, 3));
            var b = J$.X1(73, J$.W(65, 'b', J$.T(57, [
                J$.T(33, 1, 22, false),
                J$.T(41, 2, 22, false),
                J$.R(49, 'a', a, 1)
            ], 10, false), b, 3));
            var z = J$.X1(97, J$.W(89, 'z', J$.T(81, 0, 22, false), z, 3));
            for (var k of J$.R(105, 'b', b, 1)) {
                J$.X1(129, z = J$.W(121, 'z', J$.R(113, 'k', k, 1), z, 2));
            }
        } catch (J$e) {
            J$.Ex(177, J$e);
        } finally {
            if (J$.Sr(185)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
