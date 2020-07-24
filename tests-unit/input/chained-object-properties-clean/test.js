let o1 = {
    o2: {
        o3: {
            o4: function(x, y) {
                return x + y;
            }
        }
    }
};

let a = 5;
let b = 10;

let sum = o1.o2.o3.o4(123, b);

let z = sum;
// stack should be empty here
