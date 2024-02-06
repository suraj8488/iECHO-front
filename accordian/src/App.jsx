import React from 'react';
import Accordion from './components/Accordian';
import { accordionData } from './components/data';
import './App.css'
const App = () => {
  return (
    <div>
      
      <h1>React Accordion Demo</h1>
    
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      
      </div>
    </div>
  );
};

export default App;
