
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React, { useState, useContext } from 'react';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CategoriesContext, CategoriesProvider } from './contexts/CategoriesContext';
import { CurrencyContext, CurrencyContextProvider } from './contexts/CurrencyContext';
import { ProductListProvider } from './contexts/ProductContext';
import VisitHistoryContextProvider from './contexts/VisitHistory';
import Debug from './components/Debug';


const categories = [
  'Tank',
  'Ammo',
  'MLRS & Artillery',
  'APC & IFV',
  'Other'
];


const products = [
  {
    id: 1,
    image: 'https://via.placeholder.com/250',
    title: 'GMRLS',
    category: categories[Math.floor(Math.random() * categories.length)],
    description: 'Goooood morning VIETNAAAM.',
    price: 9.99
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/250',
    title: 'M1 Abrams',
    category: categories[Math.floor(Math.random() * categories.length)],
    description: 'I ain`t a senator son, no',
    price: 19.99
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/250',
    title: 'HIMARS',
    category: categories[Math.floor(Math.random() * categories.length)],
    description: 'I love the smell of napalm in the morning.',
    price: 29.99
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/250',
    title: 'M113',
    category: categories[Math.floor(Math.random() * categories.length)],
    description: 'Who called democracy??',
    price: 39.99
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/250',
    title: 'HIMARS',
    category: categories[Math.floor(Math.random() * categories.length)],
    description: 'I love the smell of napalm in the morning.',
    price: 29.99
  },
];

function App() {
  const { selectedCategory } = useContext(CategoriesContext)
  const { selectedCurrency, convertCurrency } = useContext(CurrencyContext);


  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const convertedProducts = filteredProducts.map((product) => ({
    ...product,
    price: convertCurrency(product.price, selectedCurrency),
  }));


  return (
    <BrowserRouter>
      <Header
        totalCount={filteredProducts.length}
      />
      <Routes>
        <Route path="/" element={

          <ProductList
            products={convertedProducts}
          />
        }>
        </Route>

        <Route path='/products/:productId' element={
          <ProductDetails
            products={convertedProducts} />
        }>
        </Route>

        <Route path='/debug' element={
          <VisitHistoryContextProvider>
            <Debug />
          </VisitHistoryContextProvider>
        }>
        </Route>

      </Routes>

      <Footer />


    </BrowserRouter>
  );
}

export default App;
