/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     let len = nums.length
    let dp = new Array(len)
    let max = nums[0]
    dp[0] = nums[0]
    for(let i = 1; i < len; i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
        max = Math.max(dp[i],max)
    }
    return max
};
let nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)

// var maxSubArray = function(nums) {
//     let len = nums.length
//    let dp = new Array(len).fill([nums[0],nums[0]])
//    for(let i = 1; i < len; i++){
//        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1])
//        dp[i][1] = Math.max(dp[i-1][1]+nums[i],nums[i])
//    }
//    return Math.max(dp[len-1][0],dp[len-1][1])
// };
