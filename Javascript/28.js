// Solving 28 Question

const cart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 80, quantity: 1 },
];

// const totalCost = cart.map((product) => {
//   return product.price * product.quantity;
// });

// console.log(totalCost.reduce((acc, cur) => acc + cur, 0));
const totalCost = cart.reduce(
  (acc, product) => acc + product.price * product.quantity,
  0,
);
console.log(totalCost);
