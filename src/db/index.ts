import { collection } from "typesaurus";

export const db = {
  todos: collection<Todo>("todos"),
};

export interface Todo {
  text: string;
  completed?: boolean;
}
