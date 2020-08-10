// 1. "brute force" solution
const rotateArray1 = function(nums, k) {

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  return nums;
}

// 2. "reversing" solution
const rotateArray2 = function(nums, k) {

  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));
  
  return nums;
}

// 3. "splice" solution
const rotateArray3 = function(nums, k) {
  k %= nums.length;

  nums = nums.splice(nums.length - k, k).concat(nums);

  return nums;
}



let a = [1, 2, 3, 4, 5, 6, 7];
let b = new Array(50000)
b.fill(6)

console.time("runtime");
console.log(rotateArray1(b, 40000));
console.timeEnd("runtime");