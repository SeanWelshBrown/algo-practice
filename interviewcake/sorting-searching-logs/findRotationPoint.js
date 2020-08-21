// Find the rotation point in the vector

function findRotationPoint(words) {

  let left = 0;
  let right = words.length - 1;
  
  if (words[left] < words[right]) {
    return 0;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (words[mid - 1] > words[mid]) return mid;
    
    if (words[mid + 1] < words[mid]) return mid + 1;
    
    if (words[mid] < words[left]) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
}





// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}