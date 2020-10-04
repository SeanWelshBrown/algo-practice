function caesarCipherEncryptor(string, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	
	let newLetters = [];
	for (let char of string) {
		let newChar = alphabet[(alphabet.indexOf(char) + key) % 26];
		newLetters.push(newChar);
	}
	
	return newLetters.join("");
}