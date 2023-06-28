// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
    let val;
    for (let i = 0; i < arr.length; i++) {
        val = arr[i] * 2;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === val && i !== j) return true;
        }
    }
    return false;
};

/*const checkIfExist = function (arr) {
    arr.sort((a, b) => a - b)
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            for (let j = 0; j < arr.length; j++) {
                if (j === i) continue
                if (arr[j] * 2 === arr[i]) return true
            }
        }
    }
    return false
};*/

checkIfExist([-2, 0, 10, -19, 4, 6, -8])
checkIfExist([0, 0])
checkIfExist([10, 2, 5, 3])