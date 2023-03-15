
import './App.css';
import './components/ProductList.css'
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom'

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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [selectedCurrency, setCurrency] = useState('USD');

  useEffect(() => { //using effect to apply default value for category
    setSelectedCategory(""); //setting default state for selected category
  }, []);

  //filtering products
  //...
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;


  function handleAddToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function handleRemoveCart(product) {
    const prodIndex = cartItems.findIndex(p => p.id === product.id);
    if (prodIndex === -1) {
      return;
    }

    const newCartItems = cartItems.slice();

    newCartItems.splice(prodIndex, 1);

    setCartItems(newCartItems);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleCurrencyChange(currency) {
    setCurrency(currency);
  }

  return (
    <BrowserRouter>
      <Header
        cartItemsCount={cartItems.length}
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onCurrencyChange={handleCurrencyChange}
        totalCount={filteredProducts.length}
      />
     
      <Routes>
        <Route path="/" element={
          <ProductList
            products={filteredProducts}
            onAddToCart={handleAddToCart}
            onRemoveCart={handleRemoveCart}
            selectedCategory={selectedCategory}
            currency = {selectedCurrency}
          />
        }>
        </Route>

        <Route path='/products/:productId' element={
          <ProductDetails
          products = {products}/>
        }>
        </Route>

      </Routes>

      <Footer />


    </BrowserRouter>
  );
}

export default App;
