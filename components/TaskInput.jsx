import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: { id: Date.now(), text: task } });
      setTask("");
    }
  };

  return (
    <div className="input-group mb-2 gap-2 w-25">
      <input
        type="text"
        className="form-control"
        placeholder="Add task..."
        value={task}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
