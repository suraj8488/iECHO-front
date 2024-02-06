import React, { useState } from 'react';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: 'pankaj',
      password: 'pankaj@123'
    };

    try {
      const response = await fetch('https://awsjenkins.echodigital.org/job/blank-service-dev/', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      // Handle successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Built</button>
      </form>
    </div>
  );
};

export default Login;
