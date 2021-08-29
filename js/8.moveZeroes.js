/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//方法一 找到0的个数，然后删除所有的0，最后再把0补上
//  var moveZeroes = function(nums) {
//      let count = 0;
//      console.log(nums);
//      for(let i = 0; i<nums.length;){
//         if(nums[i] === 0){
//             count++;
//             nums.splice(i,1)
//             // console.log(nums);
//         }else{
//             i++;
//         }
//      }
//      for(let i = 0;i<count;i++){
//          nums.push(0);
//      }

//     //  console.log(nums);
//      return nums;
// };

//方法二 双指针交换元素。
//  var moveZeroes = function(nums) {
//      let i = 0;
//      for(let j = 0; j<nums.length;j++){
//         if(nums[j] === 0){
//             i++;
//             // console.log(nums);
//         }else{
//             temp = nums[j-i]
//             nums[j-i] = nums[j];
//             nums[j] = temp;
//         }
//      }
//     //  console.log(nums);
//      return nums;
// };

// 方法三 非0项往前挪
 var moveZeroes = function(nums) {
     let i = 0;
     for(let j = 0; j<nums.length;j++){
         if(nums[j] != 0){
             nums[i] = nums[j];
             i++
         }
     }
     for(;i<nums.length;i++){
         nums[i] = 0;
     }
    //  console.log(nums);
     return nums;
};
nums = [0,1,0,3,12];
moveZeroes(nums);