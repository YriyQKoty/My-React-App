
import CategorySelector from './CategorySelector';
import AuthButton from './AuthButton';
import React, { useState, useContext } from 'react';
import CurrencyConverter from './CurrencyConverter';
import { ProductListContext } from '../contexts/ProductContext';
import styles from './Header.module.css'
import { CartButton, Logo } from './Styles';
import Dialog from './Dialog';

function Header({ totalCount }) {
  const { cartItemsCount } = useContext(ProductListContext)

  return (
    <header className={`${styles.header_container}`}>
      <nav className={`${styles.header_container__header}`}>
        <Logo>Weaponry shop</Logo>
    
        <Dialog />
        <CategorySelector
          totalCount={totalCount}
        />

        <CurrencyConverter />

        <CartButton>
          Cart ({cartItemsCount})
        </CartButton>

        <AuthButton />
      </nav>
    </header>
  )
}

export default Header