import { useState } from "react";
import "./App.css";
function App(){
    const [num,setNum]=useState(0);
    const update = ()=> {
        setNum(num+1);
    };
    const decrement = () => {
if (num <= 0 ){
return setNum(0);
}
else{
return setNum(num - 1);
}
};
return (
<div className="flex  gap-4">
<button onClick={decrement}> - </button>
<h1>{num}</h1>
<button onClick={update}> + </button>
</div>
);
}
export default App;
