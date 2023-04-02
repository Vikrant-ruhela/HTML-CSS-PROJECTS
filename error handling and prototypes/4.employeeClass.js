class Employee {
  constructor(n, p, s) {
    this.name = n;
    this.position = p;
    this.salary = s;
  }

  getSalary() {
    return this.salary;
  }
}

let employee1 = new Employee("Aman", "SDE", 100000);
console.log(employee1.getSalary());
