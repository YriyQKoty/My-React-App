import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductListProvider } from './contexts/ProductContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { CurrencyContextProvider } from './contexts/CurrencyContext';
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductListProvider>
        <CategoriesProvider>
          <CurrencyContextProvider>
            <App />
          </CurrencyContextProvider>
        </CategoriesProvider>
      </ProductListProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
