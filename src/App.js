import React from 'react';
import { Routes, Route } from "react-router-dom";
import { GlobalStateProvider } from './Reducer.js';
import ProductList from './ProductList';
import Product from './Product';
import Cart from './Cart';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <GlobalStateProvider>
      <header>
        <Profile />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
