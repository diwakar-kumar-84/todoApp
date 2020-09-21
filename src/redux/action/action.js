import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CLEAR_COMPLETED,
} from "./actionTypes";

export const addTask = (text) => ({
  type: ADD_TASK,
  text: text,
});
export const deleteTask = (text) => ({
  type: DELETE_TASK,
  text: text,
});
export const completeTask = (text) => ({
  type: COMPLETE_TASK,
  text: text,
});
export const clearCompletedTask = () => ({
  type: CLEAR_COMPLETED,
});
export const allComplete = () => ({
  type: ALL_COMPLETED,
});
