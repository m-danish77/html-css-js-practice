// Solving 24 Question

const users = [
  { name: "Ali", age: 17 },
  { name: "Danish", age: 23 },
  { name: "Ahmed", age: 21 },
  { name: "Hamza", age: 16 },
];

const legalAgePeople = users.filter((user) => user.age > 18);

console.log(legalAgePeople);
