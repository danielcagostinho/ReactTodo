import React, { useState } from "react";
import Icon from "../UI/Icon/Icon";

import "./NewTask.scss";

const NewTask = ({ addTaskHandler }) => {
  const [input, setInput] = useState("");
  return (
    <div className="NewTask">
      <Icon />
      <input
        placeholder="Add Task"
        onChange={(newText) => setInput(newText.target.value)}
        value={input}
      />
      <div
        onClick={() => {
          addTaskHandler({ taskName: input, completed: false });
          setInput("");
        }}
      >
        <p>Submit</p>
      </div>
    </div>
  );
};

export default NewTask;
