
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import React, { useState, useContext } from 'react';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CategoriesContext, CategoriesProvider } from './contexts/CategoriesContext';
import { CurrencyContext, CurrencyContextProvider } from './contexts/CurrencyContext';
import VisitHistoryContextProvider from './contexts/VisitHistory';
import Debug from './components/Debug';
import AdminPanel from './admin/AdminPanel';

import { selectProducts, categories } from './reducers/productReducer';
import { useSelector } from 'react-redux';
import { useGetUserByIdQuery } from './api/test';
import { useGetUsersQuery } from './api/test';

import { UsersComponent } from './api/usersComponent';
import { UserComponent } from './api/userComponent';


function App() {
  const { selectedCategory } = useContext(CategoriesContext)
  const { selectedCurrency, convertCurrency } = useContext(CurrencyContext);

  const products = useSelector(selectProducts);

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
        <Route path='/admin' element=
          {<AdminPanel categories={categories} />}
        >

        </Route>
        <Route path='/user/:id' element=
          {<UserComponent />
          }
        >
        </Route>
        <Route path='/users' element=
             {<UsersComponent />
            }
          ></Route>

      </Routes>

      <Footer />


    </BrowserRouter>
  );
}

export default App;
