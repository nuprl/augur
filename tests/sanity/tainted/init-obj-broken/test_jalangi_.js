J$.iids = {"9":[1,9,1,10],"17":[1,9,1,10],"25":[1,9,1,10],"33":[2,15,2,16],"41":[2,23,2,24],"49":[2,31,2,32],"57":[2,9,2,33],"65":[2,9,2,33],"73":[2,9,2,33],"81":[3,9,3,10],"89":[3,11,3,14],"97":[3,9,3,15],"105":[3,9,3,15],"113":[3,9,3,15],"121":[1,1,3,16],"129":[1,1,3,16],"137":[1,1,3,16],"145":[1,1,3,16],"153":[1,1,3,16],"161":[1,1,3,16],"nBranches":0,"originalCodeFileName":"/Users/emily/dev/priv/TaintAnalysis/tests/sanity/tainted/init-obj-broken/test.js","instrumentedCodeFileName":"/Users/emily/dev/priv/TaintAnalysis/tests/sanity/tainted/init-obj-broken/test_jalangi_.js","code":"var a = 3;\nvar b = {\"x\": 4, \"y\": 5, \"2\": a};\nvar z = b[\"2\"];"};
jalangiLabel0:
    while (true) {
        try {
            J$.Se(121, '/Users/emily/dev/priv/TaintAnalysis/tests/sanity/tainted/init-obj-broken/test_jalangi_.js', '/Users/emily/dev/priv/TaintAnalysis/tests/sanity/tainted/init-obj-broken/test.js');
            J$.N(129, 'a', a, 0);
            J$.N(137, 'b', b, 0);
            J$.N(145, 'z', z, 0);
            var a = J$.X1(25, J$.W(17, 'a', J$.T(9, 3, 22, false), a, 3));
            var b = J$.X1(73, J$.W(65, 'b', J$.T(57, {
                "x": J$.T(33, 4, 22, false),
                "y": J$.T(41, 5, 22, false),
                "2": J$.R(49, 'a', a, 1)
            }, 11, false), b, 3));
            var z = J$.X1(113, J$.W(105, 'z', J$.G(97, J$.R(81, 'b', b, 1), J$.T(89, "2", 21, false), 4), z, 3));
        } catch (J$e) {
            J$.Ex(153, J$e);
        } finally {
            if (J$.Sr(161)) {
                J$.L();
                continue jalangiLabel0;
            } else {
                J$.L();
                break jalangiLabel0;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
