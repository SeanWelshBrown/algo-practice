function binarySearch(array, target) {
  let left = 0;
	let right = array.length - 1;
	
	while (left <= right) {
		let midpoint = Math.floor((left + right) / 2);
		
		if (array[midpoint] === target) return midpoint;
		
		if (target < array[midpoint]) right = midpoint - 1;
		if (target > array[midpoint]) left = midpoint + 1;
	}
	
	return -1;
}