/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let rowMax = new Array(grid.length).fill(0)
    let columnMax = new Array(grid.length).fill(0)
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            rowMax[i] = Math.max(grid[i][j], rowMax[i])
            columnMax[i] = Math.max(grid[j][i], columnMax[i])
        }
    }
    let sum = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            sum += Math.min(rowMax[i], columnMax[j]) - grid[i][j];
        }
    }
    return sum
};

let grid = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]]
maxIncreaseKeepingSkyline(grid)