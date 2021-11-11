/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(nums[0] > target) return 0
   let start  = 0;
   let end = nums.length-1
   while(start <= end){
       let mid = start + end >>>1
       if(nums[mid]>target){
           end = mid - 1
       }else
       if(nums[mid]<target){
           start = mid + 1
       }else{
           return mid
       }
   }
   let mid = start + end >>>1
   return mid +  1
};