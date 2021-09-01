/**
 * @param {number} n
 * @return {string}
 */
//  var countAndSay = function(n) {
//     let res = '1'
//     for(let i = 1; i< n; i++){
//         let RegExp = /(\d)\1*/g;
//         let arr = res.match(RegExp);
//         let newRes = '';
//         for(let m = 0; m < arr.length; m++){
//             newRes = newRes.concat(arr[m].length,arr[m].charAt(0))
//         }
//         res = newRes;
//     }
//     return res
// };

//递归 + 双指针
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    };
    let pre = countAndSay(n - 1);
    let result = "", left = 0, right = 0;
    while (right < pre.length) {
        while (pre[left] === pre[right] && right < pre.length) {
            right++;
        };
        result += (right - left).toString() + pre[left];
        left = right;
    }
    return result;
};

n = 5
countAndSay(n)

// 1
// 11
// 21

