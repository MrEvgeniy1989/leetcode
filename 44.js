// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let endNums = nums.length
    for (let i = 0; i < endNums; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            i--
            endNums--
        }
    }
};

moveZeroes([0,0,1])
moveZeroes([0,1,0,3,12])