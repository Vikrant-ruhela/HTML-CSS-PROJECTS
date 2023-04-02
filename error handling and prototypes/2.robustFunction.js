let obj = {
  name: "maninder",
  age: 12,
};

function getPerson(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  try {
    if (!typeof obj == Object) {
      throw new Error("Invalid parameter type");
    }
    if (keys[0] == "name" && keys[1] == "age") {
      return `Name: ${values[0]}, Age: ${values[1]}.`;
    } else {
      throw new Error("Invalid parameter type");
    }
  } catch (error) {
    return error.message;
  }
}

console.log(getPerson(obj));
