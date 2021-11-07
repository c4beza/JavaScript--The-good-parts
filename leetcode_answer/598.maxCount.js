/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
 var maxCount = function(m, n, ops) {
    let x = ops[0][0]
    let y = ops[0][1];
    for(let i = 1; i< ops.length;i++){
        x = Math.min(x,ops[i][0])
        y = Math.min(y,ops[i][1])
    }
    console.log(x*y);
};

operations = [[2,2],[3,3]]