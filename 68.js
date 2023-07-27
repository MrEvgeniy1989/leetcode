// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies, extraCandies) {
    const max = Math.max(...candies)
    let result = []

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true)
        } else result.push(false)
    }

    return result
};

kidsWithCandies([2, 3, 5, 1, 3], 3)