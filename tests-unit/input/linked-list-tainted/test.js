let { LinkedList } = require("./linkedList");

const a = 2;
let z = 3;

let list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(a);

// we don't have for loop callbacks yet

// for (let x in list) {
//     z += x;
// }

let cur = list;
while (cur) {
    z += a;
    cur = cur.next;
}
