// Check if any permutation of the input is a palindrome


// Cleaner solution using Set to check for odd numbers
function hasPalindromePermutation(theString) {


  let charSet = new Set();
  
  for (let i = 0; i < theString.length; i++) {
    
    let currentChar = theString[i];
    
    if (charSet.has(currentChar)) {
      charSet.delete(currentChar);
    } else {
      charSet.add(currentChar);
    }
  }
  
  return charSet.size <= 1;
}






// Solution using Object and int values
function hasPalindromePermutation2(theString) {

  // Check if any permutation of the input is a palindrome
  let charHash = {};
  for (let i = 0; i < theString.length; i++) {
    
    let currentChar = theString[i];
    charHash[currentChar] = charHash[currentChar] + 1 || 1;
  }
  
  let oddTotal = 0;
  for (char in charHash) {
    
    if (charHash[char] % 2 !== 0) oddTotal++;
    
    if (oddTotal > 1) return false;
  }

  return true;
}



















// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}