const a = 2;
const s = a;

// should be untainted, due to `s` being a sanitizer
const z = s;
