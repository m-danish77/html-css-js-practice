// Solving 4th Question of JS

function checkValue(value) {
  console.log(value ? "Truthy" : "Falsy");
}

checkValue(false); // Falsy
checkValue(0); // Falsy
checkValue(-0); // Falsy
checkValue(""); // Falsy
checkValue(null); // Falsy
checkValue(undefined); // Falsy
checkValue(NaN);
checkValue("hello");
