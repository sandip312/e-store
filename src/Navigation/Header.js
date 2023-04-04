import React from 'react';
import CartButton from '../cart/CartButton';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <h1> Pareli Cosmetic Store</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="AboutUs.js">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <CartButton />
    </div>
  );
}

export default Header;

