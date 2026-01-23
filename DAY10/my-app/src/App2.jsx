
import React, {useState} from "react";
function Todo(){
  const [todolist,settodolist]=useState([]);
  const [newtask,setnewtask]=useState("");
  const handleChange=(event)=>{
    setnewtask(event.target.value);
  }
  const addTask=()=>{
    settodolist([...todolist,newtask]);
  }
  const deleteTask=(taskname)=>{
    settodolist(todolist.filter(task=>task!==taskname));
  }
  return (
    <div>
    <div>
      <input onChange={handleChange}></input>
      <button onClick={addTask}>  ADD TASK </button>
    </div>
    <div>
      {todolist.map((task)=>{
        return(
          <div>
            <h1>{task}</h1>
            <button onClick={()=>deleteTask(task)}>DELETE TASK </button>
          </div>
        )
      })}
    </div>
    </div>
  )
}
export default Todo;