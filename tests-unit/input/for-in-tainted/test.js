const a = 1;
const b = {a: 3, b: 4, c: 9};

for (const k in b) {
    b[k] = a
}

const z = b.b;