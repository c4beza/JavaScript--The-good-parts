/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let dp = new Array(prices.length)
    let max = 0
    for(let i = 0; i< dp.length;i++){
        dp[i] = new Array(2).fill(0)
    }
    dp[0][0] = prices[0]
    dp[0][1] = 0
    for(let i = 1;i<dp.length;i++){
        dp[i][0] = Math.min(dp[i-1][0], prices[i])
        dp[i][1] = prices[i] - dp[i-1][0]
        max = Math.max(max,dp[i][1])
    }
    return max
};


let prices = [7,1,5,3,6,4]
maxProfit(prices)