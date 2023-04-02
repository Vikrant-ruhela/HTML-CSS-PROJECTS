function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let student = new Student("Mithun");
student.printDetails();
