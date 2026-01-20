import { useState, useEffect } from "react";
function App() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
    return (
        <div>
            <button onClick={() => setCount((c) =>c + 1)}>
                Click {count} times
            </button>
        </div>
    );
}
export default App;