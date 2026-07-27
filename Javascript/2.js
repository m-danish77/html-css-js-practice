// Solving 2nd Question of JS

function checkNumber(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

console.log(checkNumber(5));
console.log(checkNumber(-5));
console.log(checkNumber(0));
