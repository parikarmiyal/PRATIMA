import React from "react";
import { useState } from "react";
import ChildDisplay from "./ChildDisplay";
import ChildInput from "./ChildInput";
export default function Parent2(){
    const [text,setText]=useState("");
    return(
        <div>
            <ChildInput text={text} setText={setText}></ChildInput>
            <ChildDisplay text={text}></ChildDisplay>
        </div>
    )
}