// https://leetcode.com/problems/array-prototype-last/submissions/989216193/
Array.prototype.last = function () {
    return this.length > 0 ? this[this.length - 1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */