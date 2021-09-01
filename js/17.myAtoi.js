/**
 * @param {string} s
 * @return {number}
 */
// 方法一
//  var myAtoi = function(s) {
//      let flag = 0;
//      s = s.trim();
//      if(s.charAt(0) == '-'){
//          s = s.substring(1,)
//          flag = -1;
//      }else
//      if(s.charAt(0) == '+'){
//          s = s.substring(1,)
//          flag = 0;
//      }
//     //  console.log(s);
//      let regExp = /^\d+/;
//      if(flag == -1 && regExp.test(s)){
//         return 0 - Number(s.match(regExp)[0]) < Math.pow(-2,31)? Math.pow(-2,31) :  0 - Number(s.match(regExp)[0])
//      }else
//      if(flag == 0 && regExp.test(s)){
//          return Number(s.match(regExp)[0]) > Math.pow(2,31) - 1?Math.pow(2,31) - 1:Number(s.match(regExp)[0])
//      }else return 0;
// };


//方法二 自动机实现
var myAtoi = function(s){
    class Dms{
        constructor(s){
            this.text = s;
            this.sign = '';
            this.state = 'blank';
            this.value = 0;
            this.m = new Map([
                ["blank" , ["blank","symbol","num","end"]],
                ["symbol", ["end","end","num","end"]],
                ["num",["end","end","num","end"]],
                ["end",["end","end","end","end"]],
            ])
        }

        judge(){
            for(let i = 0; i < this.text.length + 1;){
                if(this.state === "end" || i === this.text.length){
                    return this.sign ==='-'? Math.max(0-this.value,Math.pow(-2,31)) : Math.min(this.value,Math.pow(2,31)-1);
                }
                if(this.text.charAt(i) === ' '){
                    this.state = this.m.get(this.state)[0];
                    i++;
                }else
                if(this.text.charAt(i) === '+'){
                    this.state = this.m.get(this.state)[1];
                    this.sign = this.state === "symbol"? '+': this.sign;
                    i++;
                }else
                if(this.text.charAt(i) === '-'){
                    this.state = this.m.get(this.state)[1];
                    this.sign = this.state === "symbol"? '-': this.sign;
                    i++;
                }else
                if(/\d/.test(this.text.charAt(i))){
                    this.state = this.m.get(this.state)[2];
                    this.value = 10 * this.value + Number(this.text.charAt(i))
                    i++;
                }else{
                    this.state = this.m.get(this.state)[3];
                    i++;
                }
            }
        }
    }
    let temp = new Dms(s);
    let result = temp.judge();
    return result;
}

s = "   -42"
myAtoi(s)