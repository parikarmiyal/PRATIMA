import React from "react";
export default function User(props){
    return (
        <div>
            <h1> NAME : {props.name}</h1>
            <h1> AGE : {props.age}</h1>
        </div>
    )
}