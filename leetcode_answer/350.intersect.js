var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let res = new Array()
    let j = 0
    let i = 0
    while (i < nums1.length && j < nums2.length){
        if (nums1[i] < nums2[j]) {
            i++
        } else
            if (nums1[i] > nums2[j]) {
                j++
            } else {
                res.push(nums1[i])
                i++
                j++
            }
    }
    return res

}