/**
 * @param {string[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    let allowedValues

    // Rows check
    for (let i = 0; i < board.length; i++) {
        allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '.') continue
            if (allowedValues.includes(board[i][j])) {
                allowedValues.splice(allowedValues.indexOf(board[i][j]), 1)
            } else return false
        }
    }

    // Columns check
    for (let i = 0; i < board.length; i++) {
        allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        for (let j = 0; j < board.length; j++) {
            if (board[j][i] === '.') continue
            if (allowedValues.includes(board[j][i])) {
                allowedValues.splice(allowedValues.indexOf(board[j][i]), 1)
            } else return false
        }
    }

    // Squares check
    for (let i = 0; i < board.length; i += 3) { //column
        for (let l = 0; l < board.length; l += 3) { //row
            allowedValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
            for (let j = i; j < i + 3; j++) {
                for (let k = l; k < l + 3; k++) {
                    if (board[j][k] === '.') continue
                    if (allowedValues.includes(board[j][k])) {
                        allowedValues.splice(allowedValues.indexOf(board[j][k]), 1)
                    } else return false
                }
            }
        }
    }

    return true
};

isValidSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]])