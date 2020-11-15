import React, { useState } from "react";
import Icon from "../UI/Icon/Icon";

import "./Task.scss";

const Task = ({
  addTask,
  taskName,
  completed,
  toggleCompleteHandler,
  edit,
  submitHandler,
  deleteHandler,
}) => {
  const [input, setInput] = useState(taskName);

  let icon = null;
  let text = null;

  if (addTask) {
    icon = <Icon iconType="add" />;
    text = (
      <form
        onSubmit={(e) => {
          if (input !== "") {
            submitHandler(e, input, false);
            setInput("");
          }
        }}
      >
        <input
          placeholder="Add Task"
          onChange={(newText) => setInput(newText.target.value)}
          value={input}
        />
      </form>
    );
  } else {
    if (edit) {
      icon = (
        <div onClick={deleteHandler}>
          <Icon iconType="delete" />
        </div>
      );
      text = (
        <input
          onChange={(newText) => setInput(newText.target.value)}
          value={input}
        />
      );
    } else {
      text = completed ? (
        <p className="TaskText CompletedText">{taskName}</p>
      ) : (
        <p className="TaskText">{taskName}</p>
      );
      icon = (
        <div onClick={toggleCompleteHandler}>
          {completed ? (
            <Icon iconType="complete"/>
          ) : (
            <Icon iconType="incomplete" />
          )}
        </div>
      );
    }
  }

  return (
    <div className="Task">
      <div className="Left">
        {icon}
        {text}
      </div>
    </div>
  );
};

export default Task;
