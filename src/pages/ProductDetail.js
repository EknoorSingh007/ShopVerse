import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  return (
    <div className="container">
      <h2>Product Detail - {id}</h2>
      <p>Detailed info about this product.</p>
    </div>
  );
}

export default ProductDetail;
