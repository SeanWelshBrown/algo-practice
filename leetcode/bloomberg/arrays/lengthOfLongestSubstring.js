const lengthOfLongestSubstring = function(str) {
    
  let a_pointer = 0;
  let b_pointer = 0;
  let max = 0;
  
  let charSet = new Set();
  
  while (b_pointer < str.length) {
      if (!charSet.has(str.charAt(b_pointer))) {
          charSet.add(str.charAt(b_pointer));
          b_pointer++;
          max = Math.max(charSet.size, max);
      } else {
          charSet.delete(str.charAt(a_pointer));
          a_pointer++;
      }
  }

  return max;

};