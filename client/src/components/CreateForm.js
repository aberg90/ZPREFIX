import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateForm.css';

const CreateForm = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      item_name: itemName,
      description,
      quantity: parseInt(quantity, 10),
      material,
      size,
    };
    // calls to api to make a POST request for adding items in database
    fetch('http://localhost:8080/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to create new item');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Item created:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error creating item:', error);
        alert('Failed to create item, please try again.');
      });
  };

return (
  <div className="create-item-form">
    <h2>Create New Item</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="material">Material:</label>
        <input
          type="text"
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="size">Size:</label>
        <input
          type="text"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="create-button">Create Item</button>
    </form>
  </div>
);
};

export default CreateForm;
