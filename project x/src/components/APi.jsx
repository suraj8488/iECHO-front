import React, { useState } from 'react';

const PostRequestExample = () => {
  const [formData, setFormData] = useState({
    username: 'pankaj',
    password: '11a29c5c84b43fc0f5045a0a9bd60d65ce'
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://awsjenkins.echodigital.org/j_spring_security_check', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(formData.username + ':' + formData.password)
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostRequestExample;
