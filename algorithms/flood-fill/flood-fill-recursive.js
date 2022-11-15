function dfs(grid, rowStartPosition, columnStartPosition, oldColor, newColor) {
    var gridHeight = grid.length;
    var gridWidth = grid[0].length;
    //base case
    if (rowStartPosition < 0 ||
        rowStartPosition >= gridHeight ||
        columnStartPosition < 0 ||
        columnStartPosition >= gridWidth ||
        grid[rowStartPosition][columnStartPosition] != oldColor) {
        return;
    }
    grid[rowStartPosition][columnStartPosition] = newColor;
    dfs(grid, rowStartPosition + 1, columnStartPosition, oldColor, newColor);
    dfs(grid, rowStartPosition - 1, columnStartPosition, oldColor, newColor);
    dfs(grid, rowStartPosition, columnStartPosition + 1, oldColor, newColor);
    dfs(grid, rowStartPosition, columnStartPosition - 1, oldColor, newColor);
}
function floodFill(grid, rowStartPosition, columnStartPosition, newColor) {
    var oldColor = grid[rowStartPosition][columnStartPosition];
    if (oldColor === newColor) {
        return;
    }
    dfs(grid, rowStartPosition, columnStartPosition, oldColor, newColor);
}
var grid = [
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
];
floodFill(grid, 5, 6, 1);
//eslint-disable-next-line
console.log({ grid: grid });
