import React, { useState } from 'react';

const Accordion = () => {
  const AccordQa=[
    {
      question:"what is react",answer:"jdsn"
    },
    {
      question:"what is javascript", answer:"wkdd"
    }
  ]
  const [toggle,setToggle]=useState(false)
  const handleToggle= function(){
    setToggle(!toggle)
  }
  console.log(toggle)
const question=AccordQa.map((q,index)=><h1 key={index}>{q.question}</h1>)
  return (
    <div className="container">
    <div className="question" onClick={handleToggle}>{question}</div>
    </div>
  );
};

export default Accordion;