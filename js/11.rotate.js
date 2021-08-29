/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//方法一， 对角线折叠后，倒置数组
//  var rotate = function(matrix) {
//     let m = matrix.length; //4
//     let index = 0
//     for(let i = 0; i< m; i++){  //0 1
//         for (let j = ++index; j < m; j++){  // 23
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }
//     for(let i = 0; i< m;i++){
//         matrix[i].reverse();
//     }
//     return matrix;
// };
//方法二 倒置数组后 对角线折叠
// var rotate = function(matrix) {
//     // for (let i = 0; i< matrix.length/2; i++){
//     //     let temp = matrix[i];
//     //     matrix[i] = matrix[matrix.length - i - 1];
//     //     matrix[matrix.length - i - 1] = temp;
//     // }
//     matrix.reverse();
//     let m = matrix.length; //4
//     for (let i = 0; i< m; i++){
//         for (let j = i; j < m; j++){
//             let temp = matrix[i][j];
//             matrix[i][j] = matrix[j][i];
//             matrix[j][i] = temp;
//         }
//     }
//     return matrix;
// };

// 方法三 一圈一圈旋转
var rotate = function(matrix){
    let m = matrix.length; //4
    for(let i = 0; i< m/2;i++){   //0 1
        for(let j = i; j < m - i -1;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[m-j-1][i];
            matrix[m-j-1][i] = matrix[m - i -1][m - j -1];
            matrix[m-i-1][m-j-1] = matrix[j][m-i-1];
            matrix[j][m-i-1] = temp;
        }
    }
    return matrix;
}

matrix = 
[
[5,1,9,11],
[2,4,8,10],
[13,3,6,7],
[15,14,12,16]]



rotate(matrix);
// [
// [15,13,2,5],
// [14,3,4,1],
// [12,6,8,9],
// [16,7,10,11]]

