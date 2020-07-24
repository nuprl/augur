class LinkedList {
    constructor(v) {
        this.value = v;
    }

    append(v) {
        if (this.next) {
            this.next.append(v);
        } else {
            this.next = new LinkedList(v);
        }
    }

    *[Symbol.iterator]() {
        let cur = this;
        while (cur) {
            yield cur.value;
            cur = cur.next;
        }
    }
}

exports.LinkedList = LinkedList;
