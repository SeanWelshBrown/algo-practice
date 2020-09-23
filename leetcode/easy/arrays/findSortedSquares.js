var sortedSquares = function(A) {
  let res = [];
  let up = 0, down = A.length-1;
  
  let a = A[up]*A[up];
  let b = A[down]*A[down];
  
  while (up <= down) {
      if (a > b) {
          res.push(a);
          up++;
          a = A[up]*A[up];
      } else {
          res.push(b);
          down--;
          b = A[down]*A[down];
      }
  }
  
  return res.reverse();
};