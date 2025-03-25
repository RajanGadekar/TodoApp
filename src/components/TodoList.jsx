import React from "react";
import Todoitem from "./Todoitem";
import styles from "./todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  const sorted = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sorted.map((x) => (
        <Todoitem todos={todos} setTodos={setTodos} key={x.name} item={x} />
      ))}
    </div>
  );
};

export default TodoList;
