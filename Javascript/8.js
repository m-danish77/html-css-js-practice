// Solving 8th Question

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(count);
}

countVowels("hello"); // 2
countVowels("javascript"); // 3
