// SORTING SOLUTION 1
const merge1 = function(intervals) {
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


// SORTING SOLUTION 2
const merge = function(intervals) {
  // Sort array by first element, all ranges will be sequential
  intervals.sort((a, b) => a[0] - b[0]);
  
  // Array to be returned
  const merged = [];
  
  for (let interval of intervals) {
      // If merged array is empty, or the last element of the last
      // interval is less than the current, push the current into merged
      if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
          merged.push(interval);
      // Else we merge the current interval into the last by checking which
      // range has a higher maximum value
      } else {
          merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
      }
  }
  
  return merged;
}