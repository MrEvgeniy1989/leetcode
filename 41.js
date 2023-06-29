// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
    if (arr.length < 3) return false
    let i;
    for (i = 0; i < arr.length - 1 && arr[i] < arr[i + 1]; i++) {
    }
    if (i === 0 || i === arr.length - 1) {
        return false;
    }
    for (; i < arr.length - 1 && arr[i] > arr[i + 1]; i++) {
    }
    return i === arr.length - 1;
};

validMountainArray([2, 1]) // false
validMountainArray([3, 5, 5]) // false
validMountainArray([0, 3, 2, 1]) // true