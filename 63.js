// https://leetcode.com/problems/shuffle-the-array/submissions/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[i + n]);
    }
    return result;
};