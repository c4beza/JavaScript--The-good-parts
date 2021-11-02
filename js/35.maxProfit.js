/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let maxPro = 0
//     let minPrice = prices[0]
//     for( let i = 1; i < prices.length;i++){
//         minPrice = Math.min(minPrice,prices[i])
//         maxPro = Math.max(maxPro, prices[i]- minPrice)
//     }
//     return maxPro
// };


var maxProfit = function (prices) {
    const dp = new Array(prices.length);
    for(let i = 0; i < dp.length; i++){
        dp[i] = new Array(2);
    }

    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for(let i = 1; i < prices.length; i++){
        dp[i][0] = Math.max(dp[i-1][0],prices[i] + dp[i-1][1])
        dp[i][1] = Math.max(-prices[i],dp[i-1][1])
    }
    console.log(dp);
    return dp[prices.length-1][0]
};

prices = [1, 2,3,4,5]
maxProfit(prices)