// Simpler answer
const firstUniqChar = function(s) {
    
  let charHash = {};
  
  let i = 0;
  for (let char of s) {
      charHash[char] = charHash[char] + 1 || 1;
      i++;
  }
  
  let j = 0;
  for (let char of s) {
      if (charHash[char] === 1) return j;
      j++;
  }
  
  return -1;
  
};


// More complex (not necessary) answer featuring deeper hashMap
const firstUniqChar2 = function(s) {
  
  let charHash = {};
  
  let i = 0;
  for (let char of s) {
      if (!charHash[char]) {
          charHash[char] = { occurances: 1, indices: [i] };
          i++;
      } else {
          charHash[char]["occurances"] += 1;
          charHash[char]["indices"].push(i);
          i++
      }
  }
  
  for (let key in charHash) {
      if (charHash[key]["occurances"] === 1) return charHash[key]["indices"][0];
  }
  
  return -1;
  
};