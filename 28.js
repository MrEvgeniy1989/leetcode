/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
    let result = 0
    let left = 0
    let maxF = 0
    let count = {}

    for (let right = 0; right < s.length; right++) {

        count[s[right]] = 1 + (count[s[right]] ? count[s[right]] : 0)
        maxF = Math.max(maxF, count[s[right]])

        while ((right - left + 1) - maxF > k) {
            count[s[left]] -= 1
            left += 1
        }

        result = Math.max(result, right - left + 1)
    }

    return result
};

characterReplacement("ABABBA", 2)
characterReplacement("AABABBA", 1)