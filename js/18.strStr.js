/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//  var strStr = function(haystack, needle) {
//      var s = new RegExp(needle,'g');
//     //  console.log(haystack.search(s));
//      return haystack.search(s);
// };

var strStr = function(haystack, needle) {
    if(needle.length === 0){
        return 0;
    }
    for(let i = 0; i + needle.length <= haystack.length;i++){
        let flag = true;
        for(let j = 0;j<needle.length;j++){
            if(haystack.charAt(i+j) != needle.charAt(j)){
                flag = false;
                break;
            }
        }
        if(flag){
            return i;
        }
    }
    return -1;
};


haystack = "aaaaa", needle = "bba"
strStr(haystack,needle)