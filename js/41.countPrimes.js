/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    function isPrime(n) {
        if (n <= 3) { return n > 1; }
        if (n % 2 == 0 || n % 3 == 0) { return false; }
     
        for (var  i = 5; i * i <= n; i ++) {
            if (n % i == 0 || n % (i + 1) == 0) { return false; }
        }
        return true;
    }
    let count = 0 ;
    for(let i = 0; i<n;i++){
        if(isPrime(i)) count++
    }
    return count
}