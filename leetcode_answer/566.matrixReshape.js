/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    if(mat[0].length*mat.length != r*c) return mat
    let newMat = new Array(r).fill(0).map( item => new Array(c).fill(0))
    let arr = []
    let i = 0;
    for(let m = 0;m<mat.length;m++){
        for(let n = 0; n< mat[m].length; n++){
            arr[i] = mat[m][n]
            i++
        }
    }
    i = 0
    while(i<arr.length){
        for(let m = 0; m<newMat.length; m++){
            for(let n = 0;n<newMat[m].length;n++){
                newMat[m][n] = arr[i]
                i++
            }
        }
    }
    return newMat
};


matrixReshape