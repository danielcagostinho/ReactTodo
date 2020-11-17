import React, { useState } from "react";
import Icon from "../UI/Icon/Icon";

import "./Task.scss";

const Task = ({
  taskType,
  taskName,
  completed,
  toggleCompleteHandler,
  submitHandler,
  deleteHandler,
}) => {
  const [input, setInput] = useState(taskName);

  let icon = null;
  let text = null;

  switch(taskType){
    case 'ADD_TASK':
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
      break;
    case 'EDIT_TASK':
      icon = (
        <div onClick={deleteHandler}>
          <Icon iconType="delete" />
        </div>
      );
      console.log(input)
      text = (
        // <input
        //   onChange={(newText) => setInput(newText.target.value)}
        //   value={input}
        // />
        
        <p className="task__label">{taskName}</p>
      );
      break;
    case "TASK":
      icon = (
        <div onClick={toggleCompleteHandler}>
          {completed ? (
            <Icon iconType="complete" />
          ) : (
            <Icon iconType="incomplete" />
          )}
        </div>
      );
      text = completed ? (
        <p className="task__label__completed">{taskName}</p>
      ) : (
        <p className="task__label">{taskName}</p>
      );
      break;
  }
  return (
    <div className="task">
      {icon}
      {text}
    </div>
  );
};

export default Task;
