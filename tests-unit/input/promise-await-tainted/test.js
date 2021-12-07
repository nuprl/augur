const a = 3;

(async () => {
    const z = await new Promise((res, rej) => { res(a); });
})();
