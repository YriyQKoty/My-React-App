import React from 'react';
import './ProductList.css'

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <span>{props.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;