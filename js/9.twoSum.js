/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//方法一 哈希表
 var twoSum = function(nums, target) {
     let arr = [];
    let m = new Map();
    for(let i = 0;i < nums.length;i++){
        if(m.has(target-nums[i])){
            return [m.get(target-nums[i]),i]
        }else{
            m.set(nums[i],i)
        }
    }
    // console.log(arr);
    return arr;
};
//方法二 双循环
var twoSum = function(nums, target) {
    for (var i = 0; i<nums.length;i++){
        for (j = 0; j<nums.length; j++){
            if (i!=j && nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
};
nums = [3,3], target = 6
twoSum(nums,target)