/**
 * @param {number[]} nums
 * @return {number}
 */
//  var findLHS = function(nums) {
//     let len = nums.length
//     let s = new Set(nums)
//     let max = 0
//     for(let i = 0; i<len; i++){
//         let k = nums[i]
//         let count = 0
//         if(s.has(k+1)){
//             for(let j = 0; j< len; j++){
//                 if(nums[j] == k || nums[j] == k+1){
//                     count++
//                 }
//             }
//             max = Math.max(count,max)
//         }
//     }
//     return max
// };


var findLHS = function(nums) {
    nums.sort((a,b)=>a-b)
    let i = 0
    let arr = new Array()
    while(i < nums.length){
        let k = nums[i]
        let count = 0
        let temp = i
        while(nums[i] == k){
            i++
            count++
        }
        temp = i
        if(nums[i] == k+1){
            while(nums[i] == k+1){
                i++
                count++
            }
            arr.push(count)
        }else{
            arr.push(0)
        }
        i = temp
    }
    return Math.max(...arr)
};

let nums = [1,3,2,2,5,2,3,7]
findLHS(nums)