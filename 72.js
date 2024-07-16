// https://leetcode.com/problems/palindrome-number/submissions/1322884896/
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    let xStr = x.toString()
    for (let i = 0; i < xStr.length / 2; i++) {
        if (xStr[i] !== xStr[xStr.length - i - 1]) {
            return false
        }
    }
    return true
};