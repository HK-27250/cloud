import { useEffect, useState } from "react";
import { getTodos, addTodo, toggleTodo } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    const todo = await addTodo(title);
    setTodos([...todos, todo]);
    setTitle("");
  };

  const handleToggle = async (id) => {
    const updated = await toggleTodo(id);
    setTodos(todos.map(t => t.id === id ? updated : t));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Hitesh Kumar's</h1>

      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              onClick={() => handleToggle(todo.id)}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
