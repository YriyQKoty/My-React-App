import React, { createContext, useState } from 'react';

export const ProductListContext = createContext({
  onAddToCart: () => {},
  onRemoveCart: () => {},
  cartItems: []
});

export const ProductListProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
     setCartItems([...cartItems, product]);
  };

  const onRemoveCart = (product) => {
    const prodIndex = cartItems.findIndex(p => p.id === product.id);
    if (prodIndex === -1) {
      return;
    }

    const newCartItems = cartItems.slice();

    newCartItems.splice(prodIndex, 1);

    setCartItems(newCartItems);
  };

  const currency = 'USD';

  return (
    <ProductListContext.Provider value={{ onAddToCart, onRemoveCart, cartItemsCount: cartItems.length, currency }}>
      {children}
    </ProductListContext.Provider>
  );
};