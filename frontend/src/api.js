// const API_URL = "http://localhost:8000";
const API_URL = "http://backend:8000";


export const getTodos = async () => {
  const res = await fetch(`${API_URL}/todos`);
  return res.json();
};

export const addTodo = async (title) => {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
};

export const toggleTodo = async (id) => {
  const res = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
  });
  return res.json();
};
