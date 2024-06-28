/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let val = init;

    function increment() {
        return ++val;
    }

    function reset() {
        return val = init;
    }

    function decrement() {
        return --val;
    }

    return {
        increment,
        reset,
        decrement
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */