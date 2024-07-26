// program1.js
const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;

  // Function to perform DFS
  const dfs = (grid, i, j) => {
    // Base case for out of bounds or water cell
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 'W') {
      return;
    }

    // Mark the cell as visited by changing it to 'W'
    grid[i][j] = 'W';

    // Explore all 4 directions
    dfs(grid, i + 1, j); // down
    dfs(grid, i - 1, j); // up
    dfs(grid, i, j + 1); // right
    dfs(grid, i, j - 1); // left
  };

  // Traverse the entire grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // If we find a land cell, it's a new island
      if (grid[i][j] === 'L') {
        count++;
        // Perform DFS to mark all connected land cells
        dfs(grid, i, j);
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;
