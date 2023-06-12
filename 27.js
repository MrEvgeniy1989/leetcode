// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (s.length < 1) return 0
    let left = 0
    let right = 1
    let longestSubstring = 1

    for (; right < s.length; right++) {
        let substring = s.substring(left, right);
        if (substring.indexOf(s[right]) !== -1) {
            left = substring.indexOf(s[right]) + left + 1;
            continue;
        }
        if (longestSubstring < s.substring(left, right).length + 1) longestSubstring = s.substring(left, right).length + 1
    }

    return longestSubstring
};

lengthOfLongestSubstring("bbtablud")
lengthOfLongestSubstring("tmmzuxt")
lengthOfLongestSubstring("dvdf")
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("pwwkew")
