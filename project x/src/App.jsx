import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Example from "./components/Example";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Example />
      <Footer />
    </>
  );
}

export default App;
