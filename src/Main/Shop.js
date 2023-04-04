import React from 'react';
import './Shop.css';

const Shop = () => {
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
      { id: 4, name: 'Product 4', price: 40 },
      { id: 5, name: 'Product 5', price: 50 },
      
    ];
  
  
  return (
    <div className="shop">
      <h2>Shop</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>MRP:{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
