
// Main function to sort words
const customSort = (words, alphabet) => {
  const alphabetSet = {};
  
  for(let i = 0; i < alphabet.length; i++){
    alphabetSet[alphabet[i]] = i;
  }
      
  words.sort((a,b) => comparator(a,b, alphabetSet));
  
  for(let i = 0; i < words.length; i++){
    words[i] = words[i].split(' ').join('');
  }
  
  return words;
}

// Helper comparator that will be passed in to the sort function above
const comparator = (a, b, alphabetSet) => {
  if(a === b) return 0;
      
  a = a.split(' '), b = b.split(' ');
      
  for(let i = 0; i < Math.min(a.length, b.length); i++){
      const aPos =  alphabetSet[a[i]], bPos = alphabetSet[b[i]] * 1;
      if(aPos < bPos) return -1;
      if(aPos > bPos) return 1; 
  }
      
  return a.length < b.length ? -1 : 1;
}