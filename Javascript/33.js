// Small exercise to fetch data from the internet (Promises Exercise)

async function userFetching() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // this gives the JS object, in which the body is a readable stream and we convert it to json in next step to use it.
    const data = await response.json(); // we convert body to json so that we can use the data
    data.forEach((person) => {
      console.log(`Name: ${person.name}, City: ${person.address.city}`);
    });
  } catch (e) {
    console.log(e);
  }
}
userFetching();
