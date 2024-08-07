// import { useEffect, useState } from "react";
// const baseUrl = `http://localhost:8080/users`;

// function App() {
//   let [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch(baseUrl)
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);

//   return <div className="App">
//     {JSON.stringify(users)}
//   </div>
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import InventoryList from './components/InventoryList';
import ItemDetails from './components/ItemDetails';
import ItemForm from './components/ItemForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/items/new" element={<PrivateRoute><ItemForm /></PrivateRoute>} />
          <Route path="/items/:id" element={<PrivateRoute><ItemDetails /></PrivateRoute>} />
          <Route path="/items" element={<InventoryList />} />
          <Route path="/" element={<Navigate replace to="/items" />} />
        </Routes>
      </Router>
  );
}

export default App;
