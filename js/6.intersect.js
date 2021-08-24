/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 方法二：排序 + 双指针
// 如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。

// 首先对两个数组进行排序，然后使用两个指针遍历两个数组。

// 初始时，两个指针分别指向两个数组的头部。每次比较两个指针指向的两个数组中的数字，如果两个数字不相等，则将指向较小数字的指针右移一位，如果两个数字相等，将该数字添加到答案，并将两个指针都右移一位。当至少有一个指针超出数组范围时，遍历结束。

 var intersect = function(nums1, nums2) {
     let arr = [];
     nums1.sort((a,b)=>a-b);
     nums2.sort((a,b)=>a-b);
     let i = 0;
     let j = 0;
     while(i<nums1.length && j<nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        }else
        if(nums1[i]>nums2[j]){
            j++
        }else
        if(nums1[i] == nums2[j]){
            arr.push(nums1[i]);
            i++,j++;
        }
     }
    //  console.log(arr);
     return arr;
};
// 方法二：哈希表
// 由于同一个数字在两个数组中都可能出现多次，因此需要用哈希表存储每个数字出现的次数。对于一个数字，其在交集中出现的次数等于该数字在两个数组中出现次数的最小值。

// 首先遍历第一个数组，并在哈希表中记录第一个数组中的每个数字以及对应出现的次数，然后遍历第二个数组，对于第二个数组中的每个数字，如果在哈希表中存在这个数字，则将该数字添加到答案，并减少哈希表中该数字出现的次数。

// 为了降低空间复杂度，首先遍历较短的数组并在哈希表中记录每个数字以及对应出现的次数，然后遍历较长的数组得到交集。

var intersect = function(nums1, nums2) {
    let arr = [];
    let m = new Map();
    let i = 0;
    while(i < nums1.length){
        if(m.has(nums1[i])){
            m.set(nums1[i],m.get(nums1[i])+1)
            i++;
        }else{
            m.set(nums1[i],1);
            i++;
        }
    }
    nums2.forEach((val,ind)=>{
        if(m.has(val) && m.get(val) > 0){
            arr.push(val);
            m.set(val,m.get(val)-1);
        }
    })
    return arr;
};
nums1 = [4,9,5], nums2 = [9,4,9,8,4]
intersect(nums1,nums2)