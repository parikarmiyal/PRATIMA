import React , { useState } from "react";
function App(){
 const text = "React is a popular JavaScript library for building user interfaces, especially for single-page applications. It allows developers to create reusable UI components and manage the state of their applications efficiently. With React, you can build complex applications that are fast, responsive, and easy to maintain. The virtual DOM in React ensures that updates happen quickly without reloading the entire page, improving performance and user experience. Whether you are a beginner or an experienced developer, learning React opens up many opportunities in modern web development.";

  const [showfulltext,setfulltext]=useState(false);
  const toggle = ()=>
  {setfulltext(!showfulltext)};
  return(
    <div>
      <p>{showfulltext?text:text.substring(0,50)+"..."}</p>
      <button onClick={toggle}>{showfulltext?"read less":"read more"}</button>
    </div>
  )
}
export default App;