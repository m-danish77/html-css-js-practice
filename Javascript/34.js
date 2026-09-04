// Default Values + Renaming
// Given:

// const product = {
//   title: "Laptop",
//   price: 1000
// };

// Destructure:

// title into a variable called productName
// price
// brand, but give it a default value of "Unknown"

// Print all three.

const product = {
  title: "Laptop",
  price: 1000,
};

const { title: productName, price, brand = "unknown" } = product;
console.log(productName, price, brand);
