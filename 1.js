var maximumWealth = function (accounts) {
    let max = 0
    for (let i = 0; i<accounts.length; i++) {
        if (accounts[i].reduce((acc, el) => acc + el) > max) {
            max = accounts[i].reduce((acc, el) => acc + el)
        }
    }
    return max
};

maximumWealth([[1, 2, 3], [3, 2, 1]])