class User {
  constructor(username = "not entered", password = "0") {
    this.username = username;
    this._password = password;
  }

  getPassword() {
    try {
      if (this._password == 0) {
        throw new Error();
      }
      return this._password.replace(/./g, "*");
    } catch (error) {
      return "enter correct password";
    }
  }

  setPassword(newPassword) {
    if (
      newPassword.length < 8 ||
      !/[A-Z]/.test(newPassword) ||
      !/[0-9]/.test(newPassword)
    ) {
      console.log(
        "Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    } else {
      this._password = newPassword;
    }
  }
}

let user1 = new User("Mithun", "Password123");
console.log(user1.getPassword());

let user2 = new User();
user2.setPassword("myPassword");

let user3 = new User();
user3.setPassword("MyPassword");

let user4 = new User();
user4.setPassword("Mypassword123");

console.log(user4.getPassword());
