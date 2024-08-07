// import React from 'react';

// const LoginPage = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted!');
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
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <p className="register-link"><a href="/register">Register</a></p>
    </div>
  );
};

export default LoginPage;

