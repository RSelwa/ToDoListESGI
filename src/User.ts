import { UserInterface, TodoList } from "./types";

exports.User = class User implements UserInterface {
  email: string
  firstname: string
  lastname: string
  age: number
  todoList: TodoList[]

  constructor({email, firstname, lastname, age, todoList}: UserInterface) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.todoList = todoList
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
