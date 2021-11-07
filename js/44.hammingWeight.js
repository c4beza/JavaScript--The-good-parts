/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    return n.toString(2).replace(/0/g, '').length 
};

let n = 00000000111111111111111110001011
console.log(hammingWeight(n)); 