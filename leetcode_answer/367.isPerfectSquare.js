/**
 * @param {number} num
 * @return {boolean}
 */
//  var isPerfectSquare = function(num) {
//     for(let i = 1; i <= num/i; i++){
//         if( i*i == num){
//             return true
//         }
//     }
//     return false
// };


var isPerfectSquare = function(num) {
    let start = 1
    let end = num
    while(start < end){
        let mid = Math.floor((end+start)/2)
        if(mid*mid < num){
            start = mid+1            
        }else
        if(mid * mid > num){
            end = mid-1
        }else
        if(mid * mid == num){
            return true
        }
    }
    return false
};

isPerfectSquare(26)