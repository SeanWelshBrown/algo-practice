var generateMatrix = function(n) {
  let results = [];
  if (n === 0) return results;
  
  for (let i = 0; i < n; i++) {
      results.push([]);
  }
  
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  
  let counter = 1;
  
  while (top <= bottom && left <= right) {
      
      for (let i = left; i <= right; i++) {
          results[top][i] = counter;
          counter++;
      }
      
      for (let i = top + 1; i <= bottom; i++) {
          results[i][right] = counter;
          counter++;
      }
      
      for (let i = right - 1; i > left; i--) {
          results[bottom][i] = counter;
          counter++;
      }
      
      for (let i = bottom; i > top; i--) {
          results[i][left] = counter;
          counter++;
      }
      
      top++;
      bottom--;
      left++;
      right--;
  }
  
  return results;
};