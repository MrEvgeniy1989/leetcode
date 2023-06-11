// https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
    const freq = {};
    for (const c of t) {
        freq[c] = freq[c] || 0;
        freq[c]++;
    }
    let left = 0, right = 0;
    let count = t.length;
    let min = Infinity;
    let result = '';
    while (right < s.length) {
        if (freq[s[right]] > 0) {
            count--;
        }
        freq[s[right]] = freq[s[right]] || 0;
        freq[s[right]]--;
        right++;
        while (count === 0) {
            if (right - left < min) {
                min = right - left;
                result = s.substring(left, right);
            }
            freq[s[left]]++;
            if (freq[s[left]] > 0) {
                count++;
            }
            left++;
        }
    }
    return result;
};