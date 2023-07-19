// https://leetcode.com/problems/build-array-from-permutation/submissions/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function (nums) {
    return nums.map((num) => nums[num]);
};