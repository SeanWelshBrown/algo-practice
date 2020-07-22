// Given a sorted array nums, remove the duplicates in-place such that
// each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this
// by modifying the input array in-place with O(1) extra memory.

const removeDuplicates = function(nums) {
    
  let i = 0;
  for (j = 1; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
          i++;
          nums[i] = nums[j];
      }
  }
  
  return i + 1;
  
};