import { useState ,useEffect} from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Example from "./components/Example";
import Alpha from './components/APi'
function App() {
  
  return (
   
    <>
      <Header />
      <Example />
      <Alpha/>
      <Footer />
     
    </>
  );
}

export default App;
