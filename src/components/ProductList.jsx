import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'

class ProductList extends Component {
  render() {
    const { products, onAddToCart, onRemoveCart} = this.props;

    return (
      <div className="product-list">
        {products.map((product) =>  (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onRemoveCart={onRemoveCart}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;