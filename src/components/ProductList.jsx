import React, { Component } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'

class ProductList extends Component {
  
  render() {
    const { products, onAddToCart, onRemoveCart, currency } = this.props;

    const convertCurrency = (price, currency) => {
      const exchangeRates = {
        USD: 1,
        UAH: 36.55,
        EUR: 0.85
      };
  
      const convertedPrice = price * exchangeRates[currency];
  
      return convertedPrice.toFixed(2);
    };
    const convertedProducts = products.map((product) => ({
      ...product,
      price: convertCurrency(product.price, currency),
    }));
  
   

    return (

      <div className="App">
        <main className="main-content">
          
          <div className="product-list">
            {convertedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onRemoveCart={onRemoveCart}
                currency = {currency}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default ProductList;