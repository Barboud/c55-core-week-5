function countVowels(text) {
  let count = 0;
  const lowerCaseTest = text.toLowerCase();

  for (let i = 0; i < lowerCaseTest.length; i++) {
    if (
      lowerCaseTest[i] === "a" ||
      lowerCaseTest[i] === "e" ||
      lowerCaseTest[i] === "i" ||
      lowerCaseTest[i] === "o" ||
      lowerCaseTest[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("HELLO")); // returns 2
console.log(countVowels("javascripta")); // returns 4
console.log(countVowels("")); // returns 0
