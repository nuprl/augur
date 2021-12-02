const a = 'tainted';

Promise.resolve(a).then(q => { const z = q; });