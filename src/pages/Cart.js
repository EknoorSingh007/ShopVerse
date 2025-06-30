import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={{ fontSize: '1.2rem' }}>🛒 Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-left">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} × {item.qty}</p>
                    <p><strong>Total: ₹{item.price * item.qty}</strong></p>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Cart Total: ₹{total}</h3>
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
