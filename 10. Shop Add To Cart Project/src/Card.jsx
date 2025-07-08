import React from 'react';

const Card = ({ name, category, price, description, rating, image, onAddToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="category">{category}</p>
      <p className="price">₹{price.toFixed(2)}</p>
      <p className="description">{description}</p>
      <div className="rating">
        {Array.from({ length: rating }).map((_, i) => <span key={i}>⭐</span>)}
      </div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;