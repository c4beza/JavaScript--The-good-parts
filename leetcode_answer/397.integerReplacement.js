/**
 * @param {number} n
 * @return {number}
 */
 var integerReplacement = function(n){
     let count = 0
     let arr = []
    var foo = function(n,count){
        if(n == 1 ){
            arr.push(count)
            return
        }
        if(n%2 == 0){
            count++
            return foo(n/2,count)
        }else{
            count++
            return foo(n+1,count),foo(n-1,count)
        }
    }
    foo(n,count)
    console.log(arr);
};

let n = 9
integerReplacement(n)