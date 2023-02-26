import React, { useState } from 'react';
import './ProductList.css';

const ProductCard = ({ product, onAddToCart,onRemoveCart }) => {
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
      <p>{product.price}</p>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckChange}
        />
        Add to Cart
      </label>
    </div>
  );
}

export default ProductCard;