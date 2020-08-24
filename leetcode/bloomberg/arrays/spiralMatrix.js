function spiralOrder(matrix) {
  let results = [];
  if (matrix.length === 0) return results;

  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftColumn = 0;
  let rightColumn = matrix[0].length - 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    // Top row
    for (let i = leftColumn; i <= rightColumn; i++) {
      results.push(matrix[topRow][i]);
    }

    // Right column
    for (let i = topRow + 1; i <= bottomRow; i++) {
      results.push(matrix[i][rightColumn]);
    }

    if (topRow < bottomRow && leftColumn < rightColumn) {
      // Bottom row
      for (let i = rightColumn - 1; i > leftColumn; i--) {
        results.push(matrix[bottomRow][i]);
      }

      // Left column
      for (let i = bottomRow; i > topRow; i--) {
        results.push(matrix[i][leftColumn]);
      }
    }
    
    topRow++;
    bottomRow--;
    leftColumn++;
    rightColumn--;
  }

  return results;
}