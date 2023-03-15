import { useState } from 'react';

const CurrencyConverter = ({ selectedCurrency, onCurrencyChange }) => {
    const convertCurrency = (price, currency) => {
      const exchangeRates = {
        USD: 1,
        UAH: 36.55,
        EUR: 0.85
      };
  
      const convertedPrice = price * exchangeRates[currency];
  
      return convertedPrice.toFixed(2);
    };
  
    const handleCurrencyChange = (event) => {
      const currency = event.target.value;
      onCurrencyChange(currency);
    };
  
    return (
      <div>
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  };


export default CurrencyConverter;