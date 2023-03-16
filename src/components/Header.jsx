
import './Header.css';
import CategorySelector from './CategorySelector';
import AuthButton from './AuthButton';
import React, { useState, useContext } from 'react';
import CurrencyConverter from './CurrencyConverter';
import { ProductListContext } from '../contexts/ProductContext';

function Header({ totalCount }) {
  const { cartItemsCount } = useContext(ProductListContext)
  return (
    <header >
      <nav className="header">
        <div className="header_logo">Weaponry shop</div>
        <CategorySelector
          totalCount={totalCount}
        />

        <CurrencyConverter />

        <button className="header_cart-button">
          Cart ({cartItemsCount})
        </button>
        <AuthButton />
      </nav>
    </header>
  )
}

export default Header