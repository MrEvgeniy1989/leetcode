const removeDuplicates = function (nums) {
    let k = 1; // initial length of unique elements
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i]; // move unique element to index k
            k++;
        }
    }
    return k;
};