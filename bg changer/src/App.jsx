import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");
const change=()=>{

}
  return (
    <>
    <div style={{backgroundColor:color}}>
      <h1>hi</h1>
      <button onClick={()=>setcolor('red')}>red</button>
      <button onClick={()=>setcolor('blue')}>blue</button>
      </div>
    </>
  );
}

export default App;
