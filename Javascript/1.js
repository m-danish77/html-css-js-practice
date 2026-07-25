function hello(name, greeting) {
  return greeting("Boss") + " " + name;
}

function greeting(eGreeting) {
  return "Hello!" + " " + eGreeting;
}

console.log(hello("Danish", greeting));
