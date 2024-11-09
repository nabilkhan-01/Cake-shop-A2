import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Cake Shop. All rights reserved.</p>
      <nav>
        <a href="/">Home</a>
        <a href="/categories">Categories</a>
        <a href="/cart">Cart</a>
        <a href="/about">About Us</a>
      </nav>
    </footer>
  );
};

export default Footer;
