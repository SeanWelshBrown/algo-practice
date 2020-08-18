class WordCloudData {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }


  populateWordsToCounts(inputString) {

    inputString = inputString.toLowerCase();
    
    let currentWordStartIndex = 0;
    let currentWordLength = 0;
    
    for (let i = 0; i < inputString.length; i++) {
      const character = inputString.charAt(i);
      
      // if we've reached the end of our string
      if (i === inputString.length - 1) {
        if (this.isLetter(character)) {
          currentWordLength += 1;
        }
        if (currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
        }
        
      // if the character is a space or an em dash 
      } else if (character === " " || character === "—") {
        if (currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      
      // check for ellipses
      } else if (character === '.') {
        if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
          if (currentWordLength > 0) {
            const word = inputString.slice(currentWordStartIndex,
              currentWordStartIndex + currentWordLength);
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
        
      // check for a letter or an apostrophe
      } else if (this.isLetter(character) || character === '\'') {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }
        currentWordLength += 1;
        
      // check for hyphens in the middle of words
      } else if (character === '-') {
        if (i > 0 && this.isLetter(inputString.charAt(i - 1)) &&
          this.isLetter(inputString.charAt(i + 1))) {
          if (currentWordLength === 0) {
            currentWordStartIndex = i;
          }
          currentWordLength += 1;
        } else {
          if (currentWordLength > 0) {
            const word = inputString.slice(currentWordStartIndex,
              currentWordStartIndex + currentWordLength);
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }
      }
    }

  }
  
  addWordToMap(word) {
    if (this.wordsToCounts.has(word)) {
      this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
    } else {
      this.wordsToCounts.set(word, 1);
    }
  }
  
  isLetter(char) {
    return "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(char) >= 0;
  }

}


















// Tests

// There are lots of valid solutions for this one. You
// might have to edit some of these tests if you made
// different design decisions in your solution.

let desc = 'simple sentence';
let actual = new WordCloudData('I like cake').wordsToCounts;
let expected = new Map([['i', 1], ['like', 1], ['cake', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'longer sentence';
actual = new WordCloudData('Chocolate cake for dinner and pound cake for dessert').wordsToCounts;
expected = new Map([['and', 1], ['pound', 1], ['for', 2], ['dessert', 1],
  ['chocolate', 1], ['dinner', 1], ['cake', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'punctuation';
actual = new WordCloudData('Strawberry short cake? Yum!').wordsToCounts;
expected = new Map([['cake', 1], ['strawberry', 1], ['short', 1], ['yum', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'hyphenated Words';
actual = new WordCloudData('Dessert - mille-feuille cake').wordsToCounts;
expected = new Map([['cake', 1], ['dessert', 1], ['mille-feuille', 1]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'ellipses between words';
actual = new WordCloudData('Mmm...mmm...decisions...decisions').wordsToCounts;
expected = new Map([['mmm', 2], ['decisions', 2]]);
assert(isMapsEqual(actual, expected), desc);

desc = 'apostrophes';
actual = new WordCloudData("Allie's Bakery: Sasha's Cakes").wordsToCounts;
expected = new Map([['bakery', 1], ['cakes', 1], ["allie's", 1], ["sasha's", 1]]);
assert(isMapsEqual(actual, expected), desc);

function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    // In cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

function assert(condition, desc) {
  if (condition) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL`);
  }
}