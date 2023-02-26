
import React from 'react'
import './Header.css';
import CategorySelector from './CategorySelector';

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
        <div className="header_cart">
          <button className="header_cart-button">
              Cart ({cartItemsCount})
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header