/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function (nums1, m, nums2, n) {
    let i = m + n - 1
    if(i == 0){
        if(m == 1){
            return nums1
        }else{
            nums1[0] = nums2[0]
            return nums1
        }
    }
    let j = m - 1
    let z = n - 1
    while(j>=0 && z>=0){
        if (nums1[j] >= nums2[z]) {
            nums1[i] = nums1[j]
            j--
            i--
        } else {
            nums1[i] = nums2[z]
            z--
            i--
        }
    }
    while(j>=0){
        nums1[i] = nums1[j]
        j--
        i--
    }
    while(z>=0){
        nums1[i] = nums2[z]
        z--
        i--
    }
    return nums1
};

let nums1 = [2, 0]
let m = 1
let nums2 = [1]
let n = 1

merge(nums1, m, nums2, n)