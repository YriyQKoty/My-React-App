import React, { createContext, useState } from 'react';

export const CurrencyContext = createContext({
    convertCurrency: () => {},
    onCurrencyChange: () => {},
    selectedCurrency: 'USD',
});


export const CurrencyContextProvider = ({ children }) => {
    const [selectedCurrency, setCurrency] = useState('USD');

    const convertCurrency = (price, currency) => {
        const exchangeRates = {
          USD: 1,
          UAH: 36.55,
          EUR: 0.85
        };

        const convertedPrice = price * exchangeRates[currency];
    
        return convertedPrice.toFixed(2);
      };

    const onCurrencyChange = (currency) => {
      
        setCurrency(currency);
    
    }


    return (
        <CurrencyContext.Provider value={{ selectedCurrency, convertCurrency, onCurrencyChange }}>
            {children}
        </CurrencyContext.Provider>
    );
}