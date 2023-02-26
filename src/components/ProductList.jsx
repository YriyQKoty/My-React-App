import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'

class ProductList extends Component {
  render() {
    const { products, onAddToCart, onRemoveCart, selectedCategory } = this.props;

    const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;


    return (
      <div className="product-list">
        {filteredProducts.map((product) =>  (
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