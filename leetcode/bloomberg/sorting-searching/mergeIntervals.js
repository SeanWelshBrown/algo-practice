// SORTING SOLUTION
var merge = function(intervals) {
  // Sort array by first element, all ranges will be sequential
  intervals.sort((a, b) => a[0] - b[0]);
  
  let i = 0;    
  while (i < intervals.length - 1) {
      // No overlap between arrays, move to next comparison
      if (intervals[i][1] < intervals[i + 1][0]) {
          i++;
          continue;
      } 
      // Overlap found, go deeper to compare values
      if (intervals[i][1] >= intervals[i + 1][0]) {
          
          // Next interval is within first's range; remove it
          if (intervals[i][1] >= intervals[i + 1][1]) {
              intervals.splice(i + 1, 1);
          // Next interval is outside of first's range; merge it into first
          } else {
              intervals[i][1] = intervals[i + 1][1];
              intervals.splice(i + 1, 1);
          }
      } 
  }
  
  return intervals;
};