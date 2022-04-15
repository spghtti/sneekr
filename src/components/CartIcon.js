import React from 'react';
import ShoppingCart from './images/shopping-cart.png';

const CartIcon = () => {
  return (
    <li className="tab cart-tab">
      <img className="icon" src={ShoppingCart} alt="Cart" />
    </li>
  );
};

export default CartIcon;
