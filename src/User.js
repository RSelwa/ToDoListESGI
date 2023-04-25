const isTitleUnique = (todoList, title) => {
  for (const todoListItem of todoList) {
    if (todoListItem.title === title) {
      return false
    }
  }
  return true
}

exports.User = class User  {
  email
  firstname
  lastname
  age
  todoList

  constructor(email, firstname, lastname, age, todoList) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.todoList = todoList || []
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
  
  addToDoListItem(toDoListItem) {
    let isEmailSended =  false

    if (!this.isValid()) {
      return {
        error: 'User is not valid',
        status: 'error',
      }
    }

    if (this.todoList.length > 0) {
      const lastItem = this.todoList[0]
      const dateNow = Date.now()

      if (dateNow < lastItem.creationTimestamp + 1800000) {
        return {
          error: 'Time creation to close',
          status: 'error'
        }
      }
    }

    if (toDoListItem.text.length > 1000) {
      return {
        status: "error", 
        error: "Your note should be less than 1000 char"
      }
    }

    if (this.todoList.length >= 10){
      return {
        error: 'Too many items',
        status: 'error'
      }
    }
    
    if (this.todoList.length === 7) {
      // const emailSenderService = new EmailSenderService('to', 'from', 'subject', 'blablabla')
      // emailSenderService.sendEmail()
      isEmailSended = true
    }

    if (!isTitleUnique(this.todoList, toDoListItem.title)) {
      return {
        error: 'Title is not unique',
        status: 'error'
      }
    }

    this.todoList.push(toDoListItem)
    
    return {
      status: "added", 
      emailSended: isEmailSended
    }
  }
};
