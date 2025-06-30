import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Shop<span>Verse</span></Link>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
