import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return <h1>{count}</h1>;
}

export default App;
