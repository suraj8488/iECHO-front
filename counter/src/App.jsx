import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(12);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="counter">
        <h1>current value : {count}</h1>
        <button onClick={increment}>Add value</button>
        <button onClick={decrement}>remove value</button>
      </div>
    </>
  );
}

export default App;
