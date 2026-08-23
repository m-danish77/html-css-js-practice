// Solving 30 Question

const products = [
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Phone", price: 800, category: "electronics" },
  { name: "Shirt", price: 40, category: "clothing" },
  { name: "Shoes", price: 100, category: "clothing" },
  { name: "Headphones", price: 150, category: "electronics" },
];

// 1st
console.log(products.filter((prod) => prod.category === "electronics"));

// 2nd
console.log(products.filter((prod) => prod.price < 200));

// 3rd
console.log(products.map((prod) => prod.name));

// 4th
console.log(products.find((prod) => prod.price > 1000));

// 5th
console.log(products.some((prod) => prod.price > 1500));

// 6th
console.log(products.every((prod) => prod.price > 0));

// 6th
console.log(products.reduce((acc, prod) => acc + prod.price, 0));
