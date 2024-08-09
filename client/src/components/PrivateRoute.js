import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// allows logged in users a private route
const PrivateRoute = ({ children }) => {
  const isLoggedIn = true;

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;


