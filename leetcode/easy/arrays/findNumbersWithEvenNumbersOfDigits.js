// SOLUTION 1
const findNumbers = nums => {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    (nums[i].toString().length & 1) === 0 && ++ret;
  }
  return ret;
};

// SOLUTION 2
const findNumbers = nums => {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    let len = 0;
    for (let val = nums[i]; val > 0; ++len) {
      val = val / 10 >> 0;
    }
    (len & 1) === 0 && ++ret;
  }
  return ret;
};