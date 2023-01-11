/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let int = 0;
    const romanNumeral = s.split('')
    for (let i = 0; i < romanNumeral.length; i++) {
        switch (romanNumeral[i]) {
            case 'I':
                if (romanNumeral[i + 1] === 'V') {
                    int += 4
                    i = i + 1
                } else if (romanNumeral[i + 1] === 'X') {
                    int += 9
                    i = i + 1
                } else {
                    int += 1
                }
                break
            case 'V':
                int += 5
                break
            case 'X':
                if (romanNumeral[i + 1] === 'L') {
                    int += 40
                    i = i + 1
                } else if (romanNumeral[i + 1] === 'C') {
                    int += 90
                    i = i + 1
                } else {
                    int += 10
                }
                break
            case 'L':
                int += 50
                break
            case 'C':
                if (romanNumeral[i + 1] === 'D') {
                    int += 400
                    i = i + 1
                } else if (romanNumeral[i + 1] === 'M') {
                    int += 900
                    i = i + 1
                } else {
                    int += 100
                }
                break
            case 'D':
                int += 500
                break
            case 'M':
                int += 1000
                break
            default:
                return 'Это не римские цифры'
        }
    }
    return int
};

romanToInt('MCMXCIV')