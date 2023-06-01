/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let answer = [];
    for (let i = 0; i < nums.length; i++) {
        let result = 1
        for (let j = 0; j < nums.length; j++) {
            if (j === i) continue
            result *= nums[j]
        }
        answer.push(result)
    }
    return answer
};

productExceptSelf([1, 2, 3, 4]);
productExceptSelf([-1, 1, 0, -3, 3]);