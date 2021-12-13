/**
 * @param {number} m
 * @param {number} n
 */
 var Solution = function (m, n) {
    this.matrix = new Array(m).fill(0).map(v => new Array(n).fill(0))
    this.row = m
    this.column = n
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
    let resRow = null
    let resColumn = null
    let count = 0
    for (let r = 0; r < this.row; r++) {
        for (let c = 0; c < this.column; c++) {
            if (this.matrix[r][c] != 1) {
                if(resRow == null && resColumn == null){
                    resRow = r
                    resColumn = c
                }else{
                    Math.floor(Math.random() * (1 + count)) == count ? [resRow,resColumn] = [r,c]:  [resRow,resColumn] =  [resRow,resColumn]
                }
                count++
            }
        }
    }
    if (resRow!=null && resColumn!=null) {
        this.matrix[resRow][resColumn] = 1
        return [resRow, resColumn]
    }
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
    this.matrix = new Array(this.row).fill(0).map(v => new Array(this.column).fill(0))
};



var obj = new Solution(3, 1)
var param_1 = obj.flip()
var param_1 = obj.flip()
var param_1 = obj.flip()
obj.reset()
var param_1 = obj.flip()
