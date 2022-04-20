import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop/Shop';
import About from './components/About';
import Cart from './components/Cart';
import React, { useState } from 'react';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (e) => {
    const arr = [...cart];
    arr.push({
      name: e.target.dataset.sneaker,
      price: e.target.dataset.price,
      count: e.target.dataset.count,
    });
    setCart(arr);
    console.log(cart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop handleClick={handleClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
