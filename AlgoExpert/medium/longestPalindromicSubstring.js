function longestPalindromicSubstring(string) {
	let result = '';
	
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
			
      while (string[left] && string[left] === string[right]) {
        left--;
        right++;
      }
			
			let substr = string.slice(left + 1, right);
			if (substr.length > result.length) result = substr;
    }
  }
  return result;
}


// First attempted solution

// function longestPalindromicSubstring(string) {
//  let result = "";
	
// 	for (let i = 0; i < string.length; i++) {
// 		let left = i;
// 		let right = i;
		
// 		if (string[right + 1] === string[i]) {
// 			right++;
// 		}
		
// 		// console.log(string[right + 1] === string[left - 1]);
// 		while (string[right + 1] === string[left - 1] && left > 0 && right < string.length) {
// 			left--;
// 			right++;
// 		}
		
// 		let substr = string.slice(left, right + 1);
// 		if (substr.length > result.length) result = substr;
// 	}
	
// 	return result;
// }