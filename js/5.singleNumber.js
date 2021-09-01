/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一消消乐
//  var singleNumber = function(nums) {
//     nums.sort((a,b)=>a-b);
//     for (let i = 0; i<nums.length-1;){
//         if(nums[i] == nums[i+1]){
//             nums.splice(i,2)
//             // console.log(nums);
//             i=0;
//         }
//         else{
//             i++;
//         }
//     }
//     number = nums[0]
//     return number;
//     // console.log(nums);
// };
// 方法二 hashset 集合
// var singleNumber  =function(nums){
//     let s = new Set();
//     for (item of nums){
//         if (s.has(item)){
//             s.delete(item)
//         }else{
//             s.add(item)
//         }
//     }
//     nums = [...s]; //set无法直接输出值，最好转换为数组后遍历输出。
//     return nums[0];
// }
// 方法三 异或运算
var singleNumber = function(nums){
    return nums.reduce((total,cur) => total ^ cur);  //total为累加器，reduce接受一个方法作为reducer然后遍历数组。
}


var nums = [4,1,2,1,2];
singleNumber(nums);