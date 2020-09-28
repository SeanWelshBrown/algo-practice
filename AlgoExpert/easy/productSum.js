function productSum(array, multiplier = 1) {
  let sum = 0;
	
	for (let element of array) {
		if (!Array.isArray(element)) {
			sum += element;
		} else {
			sum += productSum(element, multiplier + 1);
		}
	}
	
	return sum * multiplier;
}