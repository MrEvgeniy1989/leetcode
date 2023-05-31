/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// const topKFrequent = function (nums, k) {
//     const freq = {};
//     const result = [];
//
//     for (let num of nums) {
//         freq[num] = (freq[num] || 0) + 1;
//     }
//
//     const pairs = Object.entries(freq);
//     pairs.sort((a, b) => b[1] - a[1]);
//
//     for (let i = 0; i < k; i++) {
//         result.push(Number(pairs[i][0]));
//     }
//
//     return result;
// };

const topKFrequent = function (nums, k) {
    const map = new Map
    const result = [];

    nums.forEach(num => map.set(num, map.get(num) + 1 || 1))
    const sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1])

    for (let i = 0; i < k; i++) {
        result.push(sortedArray[i][0]);
    }

    return result;
};

topKFrequent([1, 1, 2, 2, 2, 3], 2)