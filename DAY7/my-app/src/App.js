import { useState } from "react";
import "./App.css";
function App(){
  const [num,setNum]=useState(20);
  function update(){
    setNum(num+1);
  };
  return (
    <>
    <button onClick={update}>Increment</button>
    <p>My age is {num} </p>
    </>
  )
}
export default App;