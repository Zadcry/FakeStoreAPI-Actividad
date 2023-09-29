import { useState } from 'react';
import ProductList from './ProductList.js'
import Product from './Product';
import Profile from './Profile.js'
import Cart from './Cart';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
    <header>
      <Profile />
    </header>
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route exact path="/products/:id" element={<Product cart={cart} setCart={setCart} />}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
