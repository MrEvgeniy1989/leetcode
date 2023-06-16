/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    let result = []

    for (const token of tokens) {
        switch (token) {
            case "+": {
                result.push(result.pop() + result.pop())
                break;
            }
            case "-": {
                let a = result.pop()
                let b = result.pop()
                result.push(b - a)
                break;
            }
            case "*": {
                result.push(result.pop() * result.pop())
                break;
            }
            case "/": {
                let a = result.pop()
                let b = result.pop()
                result.push(Math.trunc(b / a))
                break;
            }
            default:
                result.push(+token)
        }
    }

    return result[0]
};

// evalRPN(["2", "1", "+", "3", "*"])
// evalRPN(["4", "13", "5", "/", "+"])
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])