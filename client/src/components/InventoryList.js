import React, { useEffect, useState } from 'react';
import '../styles/InventoryList.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const InventoryList = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const baseUrl = `http://localhost:8080/items`;

    fetch(baseUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error getting Network Response');
        }
        return res.json();
      })
      .then(data => {
        console.log('Fetched items:', data);
        setItems(data);
      })
      .catch(error => {
        console.error('The fetch did not work', error)
      });
  }, [])

  // const handleLogin = () => {
  // navigate('/login');
  // };

  const handleViewDetails = (itemName) => {
    navigate(`/items/name/${encodeURIComponent(itemName)}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      fetch(`http://localhost:8080/items/${id}`, { method: 'DELETE' })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete the item');
          }
          setItems(items.filter(item => item.id !== id)); // Remove the item from the UI
        })
        .catch(error => console.error('Error deleting item:', error));
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Inventory Management System</h1>
        {user ? (
          <>
            <button onClick={() => navigate('/items/new')}>Create</button>
            <button onClick={logout} className="login-button2">Logout</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')} className="login-button2">Login</button>
        )}
      </div>
      <h2 className="current-inventory">Current Inventory</h2>
      <div className="inventory-list">
        {items.map(item => (
          <div key={item.id} className="item">
            <div className="item-header">
              <h2>{item.item_name || 'Unicorn'}</h2>
              <div className="item-buttons2">
                <button onClick={() => handleViewDetails(item.item_name)}>View Details</button>
                {user && (
                  <>
                    <button onClick={() => navigate(`/items/edit/${item.id}`)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </>
                )}
              </div>
            </div>
            <div className="quantity-center">Quantity: {item.quantity}</div>
            <p className="description-title">Description:</p>
            <p>{item.description.substring(0, 100)}{item.description.length > 100 ? "..." : ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;