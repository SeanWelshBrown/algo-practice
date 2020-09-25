function riverSizes(matrix) {
  
	let riverSizes = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				let riverSize = 0;
				function dfs(grid, i, j) {
					if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
						return;
					}

					riverSize += 1;
					grid[i][j] = 0;

					dfs(grid, i - 1, j, riverSize);
					dfs(grid, i + 1, j, riverSize);
					dfs(grid, i, j - 1, riverSize);
					dfs(grid, i, j + 1, riverSize);
				}
				dfs(matrix, i, j);
				riverSizes.push(riverSize);
			}
		}
	}
	
	return riverSizes;
}