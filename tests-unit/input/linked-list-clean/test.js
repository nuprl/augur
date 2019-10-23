let { LinkedList } = require("./linkedList");

const a = 2;
let z = 3;

let list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(a);

let list2 = new LinkedList(1);
list2.append(2);
list2.append(3);
list2.append(4);

// iterate over the second, non-tainted list

// we don't have for loop callbacks yet

// for (let x in list) {
//     z += x;
// }

let cur = list2;
while (cur) {
    z += cur.value;
    cur = cur.next;
}
