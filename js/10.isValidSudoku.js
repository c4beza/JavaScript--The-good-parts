/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i<board.length;i++){ 
        let s = new Set();
        for(let j = 0; j<board[i].length;j++){
            if(board[i][j] != '.' && !s.has(board[i][j])){
                s.add(board[i][j])
            }else
            if(s.has(board[i][j])){
                return false;
            }
        }
    }
    for(let i = 0; i<board.length;i++){
        let s = new Set();
        for(let j = 0; j<board.length;j++){
            if(board[j][i] != '.' && !s.has(board[j][i])){
                s.add(board[j][i])
            }else
            if(s.has(board[j][i])){
                return false;
            }
        }
    }
    for(let i = 0; 3*i+1 <board.length;i++){
        for(let j = 0; 3*j+1<board.length;j++){
            let s = new Set();
            for(let q = 0; q < 3; q++){
                for(let p = 0; p < 3; p++){
                    let cell = board[3*i+q][3*j+p];
                    if(cell != '.' && !s.has(cell)){
                        s.add(cell)
                    }else
                    if(s.has(cell)){
                        return false;
                    }
                }
            }
        }
    }
    return true
};


board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","1",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
isValidSudoku(board);
