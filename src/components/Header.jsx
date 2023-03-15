
import './Header.css';
import CategorySelector from './CategorySelector';
import AuthButton from './AuthButton';
import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function Header({ cartItemsCount, categories, onCategoryChange, selectedCurrency, onCurrencyChange, totalCount }) {

  return (
    <header >
      <nav className="header">
        <div className="header_logo">Weaponry shop</div>
        <CategorySelector
          categories={categories}
          onChange={onCategoryChange}
          totalCount={totalCount}
        />
        <CurrencyConverter
          selectedCurrency={selectedCurrency}
          onCurrencyChange={onCurrencyChange}
        />
        <button className="header_cart-button">
          Cart ({cartItemsCount})
        </button>
        <AuthButton />
      </nav>
    </header>
  )
}

export default Header