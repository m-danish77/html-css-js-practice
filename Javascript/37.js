const person = {
  name: "Danish",

  regular() {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  },
};

person.regular();
person.arrow();

// Danish
// TypeError: Cannot read properties of undefined (reading 'name')
// if i am using the commonJS modules then i will get undefined.
