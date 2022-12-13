import { add, remove, update } from "typesaurus";
import { db } from ".";

export function addTodo(text: string) {
  return add(db.todos, { text });
}

export function toggleTodo(id: string, completed: boolean) {
  return update(db.todos, id, { completed });
}

export function removeTodo(id: string) {
  return remove(db.todos, id);
}
