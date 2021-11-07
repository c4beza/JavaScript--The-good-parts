/**
 * @param {number[]} nums
 * @return {number}
 */
//  var missingNumber = function(nums) {
//     let s = new Set(nums)
//     for(let i = 0; i <= nums.length; i++){
//         if(!s.has(i))
//         return i
//     }
// };

var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    for(let i = 0;i<nums.length;i++){
        if( nums[i] != i){
            return i
        }
    }
    return nums.length
};


let nums = [2,0,1]
missingNumber(nums)