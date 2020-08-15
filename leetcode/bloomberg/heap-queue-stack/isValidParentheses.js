// Cleaner solution using hash map for parantheses
const isValid = function(s) {

  let bracketMap = {
      ")" : "(",
      "}" : "{",
      "]" : "[" 
  }
  let bracketStack = [];
  
  for (let i = 0; i < s.length; i++) {  
    
      if (bracketMap[s[i]]) {
          if (bracketMap[s[i]] === bracketStack[bracketStack.length - 1]) {
              bracketStack.pop();
              continue;
          }
      }
      
      bracketStack.push(s[i]);
  }

  return bracketStack.length === 0 ? true : false
  
};



// Long winded solution with repetetive if statements
const isValid2 = function(s) {

  let bracketStack = [];
  
  for (let i = 0; i < s.length; i++) {
      
      if (s[i] === ")") {
          if (bracketStack[bracketStack.length - 1] === "(") {
              bracketStack.pop();
              continue;
          }
      } else if (s[i] === "}") {
          if (bracketStack[bracketStack.length - 1] === "{") {
              bracketStack.pop();
              continue;
          }
      } else if (s[i] === "]") {
          if (bracketStack[bracketStack.length - 1] === "[") {
              bracketStack.pop();
              continue;
          }
      }
      
      bracketStack.push(s[i]);

  }

  return bracketStack.length === 0 ? true : false
  
};