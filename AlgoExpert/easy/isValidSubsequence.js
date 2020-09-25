function isValidSubsequence(array, sequence) {
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === sequence[counter]) {
			counter++;
		}
	}
	
	if (counter === sequence.length) {
		return true;
	} else {
		return false;
	}
}