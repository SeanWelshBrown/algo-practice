function mergeSort(arr) {

  if (arr.length === 1) return arr;

  let midpoint = Math.floor(arr.length / 2);

  let a = arr.slice(0, midpoint);
  let b = arr.slice(midpoint);

  a = mergeSort(a);
  b = mergeSort(b);

  return merge(a, b);

}

function merge(a, b) {

  let c = [];

  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c.push(a[i]);
      i++;
    } else {
      c.push(b[j])
      j++;
    }
  }

  while (i < a.length) {
    c.push(a[i]);
    i++;
  }

  while (j < b.length) {
    c.push(b[j]);
    j++;
  }

  return c;

}

// TESTS
let arr1 = [6, 3, 2, 4, 0, 5, 1]
let arr2 = [11, 4, 2, 7, 12, 8, 5]
console.log(mergeSort(arr2));