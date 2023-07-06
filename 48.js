// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    let max = Math.max(...nums)
    let newArr = nums.filter(num => num !== max)
    let max2 = Math.max(...newArr)
    newArr = newArr.filter(num => num !== max2)
    let max3 = newArr.length ? Math.max(...newArr) : max

    return max3 ?? max
};

thirdMax([1, 2])
thirdMax([3, 2, 1])