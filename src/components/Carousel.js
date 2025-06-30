import React, { useState, useEffect } from 'react';
import './Carousel.css'; // optional if you want to separate styles

const banners = [
  'https://images.unsplash.com/photo-1716681864578-f98bf23b293f?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg',
  'https://images.pexels.com/photos/8000624/pexels-photo-8000624.jpeg',
  'https://images.pexels.com/photos/30466740/pexels-photo-30466740.jpeg'
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {banners.map((img, index) => (
        <div
          key={index}
          className={`carousel-image ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}

export default Carousel;
