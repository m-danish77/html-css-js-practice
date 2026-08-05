// Solving 11th Question

const numbers = [10, 25, 7, 40, 15, 3];
let max = numbers[0];
let min = numbers[0];
let sum = 0;
let average = 0;
for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }

  if (min > numbers[i]) {
    min = numbers[i];
  }

  sum += numbers[i];
}

average = sum / numbers.length;

console.log(
  `Largest: ${max}, Smallest: ${min}, Sum of all: ${sum}, Average: ${average}`,
);
