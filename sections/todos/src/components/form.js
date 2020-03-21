import React, { useState } from "react";
import axios from "axios";
import styles from "./todo.modules.css";

const Form = ({ reloadTodos }) => {
  const [text, setText] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    if (text === "") return;

    await axios.post("/api/create-todo", { text });

    setText("");
    reloadTodos();
  };

  return (
    <form className={styles.form}>
      <label className={styles.lable}>
        Add a todo
        <input
          className={styles.input}
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <button className={styles.button}>Save Todo</button>
      </label>
    </form>
  );
};

export default Form;
