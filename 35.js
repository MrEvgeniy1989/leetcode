// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
    const result = nums.map(num => Math.pow(num, 2))
    return result.sort((a, b) => a - b)
};

sortedSquares([-4, -1, 0, 3, 10])
sortedSquares([-7, -3, 2, 3, 11])