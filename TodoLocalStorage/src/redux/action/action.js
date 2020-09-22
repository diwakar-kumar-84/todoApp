import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CLEAR_COMPLETED,
} from "./actionTypes";

export const addTask = (text, id) => ({
  id: id,
  type: ADD_TASK,
  text: text,
});
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});
export const completeTask = (text) => ({
  type: COMPLETE_TASK,
  id,
});
export const clearCompletedTask = () => ({
  type: CLEAR_COMPLETED,
});
export const allComplete = () => ({
  type: ALL_COMPLETED,
});
export const localStorageData = (data) => ({
  type: LOCAL_STOREAGE,
  data: data,
});
