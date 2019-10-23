let { LinkedList } = require("./linkedList");

const a = 2;
let z = 3;

let list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(a);

for (let a in list) {
    z += a;
}
