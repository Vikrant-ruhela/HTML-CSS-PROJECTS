function NameObj(objj) {
  let {
    name: givenName,
    address: { street: streetAddress },
  } = objj;

  return {
    Name: givenName,
    Street: streetAddress,
  };
}

const person = {
  name: "Amit",
  age: 15,
  address: {
    street: "Model town",
    city: "Panipat",
    state: "haryana",
  },
};

let output = NameObj(person);
console.log(output);
