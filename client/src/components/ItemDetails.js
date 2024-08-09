// import React from 'react';

// const ItemDetails = ({ match }) => {
//   return <h1>Details for Item ID: {match.params.id}</h1>;
// };

// export default ItemDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { item_name } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/items/name/${item_name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch item details');
        }
        const data = await response.json();
        setItemDetails(data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItemDetails();
  }, [item_name]);

  // this allows the page to wait for the data, if not, it breaks
  if (!itemDetails) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <h2>{itemDetails.item_name}</h2>
      <p>Quantity: {itemDetails.quantity}</p>
      <p>Description: {itemDetails.description}</p>
      <p>Quantity: {itemDetails.quantity}</p>
      <p>Material: {itemDetails.material}</p>
      <p>Size: {itemDetails.size}</p>
    </div>
  );
};

export default ItemDetails;
