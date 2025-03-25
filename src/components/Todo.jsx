import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const completed = todos.filter((to) => to.done).length;
  const total = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList setTodos={setTodos} todos={todos} />
      <Footer tot={total} comp={completed} />
    </div>
  );
};

export default Todo;
