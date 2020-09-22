import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  CLEAR_COMPLETED,
  ALL_COMPLETED,
  LOCAL_STOREAGE,
} from "../action/actionTypes";

const todoList = (state = [], action) => {
  console.log(action);
  if (action.type === ADD_TASK) {
    return [...state, { id: action.id, text: action.text, completed: false }];
  }
  if (action.type === DELETE_TASK) {
    return state.filter((items) => items.id !== action.id);
  }
  if (action.type === COMPLETE_TASK) {
    return state.map((item) =>
      item.id === action.id ? { ...item, completed: !item.completed } : item
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
  if (action.type === LOCAL_STOREAGE) {
    return (state = action.data);
  }
  return state;
};
export default todoList;
