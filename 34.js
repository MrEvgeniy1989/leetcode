// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
    let result = 0

    nums.forEach(num => {
        if (String(num).split('').length % 2 === 0) result += 1
    })

    return result
};

findNumbers([12, 345, 2, 6, 7896])