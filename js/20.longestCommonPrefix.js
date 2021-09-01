/**
 * @param {string[]} strs
 * @return {string}
 */
//  var longestCommonPrefix = function(strs) {
//     for(let i = strs[0].length; i > 0 ;i--){
//         let testStr = strs[0].slice(0,i)
//         let regexp = new RegExp("^" + testStr)
//         // console.log(regexp);
//         let flag = true;
//         strs.forEach(item => {
//             if(regexp.test(item) == false){
//                 flag = false;
//             }
//         })
//         if(flag){
//             console.log(testStr);
//             return testStr
//         }
//     }
//     return '';
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    if (strs.length <= 1) {
        return strs[0];
    }
    strs.sort();
    console.log(strs);
    let len = strs[0].length >= strs[strs.length - 1].length ? strs[strs.length - 1].length : strs[0].length;
    let i;
    for (i = 0; i < len; i++) {
        if (strs[strs.length - 1].charAt(i) !== strs[0].charAt(i)) {
            break;
        }
    }
    if (i < 1) {
        console.log(strs[0].substring(0, i));
        return ""
    }
    console.log(strs[0].substring(0, i));
    return strs[0].substring(0, i)
};

strs = ["aaa","aa","acc","aaa"]
longestCommonPrefix(strs)