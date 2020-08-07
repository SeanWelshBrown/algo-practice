// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

function firstDuplicate(a) {
  let numSet = new Set();

  for (let i = 0; i < a.length; i++) {

    if (numSet.has(a[i])) return a[i];

    numSet.add(a[i]);

  }

  return -1;
}



let arr = [1, 2, 3, 4, 3, 2, 5, 4]
let arr2 = ["test", 3, 4, "no", 5, "blah", "no", 5, "test", "yup"]

console.log(firstDuplicate(arr2));