// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    let result = t.split('')
    for (let i = 0; i < s.length; i++) {
        const index = result.indexOf(s[i])
        if (index === -1) return false
        result.splice(index, 1)
    }
    return true
};

isAnagram('anagram', "nagaram")