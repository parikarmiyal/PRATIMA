import React from "react";
export default function CounterButton({count,setCount}){
    return(
        <div>
    <button onClick={()=>{setCount(count+1)}}>INCREMENT</button>
    <button onClick={()=>{setCount(count-1)}}>DECREMENT</button>
    </div>
    )
}