const findNumbers = nums => {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    (nums[i].toString().length & 1) === 0 && ++ret;
  }
  return ret;
};