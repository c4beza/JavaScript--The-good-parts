/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let dp = new Array(nums.length)
    for(let i  = 0; i< nums.length;i++){
        dp[i] = new Array(2)
    }
    dp[0][0] = nums[0] //加上他变大了
    dp[0][1] = nums[0]    //加上他变小了，之前最大值
    for(let i  = 1; i< nums.length;i++){
        dp[i][0] = Math.max(dp[i-1][0]+nums[i], nums[i])
        dp[i][1] = Math.max(d[[i-1][1],nums[i]])
    }
    console.log(dp)
};
