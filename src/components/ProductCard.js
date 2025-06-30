import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    setAdded(isInCart);
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} width="200" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link><br />

      <button
        onClick={handleAddToCart}
        disabled={added}
        className={`add-cart-btn ${added ? 'added' : ''}`}
      >
        {added ? '✔ Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard;
