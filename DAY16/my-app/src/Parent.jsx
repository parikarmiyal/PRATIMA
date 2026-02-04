import { useState } from "react";
import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
export default function Parent(){
    const [count,setCount]=useState(0);
    return (
        <div>
        <CounterDisplay count={count}></CounterDisplay>
        <CounterButton count={count} setCount={setCount}></CounterButton>
        </div>
    )
}