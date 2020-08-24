
// twoSumII solution, using two pointers and sorting the array
const threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let results = [];
  
  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
      if (i === 0 || nums[i - 1] !== nums[i]) {
          twoSumII(nums, i, results);
      }
  }
  return results;
};

const twoSumII = function(nums, i, results) {
  let left = i + 1, right = nums.length - 1;
  while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) left++;
      if (sum > 0) right--;
      if (sum === 0) {
          results.push([nums[i], nums[left], nums[right]])
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
      }
  }
}

