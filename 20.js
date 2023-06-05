/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1];
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            right--;
        }
    }
};

twoSum([0,0,3,4], 0)
twoSum([2, 7, 11, 15], 9)
twoSum([2, 3, 4], 6)
twoSum([-1, 0], -1)