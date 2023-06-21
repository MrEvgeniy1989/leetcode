// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count += 1
            if (count > maxCount) maxCount = count
        } else count = 0

    }

    return maxCount
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])