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
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import InventoryList from './components/InventoryList';
import ItemDetails from './components/ItemDetails';
import CreateForm from './components/CreateForm';
import ItemEditForm from './components/ItemForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/items/new" element={<CreateForm />} />
          <Route path="/items/name/:item_name" element={<ItemDetails />} />
          <Route path="/items/edit/:id" element={<ItemEditForm />} />
          <Route path="/items" element={<InventoryList />} />
          <Route path="/" element={<Navigate replace to="/items" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


