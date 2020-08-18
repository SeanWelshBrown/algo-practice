/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(1) space solution with one result array
const productExceptSelf = function(nums) {
    
  let n = nums.length;
  
  let result = [];
  result[0] = 1;
  
  for (let i = 1; i < n; i++) {
      result[i] = result[i - 1] * nums[i - 1];
  }
  
  let r = 1;
  for (let j = n - 1; j >= 0; j--) {
      result[j] = result[j] * r;
      r *= nums[j];
  }
  
  return result;
  
}


// Solution using two arrays, O(n) space complexity)
const productExceptSelf2 = function(nums) {
  
  let n = nums.length;
  
  let left = [];
  left[0] = 1;
  
  for (let i = 1; i < n; i++) {
      left[i] = nums[i - 1] * left[i - 1];
  }
  
  for (let j = n - 2; j >= 0; j--) {
      right[j] = nums[j + 1] * right[j + 1];
  }
  
  let result = [];
  for (k = 0; k < n; k++) {
      result[k] = left[k] * right[k];
  }
  
  return result;
  
};