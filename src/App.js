import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  CLEAR_COMPLETED,
  ALL_COMPLETED,
} from "./redux/action/actionTypes";

function App() {
  const [text, setText] = useState("");
  const [filterView, setFilterView] = useState(null);

  const handleComplete = (item) => {
    dispatch({ type: COMPLETE_TASK, text: item });
//     localStorage.removeItem("data");
  };
  const handleDelete = (item) => {
    dispatch({ type: DELETE_TASK, text: item });
  };

  const handleClick = () => {
    if (text !== "") {
      console.log("clicked");
      console.log(text);
      dispatch({ type: ADD_TASK, text: text });
    }
//     localStorage.setItem("data", text);
    setText("");
  };
  const filterList = (data) => {
    console.log(data);
    if (data === "all") {
      setFilterView(null);
    } else if (data === "active") {
      setFilterView(false);
    } else if (data === "completed") {
      setFilterView(true);
    }
    console.log(filterView);
  };

  const allCompleted = () => {
    dispatch({ type: ALL_COMPLETED });
  };

  const dispatch = useDispatch();
  const todo = useSelector((state) => state);
  return (
    <div className="App">
      {console.log(todo)}
      {/* {localStorage.setItem("data", JSON.stringify(todo))} */}
      {/* Add task code */}
      <input
        name="task"
        placeholder="enter task"
        value={text}
        style={{ padding: "8px", marginTop: "50px" }}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        style={{ padding: "8px", margin: "5px" }}
        onClick={() => handleClick()}
      >
        ADD
      </button>
      {/* Display Tasks */}
      <div>
        <input type="radio" onClick={() => allCompleted()} />
        {filterView === null
          ? todo &&
            todo.map((items, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <li onClick={() => handleComplete(items.text)}>
                    {items.text}
                  </li>
                  <span
                    style={{ marginLeft: "100px" }}
                    onClick={() => handleDelete(items.text)}
                  >
                    x
                  </span>
                </div>
              );
            })
          : todo &&
            todo
              .filter((i) => i.completed === filterView)
              .map((items, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <li onClick={() => handleComplete(items.text)}>
                      {items.text}
                    </li>
                    <span
                      style={{ marginLeft: "100px" }}
                      onClick={() => handleDelete(items.text)}
                    >
                      x
                    </span>
                  </div>
                );
              })}
      </div>
      <div>
        <button
          style={{ padding: "8px", margin: "5px" }}
          onClick={() => filterList("all")}
        >
          All
        </button>
        <button
          style={{ padding: "8px", margin: "5px" }}
          onClick={() => filterList("active")}
        >
          Active
        </button>
        <button
          style={{ padding: "8px", margin: "5px" }}
          onClick={() => filterList("completed")}
        >
          completed
        </button>

        <button
          style={{ padding: "8px", margin: "5px" }}
          onClick={() => dispatch({ type: CLEAR_COMPLETED })}
        >
          clear completed
        </button>
      </div>
    </div>
  );
}

export default App;
