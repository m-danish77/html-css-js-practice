// Solving 6th Question

function sumTo(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += i;
  }
  return count;
}

console.log(sumTo(5));
