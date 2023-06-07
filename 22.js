// https://leetcode.com/problems/container-with-most-water/description/
/**
 * @param {number[]} height
 * @return {number}
 */
// const maxArea = function (height) {
//     let tempAreaArr = [];
//     let left = 0;
//     let right = height.length - 1;
//
//     for (; left < right; height[left] < height[right] ? left += 1 : right -= 1) {
//         tempAreaArr.push((right - left) * Math.min(height[left], height[right]))
//     }
//
//     return Math.max(...tempAreaArr)
// };

const maxArea = function (height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    for (; left < right; height[left] < height[right] ? left += 1 : right -= 1) {
        let currentWater = (right - left) * Math.min(height[left], height[right])
        maxWater = Math.max(currentWater, maxWater)
    }

    return maxWater
};

maxArea([2, 3, 4, 5, 18, 17, 6])
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])