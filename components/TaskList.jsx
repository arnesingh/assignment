import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  return (
    <div className="w-25">
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {task.text}
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
