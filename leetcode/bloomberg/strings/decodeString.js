function decodeString(s) {

  let stack = [];

  for (let char of s) {

    if (char !== "]") { stack.push(char); continue; }

    let substr = "";
    let current = stack.pop();
    while (current !== "[") {
      substr = current + substr;
      current = stack.pop();
    }

    let num = "";
    current = stack.pop();
    while (!Number.isNaN(Number(current))) {
      num = current + num;
      current = stack.pop();
    }

    stack.push(current)
    stack.push(substr.repeat(Number(num)));
  }

  return stack.join("");
}