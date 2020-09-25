function twoNumberSum(array, targetSum) {
  let numSet = new Set();
	
	for (let i = 0; i < array.length; i++) {
		let difference = targetSum - array[i];
		
		if (numSet.has(difference)) {
			return [array[i], difference];
		} else {
			numSet.add(array[i]);
		}
	}
	
	return [];
}