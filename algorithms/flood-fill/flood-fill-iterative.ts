function bfs(
	grid: number[][],
	rowStartPosition: number,
	columnStartPosition: number,
	oldColor: number,
	newColor: number
) {
	const stack: [number, number][] = [];
	stack.push([rowStartPosition, columnStartPosition]);

	while (stack.length > 0) {
		const [currentRow, currentColumn] = stack.pop() as [number, number];

		if (!validateCoordinates(grid, currentRow, currentColumn)) continue;

		if (grid[currentRow][currentColumn] !== oldColor) continue;

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

function iteractiveFloodFill(
	grid: number[][],
	rowStartPosition: number,
	columnStartPosition: number,
	newColor: number
) {
	const oldColor = grid[rowStartPosition][columnStartPosition];
	if (oldColor === newColor) {
		return;
	}
	bfs(grid, rowStartPosition, columnStartPosition, oldColor, newColor);
}

const grid2: number[][] = [
	[0, 0, 0, 2, 0, 0, 0],
	[0, 0, 0, 2, 0, 0, 0],
	[0, 0, 0, 2, 0, 0, 0],
	[0, 0, 0, 2, 0, 0, 0],
	[0, 0, 0, 2, 0, 0, 0],
	[0, 0, 0, 2, 0, 0, 0],
];

iteractiveFloodFill(grid2, 0, 0, 1);

//eslint-disable-next-line
console.log({ grid2 });
