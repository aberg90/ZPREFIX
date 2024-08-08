// import React from 'react';

// const ItemForm = () => {
//   return <h1>Item Form</h1>;
// };

// export default ItemForm;

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/ItemForm.css';


const ItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [material, setMaterial] = useState('');
  const [size, setSize] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // This pulls the info from db and populates it in the form
    fetch(`http://localhost:8080/items/${id}`)
      .then(response => response.json())
      .then(data => {
        setItemName(data.item_name || ''); //populate item OR empty string, like that for all of them
        setDescription(data.description || '');
        setQuantity(data.quantity ? data.quantity.toString() : '');
        setMaterial(data.material || '');
        setSize(data.size || '');
      })
      .catch((error) => {
        console.error('Error fetching item:', error)
      });
  }, [id]);


  const handleSubmit = (event) => {
    event.preventDefault();

    const editItem = {
      item_name: itemName,
      description,
      quantity: parseInt(quantity, 10),
      material,
      size,
    };
    // This fetch will send the edited data back to the db
    fetch(`http://localhost:8080/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to edit existing item');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Item successfully edited:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error editing item:', error);
        alert('Failed to edit item, please try again.');
      });
  };

  // same as the CreatForm.js, just changed things to edit
  return (
    <div className="edit-item-form">
      <h2>Edit Existing Item</h2>
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
        <button type="submit" className="update-button">Update Item</button>
      </form>
    </div>
  );
};

export default ItemForm;

