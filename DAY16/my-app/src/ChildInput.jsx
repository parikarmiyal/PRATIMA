import React from "react";
export default function ChildInput({text,setText}){
    return (
        <div> 
            <input  type="text" value={text} placeholder="ENTER" onChange={(e)=>setText(e.target.value)}/>
            
        </div>
    )
}