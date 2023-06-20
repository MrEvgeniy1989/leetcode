// https://leetcode.com/problems/running-sum-of-1d-array/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    let result = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        result.push(nums[i] + result[i - 1])
    }

    return result
};

// const runningSum = function(nums) {
//     let beforeResults = nums[0];
//     let result = [nums[0]]
//
//     for (let i = 1; i < nums.length; i++) {
//         beforeResults = beforeResults + nums[i];
//         result.push(beforeResults)
//     }
//
//     return result
// };

runningSum([1,2,3,4])