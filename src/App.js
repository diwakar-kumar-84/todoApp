import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  CLEAR_COMPLETED,
  ALL_COMPLETED,
  LOCAL_STOREAGE,
} from "./redux/action/actionTypes";

function App() {
  const [text, setText] = useState();
  const [filterView, setFilterView] = useState(null);

  const handleComplete = (item) => {
    dispatch({ type: COMPLETE_TASK, id: item });
  };
  const handleDelete = (item) => {
    if (todo.length === 1) {
      localStorage.setItem("data", JSON.stringify([]));
    }
    dispatch({ type: DELETE_TASK, id: item });
  };

  const handleClick = () => {
    // console.log(text.length);
    if (text !== undefined) {
      if (text.trim() !== "") {
        console.log("clicked");
        console.log(text);
        dispatch({ type: ADD_TASK, text: text, id: Date.now() });
      }
    }

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

  useEffect(() => {
    console.log(todo.length);
    if (todo.length !== 0) {
      localStorage.setItem("data", JSON.stringify(todo));
    }
    return () => {
      // cleanup;
      // localStorage.setItem("data", JSON.stringify(todo));
    };
  }, [todo]);

  useEffect(() => {
    console.log(localStorage.getItem("data").length);

    if (localStorage.getItem("data").length !== 2) {
      if (todo.length === 0 || localStorage.getItem("data").length !== 2) {
        dispatch({
          type: LOCAL_STOREAGE,
          data: JSON.parse(localStorage.getItem("data")),
        });
      }
    }
  }, []);

  const List =
    filterView === null
      ? todo
      : todo.filter((item) => item.completed === filterView);
  return (
    <div className="App">
      {console.log(todo)}

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
        {List &&
          List.map((items, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <li
                  onClick={() => handleComplete(items.id)}
                  style={{
                    color: items.completed === true ? "green" : null,
                  }}
                >
                  {items.text}
                </li>
                <span
                  style={{ marginLeft: "100px" }}
                  onClick={() => handleDelete(items.id)}
                >
                  x
                </span>
              </div>
            );
          })}
        <div>
          {todo.filter((item) => item.completed === false).length} Item Left
        </div>
      </div>

      <div>
        <button
          style={{
            padding: "8px",
            margin: "5px",
            backgroundColor: filterView === null ? "blue" : null,
          }}
          onClick={() => filterList("all")}
        >
          All
        </button>
        <button
          style={{
            padding: "8px",
            margin: "5px",
            backgroundColor: filterView === false ? "blue" : null,
          }}
          onClick={() => filterList("active")}
        >
          Active
        </button>
        <button
          style={{
            padding: "8px",
            margin: "5px",
            backgroundColor: filterView === true ? "blue" : null,
          }}
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
