import { useState, useContext } from 'react';
import { CurrencyContext } from '../contexts/CurrencyContext';

const CurrencyConverter = () => {

    const {onCurrencyChange} = useContext(CurrencyContext)
  
    return (
      <div>
        <select onChange={(e) => {onCurrencyChange(e.target.value)}}>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  };


export default CurrencyConverter;