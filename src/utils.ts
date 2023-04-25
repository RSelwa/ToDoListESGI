import { ToDoListItem } from "./types/index"

export const isTitleUnique = (todoList: ToDoListItem[], title: string): boolean => {
  for (const todoListItem of todoList) {
    if (todoListItem.title === title) {
      return false
    }
  }
  return true
}