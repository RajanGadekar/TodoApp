import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputcontainer}>
          <input
            className={styles.moderninput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
            placeholder="Enter todo item...."
            type="text"
          />
          <button className={styles.mordenbutton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
