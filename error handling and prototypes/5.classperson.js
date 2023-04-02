class Person {
  constructor(n = "Unknown", a = 0) {
    this.name = n;
    this.age = a;
  }
  getDetails() {
    return `Name:${this.name},Age:${this.age}`;
  }
}

let person1 = new Person("Mithu", 12);
console.log(person1.getDetails());

let person2 = new Person();
console.log(person2.getDetails());
