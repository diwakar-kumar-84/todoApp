import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CLEAR_COMPLETED,
  ALL_COMPLETED,
} from "../action/actionTypes";

const todoList = (state = [], action) => {
  console.log(action);
  if (action.type === ADD_TASK) {
    return [...state, { text: action.text, completed: false }];
  }
  if (action.type === DELETE_TASK) {
    return state.filter((items) => items.text !== action.text);
  }
  if (action.type === COMPLETE_TASK) {
    return state.map((item) =>
      item.text === action.text ? { ...item, completed: !item.completed } : item
    );
  }
  if (action.type === CLEAR_COMPLETED) {
    return state.filter((item) => item.completed === false);
  }
  if (action.type === ALL_COMPLETED) {
    return state.map((item) =>
      item.completed === false ? { ...item, completed: !item.completed } : item
    );
  }
  return state;
};
export default todoList;
