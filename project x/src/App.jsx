import { useState ,useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Example from "./components/Example";
import Alpha from './components/APi'
function App() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    //Implementing the setInterval method
    const interval= setInterval(() => {
        setCount(count + 1);
        console.log(count)
    }, 1000);
    setIntervalId(interval); // Save the interval ID
    return () => clearInterval(interval); // Clear interval on unmount
  },[count]);

  const startInterval=()=>{
    
  }
  const Cleatinterval = () => {
    clearInterval(intervalId); // Clear the interval using the saved ID
  }
  return (
   
    <>
      <Header />
      <Example />
      <Footer />
      <Alpha/>
      <button onClick={startInterval}>start</button>
      <button onClick={Cleatinterval}>Stop</button>
    </>
  );
}

export default App;
