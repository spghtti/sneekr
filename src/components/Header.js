import React from 'react';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header>
      <nav>
        <div id="siteNav">
          <ul className="tabParent">
            <div className="tab site-logo">
              <h1>sneekr</h1>
            </div>
            <div className="tab">
              <li className="tab-link">Shop</li>
            </div>
            <div className="tab">
              <li className="tab-link">About</li>
            </div>
            <div className="tab">
              <CartIcon />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
