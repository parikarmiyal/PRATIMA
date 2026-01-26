
import React, { useState } from "react";
function App() {
    const [bgcolor, setbgcolor] = useState("white");
    const getRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const changecolor = () => {
        const newcolor = getRandomColor();
        setbgcolor(newcolor);
    }
    return(
        <div style={{height:"100vh",    
        width:"210vh",
        backgroundColor: bgcolor,  
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s", 
        }}>
            <button onClick={changecolor}>CHANGE COLOR </button>
            <p> current color is:{bgcolor}</p>
        </div>
    )

}
export default App;