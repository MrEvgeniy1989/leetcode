// https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3259/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            arr.splice(i, 1, -1)
            break
        }
        let max = arr[i + 1]
        for (let j = i + 2; j < arr.length; j++) {
            if (arr[j] > max) max = arr[j]
        }
        arr.splice(i, 1, max)
    }
    return arr
};

replaceElements([17, 18, 5, 4, 6, 1])