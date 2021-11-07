/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    return  n > 0 && (n == 1 || (n % 3 == 0 && isPowerOfThree(n/3)))
};