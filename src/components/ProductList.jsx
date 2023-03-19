import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {

  return (
    <div className="App">
      <main className="main-content">
        <div className={styles.product_list}>
          {products.map((product) => (
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