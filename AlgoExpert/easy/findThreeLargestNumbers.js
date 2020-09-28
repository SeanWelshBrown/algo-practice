function findThreeLargestNumbers(array) {
  let result = [-Infinity, -Infinity, -Infinity];
	
	for (let element of array) {
		if (element > result[2]) {
			let swap = result[2], swap2 = result[1];
			result[2] = element;
			result[1] = swap;
			result[0] = swap2;
		} else if (element > result[1] && element <= result[2]) {
			let swap = result[1];
			result[1] = element;
			result[0] = swap;
		} else if (element > result[0] && element <= result[1]) {
			result[0] = element;
		}
	}
	
	return result;
}