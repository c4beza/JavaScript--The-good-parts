/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 方法一，数组转换为字符串再转为数字，相加后转为字符串再转为数组。（但如果数组>18位，结果会错）
//  var plusOne = function(digits) {
//     let msg = digits.join("");
//     let number = parseInt(msg) + 1;
//     msg = number.toString();
//     digits = msg.split('').map(Number);
//     return digits
// };  

// 方法二，递归解法。
 var plusOne = function(digits) {
     let i = digits.length-1;
    function addOne(index){
        if((digits[index]+1) != 10){
            digits[index] += 1;
            return digits;
        }else
        if(((digits[index]+1) == 10) && index == 0){
            digits[index] = 0;
            digits.unshift(1);
            return digits;
        }
        else
        if((digits[index]+1) == 10){
            digits[index] = 0;
            addOne(index - 1);
        }
    }
    addOne(i);
    return digits
};  
digits = [1,2,3]
plusOne(digits)