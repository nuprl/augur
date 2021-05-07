let src = 5

const asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    if (this.i === 2) {
                        return Promise.resolve({value: src, done: false})
                    }
                    return Promise.resolve({ value: this.i++, done: false });
                }

                return Promise.resolve({ done: true });
            }
        };
    }
};

(async function() {
    for await (let num of asyncIterable) {
        console.log(num);
    }
})();