const search = function(nums, target) {
    
  // Standard Binary Search implemented as helper
  function binarySearch(arr, target, left = 0, right = arr.length - 1) {
      while (right >= left) {
          let mid = Math.floor((left + right) / 2);
          
          if (arr[mid] === target) return mid;
          
          if (arr[mid] > target) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      return -1;
  }
  
  // Helper function to find rotation index
  function findRotationIndex(arr) {
      let left = 0;
      let right = arr.length - 1;
      
      while (right >= left) {
          let mid = Math.floor((left + right) / 2);
          
          if (arr[mid] > arr[mid + 1]) return mid + 1;
          if (arr[mid - 1] > arr[mid]) return mid;
          
          if (arr[mid] > arr[0]) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
  }
  
  // Edge case if a single element array happens to be the target
  if (nums[0] === target) return 0;
  
  // If first element is less than last, nums array has not been
  // rotated, and a regular binary search will work
  if (nums[0] < nums[nums.length - 1]) {
      return binarySearch(nums, target);
  }
  
  
  let rotationIndex = findRotationIndex(nums);
  
  if (nums[rotationIndex] === target) return rotationIndex;
  
  let left;
  let right;
  if (target >= nums[0]) {
      left = 0;
      right = rotationIndex - 1;
  } else {
      left = rotationIndex;
      right = nums.length - 1;
  }
  
  return binarySearch(nums, target, left, right);
};