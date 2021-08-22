//存在重复元素
// 给定一个整数数组，判断是否存在重复元素。

// 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var containsDuplicate = function(nums) {
//     for(let i = 0; i<nums.length;i++){
//         for(let j = i+1; j < nums.length ;j++){
//             if(nums[i] == nums[j] && i!=j){
//               return true;
//             }
//         }
//     }
//      return false;
// };




// 方法二：排序
// 在对数字从小到大排序之后，数组的重复元素一定出现在相邻位置中。因此，我们可以扫描已排序的数组，每次判断相邻的两个元素是否相等，如果相等则说明存在重复的元素

// 时间复杂度：O(N\log N)O(NlogN)，其中 NN 为数组的长度。需要对数组进行排序。

// 空间复杂度：O(\log N)O(logN)，其中 NN 为数组的长度。注意我们在这里应当考虑递归调用栈的深度
// var containsDuplicate = function(nums) {
//     nums.sort((a,b)=>a-b);
//     for(let i=0;i<nums.length -1 ; i++){
//         if(nums[i] === nums[i+1]){
//             return true
//         }
//     }
//     return false;
// };

// 方法二：哈希表
// 对于数组中每个元素，我们将它插入到哈希表中。如果插入一个元素时发现该元素已经存在于哈希表中，则说明存在重复的元素。
// 时间复杂度：O(N)O(N)，其中 NN 为数组的长度。
// 空间复杂度：O(N)O(N)，其中 NN 为数组的长度。
//  var containsDuplicate = function(nums) {
//     const s = new Set();
//     for (item of nums){   //of用来遍历数组 只会遍历数组值， in用来遍历对象
//         // console.log(item);
//         if(s.has(item)){
//             return true;
//         }
//         s.add(item);
//     }
//     return false;
// };

// var arr = [2,148,18,22,22];
// containsDuplicate(arr)