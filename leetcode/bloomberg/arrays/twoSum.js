// BRUTE FORCE SOLUTION
var twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {    
      
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) return [i, j];
      }        
      
  }   
  return null;
};


// HASH MAP TWO-PASS SOLUTION
var twoSum2 = function(nums, target) {
  // create Map object of values and indices
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      numsMap.set(nums[i], i)
  }
  
  for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];
      if (numsMap.has(difference) && numsMap.get(difference) != i) return [i, numsMap.get(difference)];
  }
  return null;
};


// HASH MAP ONE-PASS SOLUTION
var twoSum = function(nums, target) {
  const numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];
      if (numsMap.has(difference)) return [numsMap.get(difference), i];
      
      numsMap.set(nums[i], i);
  }
  return null;
}

