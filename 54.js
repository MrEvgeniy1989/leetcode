// https://leetcode.com/problems/create-hello-world-function/submissions/992934403/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @return {Function}
 */
const createHelloWorld = function () {
    return function (...args) {
        return 'Hello World'
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */