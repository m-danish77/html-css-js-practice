// Exercise: Create your own Promise
// Write a function called checkAge(age) that returns a Promise.
// Rules:
// If age >= 18, call resolve() with "You are eligible"
// Otherwise, call reject() with "You are not eligible"
// Then consume the Promise using .then() and .catch().

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are eligible");
    } else {
      reject("You are not eligible");
    }
  });
}

checkAge(16)
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });
