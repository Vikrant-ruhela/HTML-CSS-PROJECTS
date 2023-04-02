class car {
  constructor(c, m, y) {
    this.company = c;
    this.model = m;
    this.year = y;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company}  ${this.model}`;
  }
}

let myCar = new car("skoda", "Rapid", 2022);
console.log(myCar.getDescription());
