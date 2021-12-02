const a = 2;

let p = new Promise((res, rej) => { res(a); });

p.then(v => { return v; }).then(q => { const z = q; });