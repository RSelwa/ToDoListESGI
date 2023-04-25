export interface UserInterface {
  email: string;
  firstname: string;
  lastname: string;
  age: number;
  todoList: ToDoListItem[];
}

export type ToDoListItem = {
  title: string;
  text: string;
  creationTimestamp: number;
};
