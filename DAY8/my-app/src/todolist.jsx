import React from "react";
import "./App.css";
import { useState } from "react";
function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }
  const addTask = () => {
    setTodoList([...todoList, newTask]);
  }
  return (
    <div className="flex gap-6">
      <div>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      {
        todoList.map((task,index,arr) => {
          return (
            <div>
              
                <h1>{task}</h1>
              </div>
              )
            
        })
      }
    </div>
  )
}
export default Todo;