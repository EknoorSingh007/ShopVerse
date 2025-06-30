import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <>
      <Carousel />

      <section className="promo-strip">
        <p>⚡ Get 20% OFF on your first order • Free shipping above ₹999</p>
      </section>

      <section className="container">
        <h2>Browse Categories</h2>
        <div className="category-grid">
          <Link to="/products" className="category-card">Smartphones</Link>
          <Link to="/products" className="category-card">Headphones</Link>
          <Link to="/products" className="category-card">Accessories</Link>
          <Link to="/products" className="category-card">Fitness</Link>
        </div>
      </section>

      <section className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
