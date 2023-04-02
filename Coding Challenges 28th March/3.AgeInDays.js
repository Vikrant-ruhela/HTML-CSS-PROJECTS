function ageInDays(obj, logResult) {
  let fullName = "";
  fullName = obj.firstName + " " + obj.lastName;

  let ageInDays;
  ageInDays = obj.age * 365;

  return logResult(fullName, ageInDays);
}

function logResult(fullName, ageInDays) {
  console.log(
    `The person's fullname is ${fullName} and their age in days is ${ageInDays}.`
  );
}

let person = {
  firstName: "Aman",
  lastName: "Vashisth",
  age: 20,
};

ageInDays(person, logResult);
