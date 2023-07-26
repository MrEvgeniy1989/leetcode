// https://leetcode.com/problems/check-if-array-is-good/submissions/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isGood = function (nums) {
    const maxNum = Math.max(...nums);
    const count = new Array(maxNum + 1).fill(0);

    for (const num of nums) {
        count[num]++;
    }

    for (let i = 1; i <= maxNum - 1; i++) {
        if (count[i] !== 1) {
            return false;
        }
    }

    return count[maxNum] === 2;
};
