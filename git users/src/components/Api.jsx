import React, { useState, useEffect } from 'react';
 const Api = () => {

    const [values, setValues] = useState('');
    const [Name, setName] = useState('');
    const handleChange = event => {
      setValues(event.target.value);
      console.log('value is:', event.target.value);
    };

   const [data, setData] = useState(null);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch('https://api.github.com/users/${values}');
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         const jsonData = await response.json();
         setData(jsonData);
       } catch (error) {
         console.error('Error fetching data:', error);
       }
     };
 
     fetchData();
   }, []); // Empty dependency array means this effect will only run once after the initial render

    return (
      <div>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={values}
        />
  
        <h2>Message: {`https://api.github.com/users/${values}`}</h2>
     
        <button>Submit</button>
        <h2>Name</h2>
      </div>
    );
  };
  
export default Api;
