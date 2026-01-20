import React, { useState } from "react";
import { useEffect } from "react";
function App2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
    },[]);
    return (
        <div>
            <h1>The counter value is: {count} </h1>
        </div>
    );
}
export default App2;
