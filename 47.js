// https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228
/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
    const expected = [...heights].sort((a, b) => a - b)
    let count = 0

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) count += 1
    }

    return count
};

heightChecker([5, 1, 2, 3, 4])
heightChecker([1, 1, 4, 2, 1, 3])