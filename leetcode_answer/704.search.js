/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.length == 1) return nums[0] == target? 0: -1
    let start = 0
    let end = nums.length - 1
    while(start <= end){
        let mid = start + end >>>1
        if(nums[mid] > target){
            end = mid - 1
        }else
        if(nums[mid] < target){
            start = mid + 1
        }else{
            return mid
        }
    }
    return -1
};

