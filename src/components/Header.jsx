
import React from 'react'
import './Header.css';
import CategorySelector from './CategorySelector';
import AuthButton from './AuthButton';

function Header({ cartItemsCount, categories, onCategoryChange, totalCount }) {

  return (
    <header >
      <nav className="header">
        <div className="header_logo">Weaponry shop</div>
          <CategorySelector
              categories={categories}
              onChange={onCategoryChange}
              totalCount={totalCount}
          />
          
          <button className="header_cart-button">
              Cart ({cartItemsCount})
          </button>
         <AuthButton/>
      </nav>
    </header>
  )
}

export default Header