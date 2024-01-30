import { useState } from "react";
import "./App.css";
import imgs from './assets/21517039_22.jpg'

function App() {
  const [count, setCount] = useState("");
 const [percentage, setpercentage] = useState('');
  const [result, setresult] = useState('');
  const handlechange = (e) => {
    setCount(e.target.value);
  };
  const salvalue = parseInt(count);

  const handleperchange = (e) => {
    setpercentage(e.target.value);
  };
  const perValue = parseInt(percentage);

  const calcincrement = () => {
    setresult(salvalue * (perValue / 100) + salvalue);
  };
  const remove=()=>{
    setCount('')
    setresult('')
    setpercentage('')

  }
  return (
    <>
    <div className="container">
      <img src={imgs} alt="growth image" />
      <div className="calculator">
      <h1>Increment calculator</h1>
      <h2>Current salary : {count}</h2>
      <p>Enter your current salary</p>
      <input onChange={handlechange} type="number" name="" id="initialn" value={count}/>
      <p>Percentage of increment</p>
      <input onChange={handleperchange} type="number" name="" id="percentage" value={percentage}/>
     <div className="calcandRemovebuttons">
      <button onClick={calcincrement}>Calculate</button>
 <button onClick={remove}>Clear</button>
 </div>
      <h3>New Salary after increment :{result}</h3>
      </div>
      </div>
    </>
  );
}

export default App;
