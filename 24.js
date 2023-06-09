/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 1;
    let profit = 0;
    let maxProfit = 0
    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            profit = prices[right] - prices[left];
            if (profit > maxProfit) maxProfit = profit
        } else left = right;
        right++;
    }
    return maxProfit;
}

maxProfit([7, 1, 5, 3, 6, 4])
