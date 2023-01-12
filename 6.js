/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

    Each letter in magazine can only be used once in ransomNote.



    Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true


Constraints:

    1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const ransomNoteArr = ransomNote.split('')
    const magazineArr = magazine.split('')
    for (let i = 0; i < ransomNoteArr.length; i++) {
        if (magazineArr.includes(ransomNoteArr[i])) {
            magazineArr.splice(magazineArr.indexOf(ransomNoteArr[i]), 1)
            continue
        }
        return false
    }
    return true
};

canConstruct('caab', 'baa')