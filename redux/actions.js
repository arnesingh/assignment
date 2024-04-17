import { ADD_TASK } from "./actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
