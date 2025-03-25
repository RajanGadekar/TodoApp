import React from "react";
import styles from "./todoitem.module.css";
const Todoitem = ({ item, todos, setTodos }) => {
  function handledelete(item) {
    // console.log("delete", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    // console.log("Item text", name);
    const newArry = todos.map((to) =>
      to.name === name ? { ...to, done: !to.done } : to
    );
    setTodos(newArry);
  }
  const taskcomp = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={taskcomp} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handledelete(item)} className={styles.delete}>
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};
// let todos = [
//   { name: "lunch", done: false },
//   { name: "dinner", done: true },
//   { name: "meeting", done: false },
// ];
// let name = "dinner";
// const newTodos = todos.map((x) =>
//   x.name === name ? { ...x, done: !x.done } : x
// );
// console.log(newTodos)
export default Todoitem;
