/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    if (nums.length < 1) return 0
    let result = 1
    let temp = 1
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue
        if (nums[i] === nums[i - 1] + 1) {
            temp += 1
        } else {
            if (temp > result) result = temp
            temp = 1
        }
    }
    if (temp > result) result = temp
    return result
};

longestConsecutive([1, 2, 0, 1]);
longestConsecutive([100, 4, 200, 1, 3, 2]);
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);