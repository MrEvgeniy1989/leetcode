// https://leetcode.com/problems/number-of-good-pairs/
/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                result++;
            }
        }
    }
    return result;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);