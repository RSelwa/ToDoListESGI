interface UserInterface {
  email: string
  firstname: string
  lastname: string
  age: number
}

exports.User = class User {
  email: string
  firstname: string
  lastname: string
  age: number
  
  constructor({email, firstname, lastname, age}: UserInterface) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  getUser() {
    return this;
  }

  isEmailValid() {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(this.email);
  }

  isNameValid() {
    return this.firstname.length >= 1 && this.lastname.length >= 1;
  }

  isAgeValid() {
    return this.age >= 13;
  }

  isValid() {
    return this.isEmailValid() && this.isNameValid() && this.isAgeValid();
  }
};
