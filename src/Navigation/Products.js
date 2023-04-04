import React from 'react';
import CartButton from '../cart/CartButton';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <div className="product-item">
        <img src="" alt="Product 1" />
        <h3>Product 1</h3>
        <p>MRP:450</p>
        <CartButton />
      </div>
      <div className="product-item">
        <img src="" alt="Product 2" />
        <h3>Product 2</h3>
        <p>MRP:450</p>
        <CartButton />
      </div>
      <div className="product-item">
        <img src="" alt="Product 3" />
        <h3>Product 3</h3>
        <p>MRP:450</p>
        <CartButton />
      </div>
      <div className="product-item">
        <img src="" alt="Product 4" />
        <h3>Product 4</h3>
        <p>MRP:450</p>
        <CartButton />
      </div>
      <div className="product-item">
        <img src="" alt="Product 5" />
        <h3>Product 5</h3>
        <p>MRP:450</p>
        <CartButton />
      </div>
      <div className="product-item">
        <img src="" alt="Product 6" />
        <h3>Product 6</h3>
        <p>MRP:450</p>
        <CartButton />
      </div>
    </div>
  );
}

export default Products;
