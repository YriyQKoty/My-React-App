import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import { CurrencyContext } from '../contexts/CurrencyContext';

const ProductList = ({ products }) => {
  const {selectedCurrency,convertCurrency} = useContext(CurrencyContext);

  const convertedProducts = products.map((product) => ({
    ...product,
    price: selectedCurrency ? product.price : convertCurrency(product.price, selectedCurrency),
  }));


  return (
    <div className="App">
      <main className="main-content">
        <div className="product-list">
          {convertedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductList;