/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let counter = 0
    while (num !== 0) {
        if (num % 2 === 0) {
            counter++
            num /= 2
        } else {
            counter++
            num -= 1
        }
    }
    return counter
};

numberOfSteps(14)