import { add, remove, update } from "typesaurus";
import { collection } from "typesaurus";

export const db = {
  todos: collection<Todo>("todos"),
};

export interface Todo {
  text: string;
  completed?: boolean;
}

export function addTodo(text: string) {
  return add(db.todos, { text });
}

export function toggleTodo(id: string, completed: boolean) {
  return update(db.todos, id, { completed });
}

export function removeTodo(id: string) {
  return remove(db.todos, id);
}
