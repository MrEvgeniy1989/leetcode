// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
    let result = init
    return {
        increment: () => {
            return ++result
        },
        reset: () => {
            result = init
            return result
        },
        decrement: () => {
            return --result
        },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */