/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let len = nums.length
    const arr = new Array(nums.length);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(2);
    }

    arr[0][0] = 0
    arr[0][1] = nums[0]
    for(let i = 1; i<len;i++){
        arr[i][0] = Math.max(arr[i-1][0],arr[i-1][1])
        arr[i][1] = arr[i-1][0]+ nums[i]
    }
    return Math.max(arr[len-1][0],arr[len-1][1])
};


var rob = function(nums) {
    let len = nums.length
    let dp1 = 0
    let dp2 = nums[0]
    for(let i = 1; i<len;i++){
        temp = Math.max(dp1,dp2)
        dp2 = dp1+ nums[i]
        dp1 = temp
    }
    return Math.max(dp1,dp2)
};

let nums= [1,2,3,1]
rob(nums)