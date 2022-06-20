import React, { useState } from "react";

const Todo = () => {
  const d = new Date();
  const today = d.getDate();
  const year = d.getFullYear();
  const month = String(d.getMonth()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${today}`;

  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(`${formattedDate}`);
  const [time, setTime] = useState(``);
  const [todoLog, setTodoLog] = useState([]);

  const addItem = (e) => {
    e.preventDefault();

    let todoLogs = {
      Note: todo,
      DateLog: date,
      Time: time,
    };

    if (!todo) {
      let alertShowed = document.querySelector("#alert");
      alertShowed.textContent = "Please enter a note";
      alertShowed.style.backgroundColor = "red";
      alertShowed.style.color = "white";
      return;
    } else if (todo) {
      let alertShowed = document.querySelector("#alert");
      alertShowed.textContent = "Note added";
      alertShowed.style.backgroundColor = "green";
      alertShowed.style.color = "white";
    }

    setTodoLog((oldList) => [...oldList, todoLogs]);
    setTodo("");
  };

  const deleteItem = (id) => {
    const newArr = todoLog.filter((item) => {
      item.id !== id;
    });

    setTodoLog(newArr);
  };

  return (
    <div className="Todolist-container">
      <div className="form-container">
        <h1>To Do List</h1>
        <span id="alert"></span>
        <form className="main-form">
          <div id="display-container">
            <div className="task-label">
              <span>Task</span>
              <span id="date-container">
                Date:
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </span>
            </div>
            <div className="text-container">
              <input
                type="text"
                name="display"
                id="display"
                autoComplete="off"
                maxLength={25}
                value={todo}
                onChange={(e) => {
                  setTodo(e.target.value);
                  setTime(d.toLocaleTimeString());
                }}
              />
            </div>
            <button onClick={addItem} id="save-btn">
              Add
            </button>
          </div>
        </form>
        {/* Task Display */}
      </div>
      <div className="task-display-container">
        <div className="task-title-box">
          <h2>Task</h2>
        </div>

        <div className="task-display-table">
          <ul>
            {todoLog.map((logs) => {
              return (
                <li key={logs.DateLog} className="listed-items">
                  {`${logs.Note}`}
                  <button
                    id="del-btn"
                    onClick={() => {
                      deleteItem(todoLog.DateLog);
                    }}
                  >
                    ❌
                  </button>

                  <div>
                    Set date: {logs.DateLog} / Time added: {logs.Time}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
