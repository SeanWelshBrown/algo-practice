function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  let i = 0;
  let j = arrayOfChars.length - 1;

  while (i < j) {
    [arrayOfChars[i], arrayOfChars[j]] = [arrayOfChars[j], arrayOfChars[i]];
    i++;
    j--;
  }

  return arrayOfChars;
}