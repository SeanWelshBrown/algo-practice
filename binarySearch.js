const binarySearch = function(arr, target) {

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return "Not found"
}

// TESTS
let a = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(a, 5));