import React from 'react';
import CartIcon from './components/CartIcon';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div id="siteNav">
          <ul className="tabParent">
            <div className="tab site-logo">
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <h1 className="siteLogo">sneekr</h1>
              </Link>
            </div>
            <div className="tab">
              <Link
                to="/shop"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <li className="tab-link">Shop</li>
              </Link>
            </div>
            <div className="tab">
              <Link
                to="/about"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <li className="tab-link">About</li>
              </Link>
            </div>
            <div className="cart-tab">
              <CartIcon />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
