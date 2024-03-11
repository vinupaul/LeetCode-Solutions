/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */


var createCounter = function (init) {
    let count = init;
    let object = {
        increment: function () {
            count++
            return count;
        },
        reset: function () {
            count = init;
            return count
        },
        decrement: function () {
            count--;
            return count
        },

    };
    return object
};


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */