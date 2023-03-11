function user(name, balance) {
  this.name = name;
  this.balance = balance;
  this.deposit = function (money) {
    console.log(`${money} is credited`);
    this.balance = this.balance + money;
    return this.balance;
  };
  this.withdrawal = function (money) {
    console.log(`${money} is debited`);
    this.balance = this.balance - money;
    return this.balance;
  };
}

let user1 = new user("Aman", 500);

console.log(user1);
console.log(user1.deposit(1000));
console.log(user1.withdrawal(100));
console.log(user1);
