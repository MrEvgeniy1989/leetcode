/**
 * @param {number} n
 * @return {string[]}
 */
let fizzBuzz = function (n) {
    let arrStr = []
    for (let i = 1; i <= n; i++) {
        switch (i % 3 === 0 && i % 5 === 0) {
            case true:
                arrStr.push('FizzBuzz')
                break
            case false:
                switch (i % 3 === 0) {
                    case true:
                        arrStr.push('Fizz')
                        break
                    case false:
                        switch (i % 5 === 0) {
                            case true:
                                arrStr.push('Buzz')
                                break
                            case false:
                                arrStr.push(String(i))
                                break
                        }
                }
        }
        /*   if (i % 3 === 0 && i % 5 === 0) {
               arrStr.push('FizzBuzz')
           } else if (i % 3 === 0) {
               arrStr.push('Fizz')
           } else if (i % 5 === 0) {
               arrStr.push('Buzz')
           } else {
               arrStr.push(String(i))
           }*/
    }
    return arrStr
}

fizzBuzz(3)