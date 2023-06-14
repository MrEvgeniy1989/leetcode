/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function(s1, s2) {
    let s1Counts = new Array(26).fill(0);
    let s2Counts = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        s1Counts[s1.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s2.length; i++) {
        s2Counts[s2.charCodeAt(i) - 97]++;

        if (i >= s1.length) {
            s2Counts[s2.charCodeAt(i - s1.length) - 97]--;
        }

        if (i >= s1.length - 1 && s1Counts.every((count, index) => count === s2Counts[index])) {
            return true;
        }
    }

    return false;
};

checkInclusion("adc", "dcda")
checkInclusion("ab", "eidbaooo")