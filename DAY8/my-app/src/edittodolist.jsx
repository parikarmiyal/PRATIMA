import React, { useState } from "react";
import "./App.css";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
   
    setTodoList([...todoList, newTask]);

  };

  const deleteTask = (taskName) => {
    setTodoList(todoList.filter((task) => task !== taskName));
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditValue(todoList[index]);
  };

  const saveTask = (index) => {
    const updatedList = [...todoList];
    updatedList[index] = editValue;
    setTodoList(updatedList);
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen flex justify-between items-center">
      <div>
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        {todoList.map((task, index) => (
          <div key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={() => saveTask(index)}>Save</button>
              </>
            ) : (
              <>
                <h1>{task}</h1>
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => deleteTask(task)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
