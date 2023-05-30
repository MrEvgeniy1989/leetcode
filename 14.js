// https://leetcode.com/problems/group-anagrams/submissions/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */



const groupAnagrams = function (strs) {
    if (strs === ['']) return [['']]
    let result = [[strs[0]]]
    strs.shift()
    for (let i = 0; strs.length > 0; i++) {
        for (let j = 0; j < strs.length;) {
            if (isAnagram(result[i][0], strs[j])) {
                result[i].push(strs[j])
                strs.splice(strs.indexOf(strs[j]), 1)
            } else {
                j++
            }
        }
        if (strs.length > 0) {
            result.push([strs[0]])
            strs.shift()
        }
    }

    return result
};

const isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    if (s === '' && t === '') return true
    let result = t.split('')
    for (let i = 0; i < s.length; i++) {
        const index = result.indexOf(s[i])
        if (index === -1) return false
        result.splice(index, 1)
    }
    return true
};

groupAnagrams(["",""])
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])