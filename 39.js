// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
            i -= 1
        }
    }

    return nums.length
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
removeDuplicates([1, 1, 2])