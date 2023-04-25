export interface UserInterface {
  email: string
  firstname: string
  lastname: string
  age: number
  todoList: TodoList[]
}

export interface TodoList {
  name: string
  content: string
}
