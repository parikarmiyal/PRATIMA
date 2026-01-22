import React, { useState } from "react";

function RandomColorGenerator() {
  
  const [bgColor, setBgColor] = useState("white"); 

 
  const getRandomColor = () => `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;

  const changeColor = () => {
    const newColor = getRandomColor();
    setBgColor(newColor);
  };
  return (
  <div style={{height:"100vh",    
        width:"210vh",
        backgroundColor: bgColor,  
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s", 
        }}
      
    >
      <button
        onClick={changeColor}
      >
        Change Color
      </button>

      <p>
        Current Color: {bgColor}
      </p>
    </div>
  );
}

export default RandomColorGenerator;
