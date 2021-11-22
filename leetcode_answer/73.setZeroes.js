/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
     let rowZero = new Set()
     let columnZero = new Set()
     for(let i = 0; i< matrix.length; i++){
         for(let j = 0; j < matrix[i].length; j++){_
            if(matrix[i][j] == 0){
                rowZero.add(i)
                columnZero.add(j)
            }
        }
     }

     rowZero.forEach(v => {
         for(let i = 0; i < matrix[v].length;i++){
             matrix[v][i] = 0;
         }
     })

     columnZero.forEach(v=>{
         for(let j = 0; j < matrix[j].length; j++){
             matrix[j][v] = 0
         }
     }
     )
};