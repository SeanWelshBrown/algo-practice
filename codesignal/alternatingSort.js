function alternatingSort(a) {
	const b = [];
  
  let j = a.length - 1;
  for (i = 0; i <= a.length - 1; i++) {
      if (i === 0) {    
          b[i] = a[i];
      } else if (i % 2 === 0) {
          b[i] = a[i - 1];
      } else {
          b[i] = a[j];
          j--;
      }
  }
  
  let sorted = true;
  for (i = 0; i < b.length - 1; i++) {
      if (b[i] > b[i + 1]) {
          sorted = false;
      }
  }
  
  console.log(b)
  
  return sorted;

}
