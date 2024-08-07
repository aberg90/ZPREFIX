import React from 'react';

const ItemDetails = ({ match }) => {
  return <h1>Details for Item ID: {match.params.id}</h1>;
};

export default ItemDetails;
