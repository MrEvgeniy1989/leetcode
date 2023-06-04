/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '')

    while (s.length > 0) {
        let i = 0
        if (s[i] === s[s.length - 1]) {
            s = s.slice(1, -1)
        } else return false
        i++
    }
    return true
};

// let isPalindrome = function (s) {
//     s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
//
//     for (let i = 0; i < s.length; i += 1) {
//         if (s[i] !== s[s.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true
// };

isPalindrome("0P");
isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
isPalindrome(" ");