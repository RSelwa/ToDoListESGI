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

export interface EmailSenderServiceInterface {
  to: string
  from: string
  subject: string
  content: string
}

export interface ResponseAddItem {
  status: "added" | "error", 
  error?: string,
  emailSended?: boolean
}