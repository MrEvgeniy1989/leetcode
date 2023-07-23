// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/submissions/
/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (operations) {
    let result = 0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes('+')) {
            result += 1;
        } else {
            result -= 1;
        }
    }
    return result;
};