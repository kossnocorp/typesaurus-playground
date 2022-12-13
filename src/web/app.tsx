import { useOnAll } from "@typesaurus/preact";
import { useState } from "preact/hooks";
import { Doc } from "typesaurus";
import { addTodo, removeTodo, toggleTodo } from "../db/actions";
import { db, Todo } from "../db/index";

export function App() {
  const [todos] = useOnAll(db.todos);

  if (!todos) return <p>Loading...</p>;

  return (
    <div>
      <Form onAdd={(text) => addTodo(text)} />

      {!todos ? (
        <p>Loading...</p>
      ) : todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        <div>
          {todos.map((todo) => (
            <Item
              todo={todo}
              onToggle={() => toggleTodo(todo.ref.id, !todo.data.completed)}
              onRemove={() => removeTodo(todo.ref.id)}
              key={todo.ref.id}
            />
          ))}
        </div>
      )}

      <Seed />
    </div>
  );
}

interface FormProps {
  onAdd: (text: string) => void;
}

function Form({}: FormProps) {
  const [text, setText] = useState("");

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
      }}
    >
      <label>
        What do you want to do?{" "}
        <input
          type="text"
          placeholder="Describe the task"
          value={text}
          onChange={(e) => setText((e.target as HTMLInputElement).value)}
          required
        />
      </label>{" "}
      <button type="submit">Add</button>
    </form>
  );
}

interface ItemProps {
  todo: Doc<Todo>;
  onToggle: () => void;
  onRemove: () => void;
}

function Item({ todo, onToggle, onRemove }: ItemProps) {
  return (
    <div>
      <label key={todo.ref.id}>
        <input
          type="checkbox"
          checked={!!todo.data.completed}
          onChange={onToggle}
        />
        <span>{todo.data.text}</span>
      </label>{" "}
      <button onClick={onRemove}>🗑️</button>
    </div>
  );
}

function Seed() {
  return (
    <div>
      <a
        href="http://localhost:5000/typesaurus-playground/us-central1/seed"
        target="_blank"
      >
        Seed todos using Firebase Functions
      </a>
    </div>
  );
}
