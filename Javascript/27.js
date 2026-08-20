// Solving 27 Question

function processArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function callback(number) {
  console.log(number * 2);
}
processArray([1, 2, 3], callback);
