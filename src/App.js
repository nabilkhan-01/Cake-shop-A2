// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import CakeCategories from './pages/CakeCategories';
import CakeDetails from './pages/CakeDetails';
import Cart from './pages/Cart';
import About from './pages/About';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CakeCategories />} />
          <Route path="/cake/:id" element={<CakeDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
