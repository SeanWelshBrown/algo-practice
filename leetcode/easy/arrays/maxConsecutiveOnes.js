
const findMaxConsecutiveOnes = function(nums) {
  let maxSize = 0;
  
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          current++;
          maxSize = Math.max(maxSize, current);
      } else {
          current = 0;
      }
  }
  
  return maxSize;
};