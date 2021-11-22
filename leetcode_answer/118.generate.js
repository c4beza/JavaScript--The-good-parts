/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows == 0) return null
    let arr = new Array(numRows)
    for(let i = 0;i<arr.length;i++){
        arr[i] = new Array(i+1).fill(0)
    }
    arr[0][0] = 1
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j< arr[i].length;j++){
            if(j == 0 || j == arr[i].length - 1){
                arr[i][j] =1
            }else{
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
            }
        }
    }
    return arr
};

generate(5)