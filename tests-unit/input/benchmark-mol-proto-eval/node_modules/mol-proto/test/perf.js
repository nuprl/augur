'use strict';


module.exports = perfTest;


function perfTest(func1, func2, times) {
    // remove return to run performance tests
    return;

    times = times || 100000;
    var time1 = time(func1);
    var time2 = time(func2);

    // change cnsl to console and uncomment to run test
    // cnsl.log('time1:', time1, 'time2:', time2, 'diff: func1 is ', time1 / time2, 'times slower (if < 1 - faster)');

    function time(func) {
        var start = Date.now()
            , i = times;
        while (i--)
            func();
        return Date.now() - start;
    }
}
