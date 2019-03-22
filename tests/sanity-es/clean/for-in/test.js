const a = 1;
const b = {d: a, b: a, c: a};

for (const k in b) {
    b[k] = 1
}

const z = b.b;