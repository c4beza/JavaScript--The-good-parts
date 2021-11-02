/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//  var merge = function(nums1, m, nums2, n) {
//      nums1.push.apply(nums1,nums2)

//      nums1.sort((a,b)=>a-b)
// };

//  var merge = function(nums1, m, nums2, n) {
//     let arr = new Array();
//     let i = 0,j = 0,index = 0
//     while(i < m && j < n){
//         if(nums1[i] <= nums2[j]){
//             arr[index++] = nums1[i++]
//         }else{
//             arr[index++] = nums2[j++]
//         }
//     }
//     for(;i < m;){
//         arr[index++] = nums1[i++]
//     }
//     for(;j<n;){
//         arr[index++] = nums2[j++]
//     }
//     for(let k = 0; k< arr.length;k++){
//         nums1[k] = arr[k]
//     }
// };

var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let index = m + n - 1 
    while(i >= 0 && j >= 0){
        if(nums1[i] <= nums2[j]){
            nums1[index--] = nums2[j--]
        }else{
            nums1[index--] = nums1[i--]
        }
    }
    for(;i >= 0;){
        nums1[index--] = nums1[i--]
    }
    for(;j >= 0;){
        nums1[index--] = nums2[j--]
    }
}



merge([1,2,3,0,0,0],
    3,
    [2,5,6],
    3)
