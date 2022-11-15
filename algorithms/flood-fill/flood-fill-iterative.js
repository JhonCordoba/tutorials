function bfs(grid, rowStartPosition, columnStartPosition, oldColor, newColor) {
    var stack = [];
    stack.push([rowStartPosition, columnStartPosition]);
    while (stack.length > 0) {
        var _a = stack.pop(), currentRow = _a[0], currentColumn = _a[1];
        if (!validateCoordinates(grid, currentRow, currentColumn))
            continue;
        if (grid[currentRow][currentColumn] !== oldColor)
            continue;
        grid[currentRow][currentColumn] = newColor;
        stack.push([currentRow + 1, currentColumn]);
        stack.push([currentRow - 1, currentColumn]);
        stack.push([currentRow, currentColumn + 1]);
        stack.push([currentRow, currentColumn - 1]);
    }
}
function validateCoordinates(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[row].length;
}
function iteractiveFloodFill(grid, rowStartPosition, columnStartPosition, newColor) {
    var oldColor = grid[rowStartPosition][columnStartPosition];
    if (oldColor === newColor) {
        return;
    }
    bfs(grid, rowStartPosition, columnStartPosition, oldColor, newColor);
}
var grid2 = [
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
];
iteractiveFloodFill(grid2, 0, 0, 1);
//eslint-disable-next-line
console.log({ grid2: grid2 });
