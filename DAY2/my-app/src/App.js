/*import React from "react";
function Events(e)
{

  const clickHere=(a,b)=>{
    alert(a + b.type);
  }
  return(
    <div>
      <button onSubmit={(event)=>clickHere("we just passed:",event)}>GOOD MMORNING </button>
    </div>
  )
  
}
export default Events
*/
/*
import React from "react";
function Events(){
  const arr=[2,3,4,5,6,7,8];
  return (
    <div>
      {
      arr.map((value)=>{
        return (
          value%2===0 && <h1>even number is :{value}</h1>);}
      )}
    </div>
  );
}
export default Events;
*/
/*
import React from "react";
function Events(e){
  
  const arr=[2,3,4,5,6,7,8];
  return (
    <div>
      {
      arr.map((value)=>{
        return (
          (value%2===0) ? <h1>even number is :{value}</h1>: <h1>odd number is: {value}</h1>);}
      )}
    </div>
  );
}
export default Events;
*/
/*
import { useState } from "react";
function Counter(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <p> count: {count}</p>
      <button onClick={()=>setCount(count+1)}>ADD</button>
      <button onClick={()=>setCount(count-1)}>SUBTRACT</button>
    </div>
  );
}
export default Counter;
*/
/*
import React from "react";
class Counter extends React.Component
{
  constructor(){
    super();
    this.state={count:0};
  }
  render(){
    return (
      <div>
        <p>count:{this.state.count}</p>
        <button onClick={()=>this.setState({count:this.state.count +1})}> ADD </button>
      </div>
    )
  }
}
export default Counter;
*/
/*
import React from "react";
class Welcome extends React.Component{
constructor(){
  super();
  this.state={name:"PARI"};
  this.handleClick=this.handleClick.bind(this);
}
handleClick(){
  alert("HELLO"+this.state.name);
}
render(){
  return(
    <button onClick={this.handleClick}> GREET </button>
  )
}
}
export default Welcome;
*/
import React from "react";
import imagedata from "./products/imagedata";

function App(){
        return (
        <div className="app">
            <div className="product-grid">
                {
                     imagedata.map((product)=> (
                        <div className="product-card" key={product.id}>
                            <img src={product.image}></img>
                            <p>{product.category}</p>
                        </div>
                     ) )
           
                }
           </div>
        </div>
    )
}
export default App;