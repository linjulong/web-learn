var maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    return max;
};

var arr = [9, 2, 8, 5, 7, 12, 16, 14];
console.log(maxProfit(arr))