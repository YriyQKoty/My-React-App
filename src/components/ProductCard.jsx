import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductCard = ({ product, onAddToCart,onRemoveCart, currency }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckChange() {
    if (!isChecked) {
      onAddToCart(product);
    }
    else {
      onRemoveCart(product);
    }
    setIsChecked(!isChecked);
  }

  return (
    <div className="product-card">
      <h4>{product.category}</h4> 
      <img src={product.image} alt={product.title} />
      <h2>{product.title} </h2> 
      <p>{product.description}</p>
      <p>{product.price} {currency}</p>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckChange}
        />
        Add to Cart
      </label>
      <Link to={`products/${product.id}`}>Details</Link>
    </div>
  );
}

export default ProductCard;