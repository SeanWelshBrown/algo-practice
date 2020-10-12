function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	
	console.log(arrayOne);
	console.log(arrayTwo);
	
	let result = [-Infinity, Infinity];
	
	let pointerA = 0;
	let pointerB = 0;
	while (pointerA < arrayOne.length && pointerB < arrayTwo.length) {
		let currentDiff = Math.abs(arrayOne[pointerA] - arrayTwo[pointerB]);
		
		if (currentDiff === 0) {
			result = [arrayOne[pointerA], arrayTwo[pointerB]];
			return result;
		} else if (currentDiff < Math.abs(result[0] - result[1])) {
			result = [arrayOne[pointerA], arrayTwo[pointerB]];
		}
		
		(arrayOne[pointerA] < arrayTwo[pointerB]) ? pointerA++ : pointerB++;
	}
	
	return result;
}