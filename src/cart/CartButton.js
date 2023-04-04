import React from 'react';

function CartButton() {
  return (
    <button className="cart-button" onClick={() => alert('Added to cart!')}>
      Add to cart
    </button>
  );
}

export default CartButton;
