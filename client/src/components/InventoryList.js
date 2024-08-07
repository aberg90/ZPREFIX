import React from 'react';
import '../styles/InventoryList.css';

const InventoryList = () => {
  const items = [
    { id: 1, name: 'Nails', quantity: 10, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id eleifend nibh. Integer et aliquam odio. In a porttitor dolor, vel maximus dui. In in ullamcorper eros. Morbi turpis odio, vulputate at sagittis eu, consectetur vel lorem. Pellentesque ac ullamcorper sem, id laoreet nulla. Fusce euismod aliquet justo, aliquam varius sapien viverra nec. Pellentesque eget metus arcu. Sed et magna luctus, congue felis nec, cursus magna. Proin malesuada blandit dictum. Maecenas massa dolor, viverra quis gravida a, ornare a diam. Nullam blandit blandit ligula sed pulvinar. Aliquam a nibh volutpat, sollicitudin enim eget, malesuada sapien. Aliquam et tristique velit. Quisque.' },
    { id: 2, name: 'Bolts', quantity: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id eleifend nibh. Integer et aliquam odio. In a porttitor dolor, vel maximus dui. In in ullamcorper eros. Morbi turpis odio, vulputate at sagittis eu, consectetur vel lorem. Pellentesque ac ullamcorper sem, id laoreet nulla. Fusce euismod aliquet justo, aliquam varius sapien viverra nec. Pellentesque eget metus arcu. Sed et magna luctus, congue felis nec, cursus magna. Proin malesuada blandit dictum. Maecenas massa dolor, viverra quis gravida a, ornare a diam. Nullam blandit blandit ligula sed pulvinar. Aliquam a nibh volutpat, sollicitudin enim eget, malesuada sapien. Aliquam et tristique velit. Quisque.' },
    { id: 3, name: 'Screws', quantity: 100, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id eleifend nibh. Integer et aliquam odio. In a porttitor dolor, vel maximus dui. In in ullamcorper eros. Morbi turpis odio, vulputate at sagittis eu, consectetur vel lorem. Pellentesque ac ullamcorper sem, id laoreet nulla. Fusce euismod aliquet justo, aliquam varius sapien viverra nec. Pellentesque eget metus arcu. Sed et magna luctus, congue felis nec, cursus magna. Proin malesuada blandit dictum. Maecenas massa dolor, viverra quis gravida a, ornare a diam. Nullam blandit blandit ligula sed pulvinar. Aliquam a nibh volutpat, sollicitudin enim eget, malesuada sapien. Aliquam et tristique velit. Quisque.' },
  ];

  return (
    <div>
      <div className="header">
        <h1>Inventory Management System</h1>
        <button className="login-button">Login</button>
      </div>
      <h2 className="current-inventory">Current Inventory</h2>
      <div className="inventory-list">
        {items.map(item => (
          <div key={item.id} className="item">
            <div className="item-header">
              <h2>{item.name}</h2>
              <button className="details-button">View Details</button>
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

