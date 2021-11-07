/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
//  var longestSubsequence = function(arr, difference) {
//      let max = 1;
//      let size = arr.length
//      for(let i = 0; i<size;i++){
//          let count = 1
//         let temp = i
//          for(let j = i+1;j<size;){
//              if(arr[j] - arr[temp] == difference){
//                 count++;
//                 temp = j;
//                 j++
//              }else{
//                  j++
//              }
//          }
//          max = Math.max(count,max)
//      }
//      return max
// };


// var longestSubsequence = function(arr, difference) {
//     let size = arr.length;
//     let dp = new Array(size);
//     for(let i = 0; i < dp.length; i++){
//         dp[i] = new Array(2);
//     }
//     let m = new Map();
//     dp[0] = [arr[0]+difference,1]
//     m.set(dp[0][0],dp[0][1])
//     for(let i = 1; i< size;i++){
//         if(m.has(arr[i])){
//             dp[i][0] = arr[i] + difference
//             dp[i][1] = m.get(arr[i])+1
//             m.set(dp[i][0],dp[i][1])
//         }else{
//             dp[i][0] = arr[i] + difference
//             dp[i][1] = 1
//             m.set(dp[i][0],dp[i][1])
//         }
//     }
//     let max = 1
//     m.forEach( v => max = max>v?max:v)
//     return max
// }

var longestSubsequence = function(arr, difference) {
    let size = arr.length;
    let max = 1
    let m = new Map();
    m.set(arr[0]+difference,1)
    for(let i = 1; i< size;i++){
        if(m.has(arr[i])){
            m.set(arr[i] + difference,m.get(arr[i])+1)
        }else{
            m.set(arr[i] + difference,1)
        }
        max = Math.max(max,m.get(arr[i] + difference))
    }
    return max
}
let arr = [1,2,3,4]
let difference = 1

longestSubsequence(arr,difference)