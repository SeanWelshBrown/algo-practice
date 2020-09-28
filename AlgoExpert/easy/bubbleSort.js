function bubbleSort(array) {
  let isSorted = false;
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				isSorted = false;
			}
		}
	}
	return array;
}