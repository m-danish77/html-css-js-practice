// Spread — Arrays

// Given:
// const fruits = ["apple", "banana", "orange"];
// Create a new array containing:
// "mango", then all fruits, then "grape"
// Do not modify the original array.

const fruits = ["apple", "banana", "orange"];
const extraFruit = ["mango", ...fruits, "grape"];
console.log(extraFruit);
