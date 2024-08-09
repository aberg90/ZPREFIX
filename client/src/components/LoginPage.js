// // import React from 'react';

// // const LoginPage = () => {
// //   return (
// //     <div>
// //       <h1>Login</h1>
// //     </div>
// //   );
// // };

// // export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import { useAuth } from './AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // calls to the api to make a post request for user login
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login submitted!');
    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        login(data.user);
        navigate('/items');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed, please try again later.');
    }
  };

  const handleVisitor = () => {
    navigate('/items');
  };

  return (
    <div className="login-page">
      <button className="visitor-button" onClick={handleVisitor}>Browse as a Visitor</button>
      <h2 className="title">Inventory Management System</h2>
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <p className="register-link"><a href="/register">Register</a></p>
    </div>
  );
};

export default LoginPage;

