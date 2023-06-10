// https://leetcode.com/problems/sliding-window-maximum/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
    const result = [];
    const window = [];
    for (let i = 0; i < nums.length; i++) {
        // remove indices outside the current window
        if (window.length > 0 && window[0] === i - k) {
            window.shift();
        }
        // remove indices of smaller elements
        while (window.length > 0 && nums[window[window.length - 1]] < nums[i]) {
            window.pop();
        }
        window.push(i);
        // add maximum element to result
        if (i >= k - 1) {
            result.push(nums[window[0]]);
        }
    }
    return result;
}