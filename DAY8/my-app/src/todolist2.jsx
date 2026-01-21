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
        setTodoList([...todoList, newTask])
    }
    const deletetask = (taskname) => {
    setTodoList(todoList.filter(task => task !== taskname));
    
};
    return (
        <div class="className">
            <div>
                <input onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div >
                {todoList.map((task) => {
                    return (
                        <div>
                            <h1>{task}</h1>
                            <button onClick={() => deletetask(task)}>Delete Task</button>


                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Todo;