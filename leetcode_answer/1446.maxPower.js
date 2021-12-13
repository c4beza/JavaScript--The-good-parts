/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
     let pre = null
     let count = 1
     let max = 0
    for(let i = 0; i<s.length;i++){
        if(pre != s[i]){
            pre = s[i]
            max = Math.max(max,count)
            count = 1
        }else{
            count++
        }
    }
    max = Math.max(max,count)
    return max
};
let s = "cc"
maxPower(s)