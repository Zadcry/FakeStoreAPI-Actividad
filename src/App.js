import logo from './logo.svg';
import ProductList from './ProductList.js'
import Product from './Product';
import Profile from './Profile.js'
import Cart from './Cart';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <header>
      <Profile />
    </header>
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route exact path="/products/:id" element={<Product />}/>
        <Route exact path="/cart/" element={<Cart />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
