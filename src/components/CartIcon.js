import React from 'react';
import ShoppingCart from './images/shopping-cart.png';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <li className="tab-link">
      <Link to="/cart">
        <img className="icon" src={ShoppingCart} alt="Cart" />
      </Link>
    </li>
  );
};

export default CartIcon;
