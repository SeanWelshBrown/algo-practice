// You are given an array of arrays a. Your task is to group the arrays a[i] by their mean values, so that arrays with equal mean values are in the same group, and arrays with different mean values are in different groups.

// Each group should contain a set of indices (i, j, etc), such that the corresponding arrays (a[i], a[j], etc) all have the same mean. Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order, and the groups are sorted in ascending order of their minimum element.

function meanGroups(a) {
    
    
  // helper function to get mean value of an array
  function getMean(arr) {
      let total = 0;
      for (let element of arr) {
          total = total + element;
      }
      
      return (total / arr.length);
  }
  
  
  const groups = [[0]];
  
  for (i = 0; i <= a.length; i++) {
      const mean = getMean(a[i]);
      
      for (let group of groups) {
          if (getMean(a[group[0][0]]) === mean) {
              group[0].push(i)
          } else {
              group
          }
      }
  }
  
}

