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
  
  
	const frequencyMap = {};
  
  for (i = 0; i < a.length; i++) {
		let currentMean = getMean(a[i]);
		if (frequencyMap[currentMean]) {
			frequencyMap[currentMean].push(i);
		} else {
			frequencyMap[currentMean] = [i];
		}
	}

	const groups = [];

	for (let mean in frequencyMap) {
		
	}
  
}