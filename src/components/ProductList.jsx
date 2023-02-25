import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'

class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="product-list">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            image={product.image} 
            title={product.title} 
            description={product.description} 
            price={product.price} 
          />
        ))}
      </div>
    );
  }
}

export default ProductList;